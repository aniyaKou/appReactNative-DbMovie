// @flow
import { createStackNavigator } from 'react-navigation';
import { Screen1, Screen2 } from './../screens/Screens.sample';
import Search from '../Search';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: 'Recherche',
    }),
  },
  /* Add more screen here */
});

export default RootNavigator;
