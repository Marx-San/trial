import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Alert,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Button, Icon } from 'react-native-elements'







export default function App() {
   
    let [data,setData]=useState({});
    var myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-xjk0natkwrwiezs-io");
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
    fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    .then(response => response.json())
    .then(result => {setData(result);})
    .catch(error => console.log('error', error));
  }, []);

 



  function HomeScreen() {
    return (
        <Card>
        <Card.Title>GOLD</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('./assets/icon.png')} /> 
        <Card.Divider/>
          <Text style={{marginBottom: 10}}>
           Current Price
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        
      </Card>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();



  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
  });
