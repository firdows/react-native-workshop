import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '' 
    };

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
                        onPress={() => alert(this.state.email + ' ' + this.state.password)}
                    >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;