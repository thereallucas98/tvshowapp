import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import theme from '../global/styles/theme';

import { Dashboard } from '../screens/Dashboard';
import { People } from '../screens/People';
import Favorite from '../screens/Favorite';

const { Navigator, Screen } = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.shape,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveBackgroundColor: theme.colors.background_light
      }}
    >
      <Screen
        name="TV Series"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="live-tv"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="People"
        component={People}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="face"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="favorite-border"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}

export default TabRoutes;