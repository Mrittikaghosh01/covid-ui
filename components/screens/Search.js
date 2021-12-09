import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';

const Search = () => {
    return (
        <View style={styles.container} >
            <TextInput
                placeholder={"Ask a Doctor !"}
                style={styles.search}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
        paddingTop: 50,
        paddingBottom: 30,
    },
    search: {
        width: '90%',
        borderRadius: 30,
        borderColor: '#62d0f660',
        borderWidth: 5,
        textAlign: 'center',
        fontSize: 20,
        color: '#ddd',
        paddingVertical: 12
    }
});


export default Search;