import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Auth} from './src/components/Auth/Auth.js';
import {Input} from '../../../Input';
const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

function ProfileScreen() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
        </View>
    );
}

class Main extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default Main;
