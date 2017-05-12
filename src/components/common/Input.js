import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text >
            {label}
            </Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ height: 40, width: null, flex: 1 }} 
            />
        </View>
    );
};


export { Input };