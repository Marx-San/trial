import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView, Alert,Image,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Button, Icon } from 'react-native-elements'







export default function App() {
   
    let [data,setData]=useState({});
    let [silverdata,setsilverdata]=useState({});

    var myHeaders = new Headers();
  myHeaders.append("x-access-token", "goldapi-4a9pg2tkwt5bxjz-io");
  myHeaders.append("Content-Type", "application/json");
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  useEffect(() => {
   
    fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    .then(response => response.json())
    .then(result => {setData(result);});
  }, []);
  useEffect(() => {
    fetch("https://www.goldapi.io/api/XAG/INR", requestOptions)
    .then(response => response.json())
    .then(result => {setsilverdata(result);});
  
}, []);

  useEffect(() => {
    setInterval(()=>{
    fetch("https://www.goldapi.io/api/XAU/INR", requestOptions)
    .then(response => response.json())
    .then(result => {setData(result);});},20000)
  }, []);

  useEffect(() => {
      setInterval(()=>{fetch("https://www.goldapi.io/api/XAG/INR", requestOptions)
      .then(response => response.json())
      .then(result => {setsilverdata(result);});},20000)
    
  }, []);
 



  function HomeScreen() {
    return (
        <ScrollView>

        <Card>
        <Card.Title>GOLD</Card.Title>
        <Card.Divider/>
        <Image source={require('./assets/photo.jpg')} style={styles.Img} /> 
        <Card.Divider/>
        
          <Text style={{marginBottom: 10}}>
           Current Price= {data.price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Open Price= {data.open_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Close Price= {data.prev_close_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Low Price= {data.low_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           High Price= {data.high_price}
          </Text>
          <Card.Divider/>
          <Button
        title="Buy Now"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        
      </Card>
      <Card>
        <Card.Title>SILVER</Card.Title>
        <Card.Divider/>
        <Image source={require('./assets/silver.jpg')} style={styles.Img}/> 
        <Card.Divider/>
          <Text style={{marginBottom: 10}}>
           Current Price= {silverdata.price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Open Price= {silverdata.open_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Close Price= {silverdata.prev_close_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           Low Price= {silverdata.low_price}
          </Text>
          <Text style={{marginBottom: 10}}>
           High Price= {silverdata.high_price}
          </Text>
          <Card.Divider/>
          <Button
        title="Buy Now"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
        
      </Card>
        </ScrollView>
       
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
    Img:{
        height:150,
        width:300
    }
  });
