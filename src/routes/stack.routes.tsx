import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PeopleDetail from '../screens/PeopleDetail';
import TabRoutes from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Dashboard" component={TabRoutes} />
        <Screen name="Person" component={PeopleDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

export default StackRoutes;