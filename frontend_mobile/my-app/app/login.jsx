import { View, Text } from 'react-native';
import LoginForm from '../components/LoginForm';
import { ImageBackground } from 'react-native';
import { COLORS } from '../constants/colors';
import { styles } from "../assets/styles/auth.styles" ;


export default function LoginScreen() {
  return (
    <View style={styles.container}>

      {/*
      <ImageBackground
        source={require('../assets/images/LogInLogo.png')}
        style={styles.background}
        resizeMode="cover"
      >
      
        <LoginForm />
        
      </ImageBackground>

      */}

        <LoginForm />
      
      
    </View>
  );
}
