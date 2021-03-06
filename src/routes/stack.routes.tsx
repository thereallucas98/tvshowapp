import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeopleDetail from '../screens/PeopleDetail';
import TabRoutes from './tab.routes';
import ShowDetail from '../screens/ShowDetail';
import EpisodeDetail from '../screens/EpisodeDetail';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Dashboard" component={TabRoutes} />
        <Screen name="Person" component={PeopleDetail} />
        <Screen name="Show" component={ShowDetail} />
        <Screen name="Episode" component={EpisodeDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;