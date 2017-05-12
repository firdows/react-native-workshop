import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from '../common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card >
                <CardSection>
                    {/*<TextInput 
                    valute={this.state.text}
                    onChangeText={text => this.setState({ text })}
                    style={{ height: 40, width: null, flex: 1 }} 
                    placeholder={'Email'}
                    />*/}
                <Input label={'Email'} />
                </CardSection>

                <CardSection>
                    <Button onPress={ () => alert(this.state.text) }>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


export default LoginForm;