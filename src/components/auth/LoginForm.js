import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from '../common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '' 
    };

    onButtonPress() {
        //return (alert(this.state.email + ' ' + this.state.password));
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
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


export default LoginForm;