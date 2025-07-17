/*
import { Background } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this 123
         screen.</Text>
        <Link href={"/about"}> About </Link>
    </View>
  );
}


*/

import SignOutButton from '../components/SignOutButton'
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { supabase } from "../lib/supabase"; // ✅ adjust path if needed
//import Auth from "../components/Auth";       // ✅ your auth form
import { Link } from "expo-router";
import { Redirect , useRouter} from "expo-router";

import { useTransactions, usetransactions } from "../hooks/useTransactions";


export default function Index() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  //const {user} = useUser();
  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(session?.user?.id);
 

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      setSession(data.session)
      setLoading(false)
    }

    getSession();

    // Listen to auth changes
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);


  // ✅ Load transactions and summary when session is available
  useEffect(() => {
    if (session?.user?.id) {
      loadData();
    }
  }, [loadData, session?.user?.id]);

  if (loading) return null // or a splash screen

  if (!session) {
    return <Redirect href="/login" />;
  }

  console.log("transactions: ", transactions);
  console.log("Sumary  ",summary);



  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome!</Text>
      <Text style={{ marginBottom: 10 }}>User ID: {session.user.id}</Text>
      <Link href="/about" asChild>
        <Text style={{ color: "blue" }}>Go to About</Text>
      </Link>
      <SignOutButton />

    </View>
  );
}
