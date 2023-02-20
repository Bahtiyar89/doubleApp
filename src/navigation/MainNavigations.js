import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen/MainScreen';

const Stack = createStackNavigator();

const MainNavigations = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigations;
