import { View, Text } from 'react-native';
import SignupForm from '../components/SignupForm';
import { Link } from 'expo-router';
import { ImageBackground } from 'react-native';
import { COLORS } from '../constants/colors';
import { styles } from "../assets/styles/auth.styles" ;


export default function SignupScreen() {
  return (

    <View style={{flex: 1 , alignItems: "center", justifyContent: "center "}}>

      <ImageBackground
        source={require('../assets/images/SignInLogo_2.png')}
        style={styles.background}
        resizeMode="cover"
      >
        {/* All your screen content */}
        <SignupForm/>
      </ImageBackground>
      
    </View>
/*
    <KeyboardAwareScrollView
      style={{flex: 1}}
      contentContainerStyle = {{flexGrow: 1 }}
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={100}

    >

      <SignupForm />
    </KeyboardAwareScrollView>
    
    */
  );
}
