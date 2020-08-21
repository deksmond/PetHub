import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const height = width * 1.0;
const images = [
    'https://i.pinimg.com/474x/27/1c/ae/271cae2a1fde04deca605e400d80e345.jpg',
    'https://i.pinimg.com/474x/d9/9f/12/d99f12d3955d6c2f41cfe299041e3b56.jpg',
    'https://i.pinimg.com/474x/76/45/d5/7645d5cbd695679733b45a5c957503fe.jpg',
    'https://i.pinimg.com/474x/e6/74/a1/e674a13d91a5f59524bf56cbbc84e9c2.jpg',
    'https://i.pinimg.com/474x/ae/97/f8/ae97f8134c6d4498717d98c36c77c2e1.jpg'
]

export default class petScreen extends React.Component {

    state = {
        active: 0
    }

    static navigationOptions = {
        headerShown: false
    };

    change = ({ nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if (slide !== this.state.active) {
            this.setState({ active: slide });
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <ScrollView
                        horizontal
                        onScroll={this.change}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        style={styles.scroller}
                    >
                        {
                            images.map((image, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: image }}
                                    style={styles.image}
                                />
                            ))
                        }
                        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='ios-arrow-back' size={30} />
                        </TouchableOpacity>
                    </ScrollView>

                    <View style={styles.paging}>
                        {
                            images.map((i, k) => (
                                <Text key={k} style={k == this.state.active ? styles.pagingActiveText : styles.pagingText}>⬤</Text>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Hannah</Text>
                        <Image source={require('./imgs/female.png')} />
                    </View>
                    <Text style={{ fontSize: 14, paddingTop: 5, color: '#696969' }}>Bengal Cat</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 13, paddingTop: 5, color: '#696969' }}>2 years old</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#8282ee', paddingTop: 5 }}>N50,000</Text>
                    </View>

                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 30 }}>Description</Text>
                    <Text style={{ fontSize: 16, color: '#696969', marginTop: 20 }}>The European Burmese has a sweet, loving disposition and is extremely loyal to her family. An intelligent cat, this breed is an ideal pet that gets along well with cats and cat friendly dogs.</Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 60, marginHorizontal: 30 }}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Cart')}>
                        <Icon name='ios-basket' size={28} style={{ alignSelf: 'center'  }} />
                        <Text style={{ textAlign: 'center' }}>Add to cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold", textAlign: 'center' }}>Purchase now:N50,000</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width,
        height
    },
    scroller: {
        width,
        height
    },
    image: {
        width,
        height,
        resizeMode: 'cover'
    },
    paging: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center'
    },
    pagingText: {
        color: '#888',
        margin: 3
    },
    pagingActiveText: {
        color: '#fff',
        margin: 3
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 45,
        height: 45,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    textContainer: {
        marginTop: 25,
        marginHorizontal: 30
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 15,
        height: 70,
        width: 100,
        justifyContent: 'center',
        marginRight: 20
    },
    buyButton: {
        backgroundColor: '#8282ee',
        borderRadius: 15,
        height: 70,
        width: 250,
        justifyContent: 'center'
    }
})