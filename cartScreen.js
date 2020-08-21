import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    SafeAreaView, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity } from 'react-native';

posts = [
    {
        id: "1",
        price: "N50,00",
        title: "Hannah",
        avatar: require('./imgs/hannah.jpg')
    }
];

export default class cartScreen extends Component {

    renderPost = post => {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate('pets')}>
                <View style={styles.feedItem}>
                    <Image source={post.avatar} style={styles.avatar} />
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <Text style={styles.title}>{post.title}</Text> 
                            <Text style={styles.price}>{post.price}</Text>                   
                        </View>
                    </View>  
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                    <View style={styles.header}>
                        <Text style={{ fontSize: 18, fontWeight: '700', marginTop: 5 }}>
                            Cart
                        </Text>
                    </View>

                    <FlatList 
                        style={styles.feed} 
                        data={posts} 
                        renderItem={({item}) => this.renderPost(item)} 
                        keyExtractor={item => item.id} 
                    />

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    header: {
        height: 40, 
        alignItems: 'center',
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1
    },
    feed: {
        marginHorizontal: 15,
        marginTop: 15
    },
    feedItem: {
        backgroundColor: "#FFF",
        borderRadius: 20,
        padding: 8,
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 90, 
        height: 90,
        marginRight: 16
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10
    },
    title: {
        fontSize: 18,
        paddingTop: 10
    }
});