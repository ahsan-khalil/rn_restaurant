import { TextInput, View, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onSearchTermChange, onSearchTermSubmit }) => {
    return (
      <View style={styles.background}>
        <Feather name='search' style={styles.featherStyle} size={30} />
        <TextInput style={styles.textStyles} 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    placeholder="Search" 
                    value={ searchTerm } 
                    onChangeText={(newValue) => { onSearchTermChange(newValue) }}
                    onEndEditing = { onSearchTermSubmit } 
        />
      </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 18,
        alignSelf: 'center'
    },
    background: {
        backgroundColor: "#F0EEEE",
        height: 55,
        borderRadius: 6,
        marginHorizontal: 15,
        marginVertical: 15,
        padding: 5,
        flexDirection: 'row'
    },
    featherStyle: {
       alignSelf: 'center',
       marginHorizontal: 10
    }
});

export default SearchBar;