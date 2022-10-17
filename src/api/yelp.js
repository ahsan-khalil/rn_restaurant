import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer unZve5sN_MBvHbiMIkh6I1FCLkewI6l9zJXinQs5sHt3f57ZmgHy2R1rjbguvU33wPAXgliep670nMCza4qskZpVckE2UHNDWeNu7a8bL1T-dmhZMh0lsdiTq4ZNY3Yx'
    }
});