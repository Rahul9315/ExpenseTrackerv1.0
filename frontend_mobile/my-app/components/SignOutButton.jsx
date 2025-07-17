import { supabase } from '../lib/supabase'; // adjust path
import { Button } from 'react-native';
import { useRouter } from 'expo-router';

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

  return (
    <Button title="Sign Out" onPress={handleSignOut} />
  );
}
