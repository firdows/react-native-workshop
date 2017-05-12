import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry = false  }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle} 
                placeholder={placeholder}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 3,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 18,
        flex: 3
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        textAlign: 'right'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };