import { Text, View, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => { searchAPI('pasta') }, [])

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', { 
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
           });
           setSearchResults(response.data.businesses);     
           setErrorMessage('')           
        } catch (error) {
           setErrorMessage('Something went wrong')
           setSearchResults([])
        }
    };

    return (
      <View style={styles.background}>
        <SearchBar searchTerm = {searchTerm} 
                    onSearchTermChange = { (newSearchTerm) => { setSearchTerm(newSearchTerm); }} 
                    onSearchTermSubmit = { () => { console.log(`search ${searchTerm}`); searchAPI(searchTerm) } }
        />
        <Text style={styles.textStyles}>Search Result Length {searchResults.length}</Text>
        { errorMessage != "" ? <Text style={styles.errorTextStyle}>Error {errorMessage}</Text> : null }
      </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30
    },
    errorTextStyle: {
        fontSize: 18,
        color: 'red'
    },
    background: {
        backgroundColor: "#FFFFFF",
    }
});

export default SearchScreen;