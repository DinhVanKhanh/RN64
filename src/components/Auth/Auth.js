import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

class Auth extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={<View>View</View>}
                        options={{title: 'Welcome'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Auth;
