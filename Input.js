import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
        };
    }
    handleEmail = text => {
        this.setState({email: text});
    };
    handlePassword = text => {
        this.setState({password: text});
    };

    setStringValue = async (sEmail, sPass) => {
        try {
            await AsyncStorage.setItem('sEmail', sEmail);
            await AsyncStorage.setItem('sPass', sPass);
        } catch (e) {
            // save error
        }

        console.log('Done set');
    };
    getMyStringValue = async () => {
        try {
            var a = await AsyncStorage.getItem('@key');
        } catch (e) {
            // read error
        }

        console.log('Done get');
    };

    checkLogin = (email, pass) => {
        const response = axios({
            url: 'http://192.168.90.49:8383/Contain/test/json/login.php',
            method: 'POST',
            data: {
                email: this.state.email, // can use param email
                pass: this.state.password, // can use param pass
            },
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (response.data.token.success === true) {
                    this.setStringValue(email, pass);
                    /* sử dụng ES6 response => tránh dùng function(response) sẽ lỗi ko setState được => vkl thật */
                    this.setState({error: 'OK'});
                } else {
                    this.setState({
                        error: 'ERROR',
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleEmail = text => {
        this.setState({email: text});
    };
    handlePassword = text => {
        this.setState({password: text});
    };

    login = async (email, pass) => {
        this.checkLogin(email, pass);
    };

    async componentDidMount() {
        var sEmail = await AsyncStorage.getItem('sEmail');
        var sPass = await AsyncStorage.getItem('sPass');
        if (sEmail != null && sPass != null) {
            this.checkLogin(sEmail, sPass);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail}
                />

                <TextInput
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    placeholderTextColor="#9a73ef"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword}
                />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={() =>
                        this.login(this.state.email, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                <View
                    style={{
                        height: 40,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        backgroundColor: 'red',
                    }}>
                    <Text>{this.state.error}</Text>
                </View>
            </View>
        );
    }
}
export default Inputs;

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});
