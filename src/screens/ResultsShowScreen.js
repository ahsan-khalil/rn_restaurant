import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import React, {useEffect} from 'react'
import useSearchResultDetail from '../hooks/useSearchResultDetail';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, errorMessage, searchResultDetaiAPI] = useSearchResultDetail()

    useEffect(() => {
        searchResultDetaiAPI(id);
    }, []);

    if (result == null) {
        return (
            <View>
                {errorMessage != '' ? <Text>Error: {errorMessage}</Text> : null }
            </View>
        )
    }

    return (
      <View>
        <Text style={styles.text}>{result.name}</Text>
        <FlatList 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data = {result.photos}
            keyExtractor = { (photo) => {
                    return photo
                }
            }
            renderItem = { ({item}) => {
                console.log(`image: ${item}`)
                    return (
                        <View>
                            <Image style={styles.image} source={{uri: item}} />
                        </View>
                    )
                }
            }
        />
      </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: 150,
        marginBottom: 15,
        marginLeft: 15,
        borderRadius: 6,
        elevation: 10
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10
    }
});

export default ResultsShowScreen;