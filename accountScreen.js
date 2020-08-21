import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class accountScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.avatar}>
                        <Icon name='ios-walk' size={58} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 22, marginTop: 100, marginHorizontal: -10 }}>User</Text>
                </View>
                <Text style={{ fontSize: 17, marginHorizontal: 130, marginTop: -35 }}>User@example.com</Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('welcome')}>
                    <Text style={{ fontSize: 18, marginTop: 500, textAlign: 'center', color: '#8282ee' }}>Sign out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        marginTop: 80,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});