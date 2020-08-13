import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Dimensions,
    Flatlist,
    ImageBackground,
    TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

data = [
    {
        id: "1",
        name: "Lola",
        breed: "Bengal Cat",
        age: "2 years old",
        price: "N50, 000",
        image: require('./imgs/cat6.jpg')
    },
    {
        id: "2",
        name: "Chukwudi",
        breed: "German Shepherd Dog",
        age: "3 years old",
        price: "N80, 000",
        image: require('./imgs/gs.jpg')
    },
    {
        id: "3",
        name: "Hannah",
        breed: "Bengal Cat",
        age: "2 years old",
        price: "N50, 000",
        image: require('./imgs/cat4.jpg')
    },
    {
        id: "4",
        name: "Shukura",
        breed: "American wirehair Cat",
        age: "3 years old",
        price: "N80, 000",
        image: require('./imgs/cat2.jpg')
    }
];

const { width } = Dimensions.get('window');

export default class homeScreen extends Component {

    renderPost = post => {
        return (
            <TouchableOpacity>
                <View style={styles.feedItem}>
                    <Image source={post.image} style={styles.image} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }} >{post.name}</Text>
                            <Icon name='ios-person' size={24} />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: 10 }}>{post.breed}</Text>
                            <Text style={{ fontSize: 10 }}>{post.age}</Text>
                            <Text style={{ fontSize: 10, color: '#8282ee' }}>{post.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.container}>

                        <View style={styles.find}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Find Pets Now!</Text>
                            <TouchableOpacity><Icon name='ios-search' size={27} /></TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 50, marginHorizontal: 20 }}>
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
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ddd' }}>View all</Text>
                        </View>
                        <Flatlist
                            style={styles.feed}
                            data={data}
                            renderItem={({ item }) => this.renderPost(item)}
                            keyExtractor={item => item.id}
                        />
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
        marginTop: 60,
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
    },
    feedItem: {
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        marginVertical: 8,
        paddingBottom: 8
    },
    image: {
        width: 90,
        height: 90,
        marginRight: 5
    },
    feed: {
        marginHorizontal: 20,
        marginTop: 10
    }
});