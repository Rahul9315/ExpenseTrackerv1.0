//react custom hook file to comunicate with backend to get the data in a neet way
import { useCallback } from "react";
import { useState } from "react";
import { Alert } from "react-native";

//const API_URL = "https://expense-tracker-backend-for-render.onrender.com/api" ;

// use EXPO_PUBLIC_{whatever} by this we ont have to install dotenv env


const API_URL = process.env.EXPO_PUBLIC_API_URL_RENDER;

export const useTransactions = (userId) => {
    const [transactions , setTransactions] = useState([]);
    const [summary, setSummary] = useState({
        balance: 0,
        income: 0,
        expenses: 0,
    });

    const [isLoading , setIsLoading] = useState(true);

    const fetchTransactions = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`);
            const data = await response.json();
            setTransactions(data);


        } catch (error) {
            console.error("Error fetching transactions: ", error);
        }
        
    }, [userId] )



    const fetchSummary = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/summary/${userId}`);
            const data = await response.json();
            setSummary(data);


        } catch (error) {
            console.error("Error fetching Summary: ", error);
        }
        
    }, [userId] )
    
  
    




    const loadData =useCallback(async () => {
        if (!userId) return;


        setIsLoading(true);
        try {

            await Promise.all([ fetchTransactions() , fetchSummary() ]); // this wiill make them run in parallel     
            
            
            // Don't call these functions like this as it has to await for irst funtion before calling another
            //await fetchSummary();
            //await fetchTransactions();
        } catch (error) {
            console.error("error loading Data: ", error);
        } finally {
            setIsLoading(false);
        }
    }, [ fetchTransactions , fetchSummary , userId ]);

    const deleteTransaction = async (id) =>  {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`, {method: "DELETE"});
            if (!response.ok) throw new Error("Failed to Delete the Transaction");

            //Refersh the data after deletion
            loadData();
            Alert.alert("Success", "Transaction deleted Sucessfully");
                   
        } catch (error) {
            console.error("Error deleting transaction: ", error);
            Alert.alert("Error", error.message);
        }
            
    };

    return { transactions , summary, isLoading , loadData , deleteTransaction };

};

