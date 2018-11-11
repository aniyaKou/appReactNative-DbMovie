// @flow
import { createStackNavigator } from 'react-navigation';
import Search from '../Search';
import FilmDetail from '../FilmDetail';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: 'Recherche',
    }),
  },
  FilmDetail: { 
  screen: FilmDetail
}
});

export default RootNavigator;
