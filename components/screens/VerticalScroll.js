import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';

const VerticalScroll = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true} style={styles.container} >
            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.box} >
                    <Image resizeMode={'cover'} style={styles.boxImage} source={require('../../assets/image2.png')} />
                    <Text style={styles.boxText} >Pills</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {

        flexDirection: 'row',
        padding: 20,
        height: 150,
    },
    boxImage: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 5,
        top: 5
    },
    boxText: {
        fontSize: 25,
        color: '#fff',
        marginTop: 30
    },
    box: {
        backgroundColor: "#2596be",
        elevation: 8,
        marginRight: 20,
        width: 180,
        height: 100,
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 25
    }
});


export default VerticalScroll;