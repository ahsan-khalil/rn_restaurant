import { Text, View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import useSearchResult from '../hooks/useSearchResult';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, errorMessage, searchAPI] = useSearchResult();

    const filterResultsByPriceSymbol = (priceSymbol) => {
        return searchResults.filter( result => {
            return result.price === priceSymbol
        });
    };

    return (
      <View style={styles.background}>
        <SearchBar searchTerm = {searchTerm} 
                    onSearchTermChange = { (newSearchTerm) => { setSearchTerm(newSearchTerm); }} 
                    onSearchTermSubmit = { () => { console.log(`search ${searchTerm}`); searchAPI(searchTerm) } }
        />
        <Text style={styles.textStyles}>We have found {searchResults.length} results</Text>
        { errorMessage != "" ? <Text style={styles.errorTextStyle}>Error {errorMessage}</Text> : null }
        <ScrollView 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <ResultList results={filterResultsByPriceSymbol('$')} title="Cost Effective" />
            <ResultList results={filterResultsByPriceSymbol('$$')} title="Bit Pricier" />
            <ResultList results={filterResultsByPriceSymbol('$$$')} title="Big Spender" />
        </ScrollView>
      </View>
    )
};

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 10
    },
    errorTextStyle: {
        fontSize: 18,
        color: 'red'
    },
    background: {
        backgroundColor: "#FFFFFF",
        flex: 1,
    }
});

export default SearchScreen;