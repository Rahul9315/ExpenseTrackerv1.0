import SignOutButton from '../components/SignOutButton'
import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity, RefreshControl } from "react-native";
import { supabase } from "../lib/supabase"; // ✅ adjust path if needed
//import Auth from "../components/Auth";       // ✅ your auth form
import { Link } from "expo-router";
import { Image ,Alert } from 'react-native';
import { Redirect , useRouter} from "expo-router";
import {styles} from  "../assets/styles/home.styles" ;
import { Ionicons } from "@expo/vector-icons";
import { useTransactions, usetransactions } from "../hooks/useTransactions";
import { BalanceCard } from '../components/BalanceCard';
import { TransactionItem } from '../components/TransactionItem';
import  NoTransactionsFound  from '../components/NoTransactionsFound';


export default function Index() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(session?.user?.id);
  const [refreshing , setRefreshing] = useState(false);
 

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

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = (id) => {
    Alert.alert("Delete Transaction", "Are you sure you want to Delete??", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete" , style: "destructive" , onPress: () => deleteTransaction(id) } ,
    ]);
   };

  if (loading && !refreshing) return null // or a splash screen

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
              source={require("../assets/images/couple-3.jpg")}
              style={styles.headerLogo}
              resizeMode= "contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {session.user?.email?.split("@")[0]}
              </Text>

            </View>
          </View>

          
          {/* Right Header */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={ () => router.push("/create")}>
              <Ionicons name='add' size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style ={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>

      </View>
      
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({item}) => (
          <TransactionItem item ={item} onDelete={handleDelete} />
        )}

        ListEmptyComponent={<NoTransactionsFound/>}
        showsHorizontalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}  />}
      
      />

    </View>
   
  );
}














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