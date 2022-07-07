import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
// reducers staff
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import mainReducer from './reducers/mainReducer';
//navigation staff
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//screeens
import Search from './screens/Search/index';
import Preview from './screens/Preview/index';
//styles
import globalStyles from './globalStyles';

const store = configureStore({
  reducer: {mainReducer},
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={globalStyles.full}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Search"
              component={Search}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Preview" component={Preview} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
//my-upload-key - metro30033003
