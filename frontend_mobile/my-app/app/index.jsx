import SignOutButton from '../components/SignOutButton'
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { supabase } from "../lib/supabase"; // ✅ adjust path if needed
//import Auth from "../components/Auth";       // ✅ your auth form
import { Link } from "expo-router";
import { Image } from 'react-native';
import { Redirect , useRouter} from "expo-router";
import {styles} from  "../assets/styles/home.styles" ;

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

  

  return (

    
    <View style={styles.container}>
      <View style={styles.content}>
      
      {/* HEADER */}
      <View style={styles.header}>
        {/* LEFT Header */}
        <View style={styles.headerLeft}>
          <Image
            source={require("../assets/images/logo_ocean_Blue.png")}
            style={styles.headerLogo}
            resizeMode= "contain"
          />
          <View style={styles.welcomeContainer}>
            <Text style={styles.WelcomeText}>Welcome,</Text>
            <Text>
              {session.user?.email?.split("@")[0]}
            </Text>

          </View>
        </View>

      </View>

      

      </View>
      

    </View>







    
    /*
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
  
      <Text>Welcome!</Text>
      <Text style={{ marginBottom: 10 }}>User ID: {session.user.id}</Text>
      <Text>Income: {summary.income}</Text>
      <Text>Balaance: {summary.balance}</Text>
      <Text>Expenses: {summary.expenses}</Text>
      <Text></Text>
      <Link href="/about" asChild>
        <Text style={{ color: "blue" }}>Go to About</Text>
      </Link>
      <SignOutButton />

    </View>
    */
  );
}














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