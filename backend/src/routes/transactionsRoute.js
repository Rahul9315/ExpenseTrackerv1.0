import express from "express";
import { supabase } from "../config/db.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { title, amount, category, user_id } = req.body;

        if (!title || !user_id || !category || amount === undefined) {
        return res.status(400).json({ message: "All fields are required" });
        }

        const { data, error } = await supabase
        .from("transactions")  
        .insert([{ title, amount, category, user_id }])
        .select(); // to return inserted data

        if (error) {
            console.error("Supabase insert error:", error);
            return res.status(500).json({ error: "Failed to insert transaction" });
        }

        res.status(201).json(data[0]); // CORRECT


    } catch (error) {
        console.log("Error creating the transactions", error)
        res.status(500).json({ error: "Server error" });
    }
});

router.get("/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", user_id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching transactions:", error);
      return res.status(500).json({ error: "Failed to fetch transactions" });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

/*
    // Combine results
    const summary = {
      balance: parseFloat(balanceResult.data[0].balance),
      income: parseFloat(incomeResult.data[0].income),
      expense: parseFloat(expenseResult.data[0].expense)
    };


    function added to the database diretly
    
    create or replace function get_transaction_summary(userid varchar)
    returns table (
    balance numeric,
    income numeric,
    expense numeric
    )
    language sql
    as $$
    select
        coalesce(sum(amount), 0) as balance,
        coalesce(sum(case when amount > 0 then amount else 0 end), 0) as income,
        coalesce(sum(case when amount < 0 then amount else 0 end), 0) as expense
    from transactions
    where user_id = userid;  
    $$;


*/

router.get("/summary/:user_id", async (req, res) => {
  const { user_id } = req.params;

  try {
    const { data, error } = await supabase
      .rpc("get_transaction_summary", { userid: user_id });

    if (error) {
      console.error("Supabase RPC error:", error);
      return res.status(500).json({ error: "Failed to fetch summary" });
    }

    res.status(200).json(data[0]); // because data is returned as an array with one row

  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from("transactions")
      .delete()
      .eq("id", id)
      .select(); // returns deleted row(s)

    if (error) {
      console.error("Error deleting transaction:", error);
      return res.status(500).json({ error: "Failed to delete transaction" });
    }

    if (data.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Transaction deleted", transaction: data[0] });

  } catch (error) {
    console.error("Unexpected server error:", error);
    res.status(500).json({ error: "Server error" });
  }
});


export default router;