import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Alert, TouchableOpacity, View } from 'react-native';
import { Text, TextInput} from "react-native";
import { Image } from 'react-native';
//import { Input, Button } from '@rneui/themed';
import { Link, router } from 'expo-router';
import { styles } from "../assets/styles/auth.styles" ;
import { Ionicons } from "@expo/vector-icons" ;

import { COLORS } from '../constants/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error ,setError ] = useState('');

  async function handleLogin() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
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

        <Image source={require('../assets/images/0204.png')} style={styles.illustration}  />

        <Text style={styles.title}>Sign In</Text>

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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText} >LogIn</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text style={styles.linkText} >Sign up </Text>
        </TouchableOpacity>

        </View>

      
      </View>


    </KeyboardAwareScrollView>

    


    /*
    <View style={styles.container}>
      <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <Input label="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} disabled={loading} />
      <Link href="/signup">Don't have an account? Sign up</Link>
    </View>
    
    
    const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
});

*/
  );
}


