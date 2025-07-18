import { supabase } from '../lib/supabase'; // adjust path
import { Button, TouchableOpacity ,Alert} from 'react-native';
import {styles} from  "../assets/styles/home.styles" ;
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    } else {
      router.replace('/login'); // redirect to login
    }
  };

  const confirmSignout = async () => {
    Alert.alert("Logout", "Are you sure you want to Logout??", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout" , style: "destructive" , onPress: handleSignOut } ,
    ]);
  };

  return (
    //<Button title="Sign Out" onPress={handleSignOut} />
    <TouchableOpacity style= {styles.logoutButton} onPress={confirmSignout} >
      <Ionicons name='log-out-outline' size={25} color={COLORS.text}/>
    </TouchableOpacity>
  );
}
