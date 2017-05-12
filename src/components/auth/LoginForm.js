import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection } from '../common';

class LoginForm extends Component {
    state = { text: '' };
    
    render() {
        return (
            <Card >
                <CardSection>
                    <TextInput 
                    valute={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={{ height: 40, width: 100 }} 
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;