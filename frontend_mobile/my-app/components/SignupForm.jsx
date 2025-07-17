import React, { useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
//import { StyleSheet  } from 'react-native';
import { Text, TextInput} from "react-native";
import { Image } from 'expo-image';
import { Input, Button } from '@rneui/themed';
import { supabase } from '../lib/supabase';
import { Link, router } from 'expo-router';
import { styles } from "../assets/styles/auth.styles" ;
import { Ionicons } from "@expo/vector-icons" ;
import { COLORS } from '../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error ,setError ] = useState('');

  async function handleSignup() {
    setLoading(true);
    const { data: { session }, error } = await supabase.auth.signUp({ email, password });
   // if (error) Alert.alert(error.message);

    if (!session) Alert.alert('Check your email for verification!');
    
    if (error) {
      Alert.alert(error.message);
    }else {
      router.replace("/");
    }
    setLoading(false);
  }

  return (
   
    

    <KeyboardAwareScrollView
      style={{flex: 1}}
      contentContainerStyle = {{flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={20}

    >

      <View style={styles.container}>

        <Image source={require('../assets/images/Empty.png')} style={styles.illustration}  />

        <Text style={styles.title}>Create Account</Text>

        { error ? (
          <View style={styles.errorBox}>
            <Ionicons name='alert-circle' size={20} color={COLORS.expense}/>
            <Text style={styles.errorText}> {error} </Text>
            <TouchableOpacity onPress={ () => setError("")}>
              <Ionicons name='close' size={20} color={COLORS.textLight} />
            </TouchableOpacity>
          </View>
        ) : null }

        <TextInput
            style={[styles.input, error && styles.errorInput]}
            autoCapitalize="none"
            value={email}
            placeholderTextColor="#9A8478"
            placeholder="Enter email"
            onChangeText={(setEmail) }//=> setEmailAddress(email)}
          />

        <TextInput
          style={[styles.input, error && styles.errorInput]}
          secureTextEntry
          value={password}
          placeholderTextColor="#9A8478"
          placeholder="Enter Password"
          onChangeText={(setPassword) }//=> setEmailAddress(email)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText} >Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.linkText} >LogIn </Text>
        </TouchableOpacity>

        </View>


      </View>


    </KeyboardAwareScrollView>
    
  );
}





/*
return (
    
    <View style={styles2.container}>
      <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignup} disabled={loading} />


      <Link href="/login">Already have an account? Login</Link>
    </View>
    
  );
}

const styles2 = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
});
*/



