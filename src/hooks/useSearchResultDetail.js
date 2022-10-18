import { useState } from 'react'
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const searchResultDetaiAPI = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
            setErrorMessage('')
        } catch (error) {
            setErrorMessage('Something went wrong')
            setResult(null)
        }
    };

    return [result, errorMessage, searchResultDetaiAPI];
}