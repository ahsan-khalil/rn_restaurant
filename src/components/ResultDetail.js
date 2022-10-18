import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'

const ResultDetail = ({result}) => {
    return(
    <View style={styles.viewStyle}>
        <Image style = {styles.image} source={{ uri: result.image_url }} />
        <Text style = {styles.name}>{result.name}</Text>
        <Text>
            {result.rating} Stars, {result.review_count} Reviews
        </Text>
    </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 120,
        width: 250,
        elevation: 3,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    viewStyle: {
        marginLeft: 15,
        marginBottom: 10
    }
})

export default ResultDetail;