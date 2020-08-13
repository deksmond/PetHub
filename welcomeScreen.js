import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class welcomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.image}>
          <Image source={require("./imgs/cat.jpg")} style={{ height: 250, width: 170 }} />
        </View>

        <View>
          <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 23, paddingTop: 25 }}>Find your best friend</Text>
          <Text style={{ textAlign: "center", paddingTop: 8, fontSize: 17 }}>{'Shop online for pets, and get them \n delivered to your home in minutes'}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("Home")}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginHorizontal: 20, color: "white", fontSize: 17, fontWeight: "bold" }}>Continue</Text>
            <Icon name="md-paw" size={24} color="white" style={{ marginHorizontal: 160 }} />
          </View>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250
  },
  button: {
    backgroundColor: '#8282ee',
    marginHorizontal: 30,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    marginTop: 70
  }
});