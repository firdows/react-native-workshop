import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';

class LoginForm extends Component {
    state = { email: '' };

    render() {
        return (
            <Card >
                <CardSection>                    
                    <Input 
                        label={'Email : '}
                        valute={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder={'Plase type mail'}
                    />
                </CardSection>

                <CardSection>
                    <Button 
                        onPress={() => alert(this.state.text)}
                    >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;