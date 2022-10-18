import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { withNavigation } from 'react-navigation'
import ResultDetail from './ResultDetail';

const ResultList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
    }
    return (
      <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
            horizontal
            data={results}
            keyExtractor= { (result) => {
                    return result.id
                }
            }
            renderItem = { ({item}) => {
                    return (
                        <TouchableOpacity onPress={ () => {navigation.navigate('ResultsShowScreen', { id: item.id})}  }>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }
            }
            showsVerticalScrollIndicator = {false}
            showsHorizontalScrollIndicator = {false}
        />
      </View>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
})

export default withNavigation(ResultList);