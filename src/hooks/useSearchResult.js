import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

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

    useEffect(() => { searchAPI('pasta') }, [])
    return [searchResults, errorMessage, searchAPI]
};