import { createStackNavigator } from '@react-navigation/stack';
import { screens } from './routes';
import { createStaticNavigation } from '@react-navigation/native';

export const BottomNavigation =  createStaticNavigation(createStackNavigator({ screens }));
    


