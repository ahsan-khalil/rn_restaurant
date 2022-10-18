import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator({
    SearchScreen: SearchScreen,
    ResultsShowScreen: ResultsShowScreen
},{
    initialRouteName: 'SearchScreen',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default createAppContainer(navigator);