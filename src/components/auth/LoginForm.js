import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input } from '../common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '' 
    };

    onButtonPress() {
        //return (alert(this.state.email + ' ' + this.state.password));
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
                    });
            });
    }

    render() {
        return (
            <Card >
                <CardSection>                    
                    <Input 
                        label={'Email :'}
                        valute={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder={'Plase type mail'}
                    />
                </CardSection>

                <CardSection>                    
                    <Input 
                        label={'Password :'}
                        valute={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder={'Plase type password'}
                        secureTextEntry={true}
                    />
                </CardSection> 
                
                <Text style={styles.errerTextStyle}>
                    {this.state.error}
                </Text>
                

                <CardSection>
                    <Button 
                        onPress={this.onButtonPress.bind(this)}
                    >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
 
const styles = {
    errerTextStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;