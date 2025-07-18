import { View, Text } from 'react-native';
import SignupForm from '../components/SignupForm';
import { Link } from 'expo-router';
import { ImageBackground } from 'react-native';
import { COLORS } from '../constants/colors';
import { styles } from "../assets/styles/auth.styles" ;


export default function SignupScreen() {
  return (
    <View style={styles.container}>

       {/*<View style={{flex: 1 , alignItems: "center", justifyContent: "center "}}>*/}
      
     
        {/* All your screen content */}
        <SignupForm/>
      
      
    </View>

  );
}
