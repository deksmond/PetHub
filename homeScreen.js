import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Body, Card, CardItem, Left } from 'native-base';

const { width } = Dimensions.get('window');

export default class homeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.container}>

                        <View style={styles.find}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Find Pets Now!</Text>
                            <TouchableOpacity><Icon name='ios-search' size={27} /></TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                            <View style={{ width: width - 40, height: 200 }}>
                                <ImageBackground
                                    source={require('./imgs/dog2.jpg')}
                                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover' }}
                                >
                                    <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, .5)', paddingTop: 60 }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingBottom: 7, paddingHorizontal: 25 }}>Welcome to Pet hub</Text>
                                        <Text style={{ fontSize: 17, color: 'white', paddingHorizontal: 25 }}>get connected to your</Text>
                                        <Text style={{ fontSize: 17, color: 'white', paddingHorizontal: 25 }}>best buddy</Text>
                                        <TouchableOpacity style={styles.button}>
                                            <Text style={{ color: 'black', fontSize: 14, fontWeight: "bold", textAlign: 'center' }}>Shop now</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>

                        <ScrollView
                            scrollEventThrottle={16}
                        >
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ width: 90, height: 90, marginHorizontal: 20, marginTop: 35, backgroundColor: '#fff', borderRadius: 15, borderColor: '#ddd', borderWidth: 1 }}>
                                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
                                        <Icon name="ios-person" size={24} />
                                        <Text>Cats</Text>
                                    </View>
                                </View>
                                <View style={{ width: 90, height: 90, marginTop: 35, backgroundColor: '#fff', borderRadius: 15, borderColor: '#ddd', borderWidth: 1 }}>
                                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
                                        <Icon name="ios-person" size={24} />
                                        <Text>Dogs</Text>
                                    </View>
                                </View>
                                <View style={{ width: 90, height: 90, marginHorizontal: 15, marginTop: 35, backgroundColor: '#fff', borderRadius: 15, borderColor: '#ddd', borderWidth: 1 }}>
                                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
                                        <Icon name="ios-person" size={24} />
                                        <Text>Rabbits</Text>
                                    </View>
                                </View>
                                <View style={{ width: 90, height: 90, marginTop: 35, backgroundColor: '#fff', borderRadius: 15, borderColor: '#ddd', borderWidth: 1 }}>
                                    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20 }}>
                                        <Icon name="ios-person" size={24} />
                                        <Text>Birds</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </ScrollView>

                        <View style={styles.feature}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Featured Pet listings</Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ddd' }}>View all</Text>
                            </TouchableOpacity>
                        </View>

                        <Card style={{ height: 130, borderRadius: 10, marginTop: 20 }}>
                            <CardItem>
                                <Left>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                                        <View style={{ width: 130, height: 130 }}>
                                            <Image source={require('./imgs/cat6.jpg')}
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }}
                                            />
                                        </View>
                                        <Body>
                                            <View style={{ paddingHorizontal: 15 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Lola</Text>
                                                    <Icon name='ios-search' size={24} />
                                                </View>
                                                <Text style={{ fontSize: 14, paddingTop: 5, color: '#696969' }}>Bengal cat</Text>
                                                <Text style={{ fontSize: 13, paddingTop: 5, color: '#696969' }}>2 years old</Text>
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8282ee', paddingTop: 5 }}>N50,000</Text>
                                            </View>
                                        </Body>
                                    </View>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card style={{ height: 130, borderRadius: 10, marginTop: 40 }}>
                            <CardItem>
                                <Left>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                                        <View style={{ width: 130, height: 130 }}>
                                            <Image source={require('./imgs/dog.jpg')}
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }}
                                            />
                                        </View>
                                        <Body>
                                            <View style={{ paddingHorizontal: 15 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Chukwudi</Text>
                                                    <Icon name='ios-search' size={24} />
                                                </View>
                                                <Text style={{ fontSize: 14, paddingTop: 5, color: '#696969' }}>German Shepherd Dog</Text>
                                                <Text style={{ fontSize: 13, paddingTop: 5, color: '#696969' }}>3 years old</Text>
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8282ee', paddingTop: 5 }}>N80,000</Text>
                                            </View>
                                        </Body>
                                    </View>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card style={{ height: 130, borderRadius: 10, marginTop: 40 }}>
                            <CardItem>
                                <Left>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                                        <View style={{ width: 130, height: 130 }}>
                                            <Image source={require('./imgs/cat4.jpg')}
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }}
                                            />
                                        </View>
                                        <Body>
                                            <View style={{ paddingHorizontal: 15 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hannah</Text>
                                                    <Icon name='ios-search' size={24} />
                                                </View>
                                                <Text style={{ fontSize: 14, paddingTop: 5, color: '#696969' }}>Bengal cat</Text>
                                                <Text style={{ fontSize: 13, paddingTop: 5, color: '#696969' }}>2 years old</Text>
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8282ee', paddingTop: 5 }}>N50,000</Text>
                                            </View>
                                        </Body>
                                    </View>
                                </Left>
                            </CardItem>
                        </Card>

                        <Card style={{ height: 130, borderRadius: 10, marginTop: 40 }}>
                            <CardItem>
                                <Left>
                                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 10 }}>
                                        <View style={{ width: 130, height: 130 }}>
                                            <Image source={require('./imgs/cat2.jpg')}
                                                style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5 }}
                                            />
                                        </View>
                                        <Body>
                                            <View style={{ paddingHorizontal: 15 }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Shukura</Text>
                                                    <Icon name='ios-search' size={24} />
                                                </View>
                                                <Text style={{ fontSize: 14, paddingTop: 5, color: '#696969' }}>American wirehair Cat</Text>
                                                <Text style={{ fontSize: 13, paddingTop: 5, color: '#696969' }}>3 years old</Text>
                                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8282ee', paddingTop: 5 }}>N80,000</Text>
                                            </View>
                                        </Body>
                                    </View>
                                </Left>
                            </CardItem>
                        </Card>
                    </View>

                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    find: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    image: {
        borderRadius: 7,
        width: width - 40,
        height: 200,
        marginTop: 50
    },
    button: {
        backgroundColor: '#ffc862',
        borderRadius: 15,
        height: 40,
        width: 110,
        justifyContent: 'center',
        marginHorizontal: 235
    },
    feature: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    }
});