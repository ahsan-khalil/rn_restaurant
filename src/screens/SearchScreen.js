import { Text, View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    return (
      <View style={styles.background}>
        <SearchBar searchTerm = {searchTerm} 
                    onSearchTermChange = { (newSearchTerm) => { setSearchTerm(newSearchTerm); }} 
                    onSearchTermSubmit = { () => { console.log(`search ${searchTerm}`) } }
        />
        <Text style={styles.textStyles}>SearchScreen {searchTerm}</Text>
      </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    },
    background: {
        backgroundColor: "#FFFFFF",
    }
});

export default SearchScreen;