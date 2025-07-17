import express from "express";
import dotenv from "dotenv";
import { supabase } from "./config/db.js";
import transactionRoute from "./routes/transactionsRoute.js";

dotenv.config();

const PORT = process.env.PORT
const app = express(); 

app.use(express.json());// middle ware

app.use("/api/transactions", transactionRoute);

app.get("/", (req, res) =>{
    res.send("its working");
});

app.listen(PORT, () => {
    console.log("Server up and running on PORT: ", PORT);
});
