import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Header = () => {
    return (
        <LinearGradient
            style={styles.banner}
            colors={['#277abb', '#62d0f6']}
            start={{ x: 0.0, y: 1 }}
            end={{ x: 1, y: 1.0 }}
        >
            <Image style={styles.image} source={require('../../assets/image1.png')} />
            <View>
                <Text style={styles.bannerText1}>COVID YODHYA</Text>
                <Text style={styles.bannerText2}>Get all your Reasources here !</Text>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    image: {
        width: 180,
        height: 180,
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: "#2596be",
        width: '100%',
        height: 280,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        paddingVertical: 50,
        paddingTop: 100,
        borderBottomRightRadius: 90,
        borderBottomLeftRadius: 90,
        elevation: 8,
    },
    bannerText1: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 12,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 15,

    },
    bannerText2: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 15,
    }
});

export default Header;