import { View, Text } from 'react-native'
import React from 'react'

const about = () => {
  return (
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome!</Text>
       
      <Link href={"/about"}>Go to About</Link>
    </View>
  )
}

//  <Text style={{ marginBottom: 10 }}>User ID: {session.user.id}</Text>

export default about