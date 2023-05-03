import React, {useState} from 'react';
import {
  StyleProp,
  Text,
  TextInput as RNTextInput,
  View,
  ViewStyle,
  TextInputProps,
} from 'react-native';

import useTheme from '../../../hooks/useTheme';
import {Controller} from 'react-hook-form';

interface ITextInputProps extends TextInputProps {
  label: string;
  name: string;
  control: any;
  placeholder: string;
  customStyle?: any;
}

const TextInput: React.FC<ITextInputProps> = props => {
  const {label, customStyle, placeholder, name, control} = props;
  const {Colors} = useTheme();
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: {value, onChange},
        fieldState: {error},
        formState: {errors},
      }) => (
        <View style={customStyle}>
          <Text
            style={{
              fontSize: 14,
              color: error
                ? Colors.error[600]
                : isFocus
                ? Colors?.primary[500]
                : Colors.secondary[600],
              fontWeight: '600',
              marginBottom: 4,
              marginLeft: 4,
            }}>
            {label}
          </Text>

          <RNTextInput
            {...props}
            keyboardType="numeric"
            onChangeText={text => onChange(text)}
            onFocus={() => setIsFocus(true)}
            placeholderTextColor={
              error ? Colors.error[400] : Colors.secondary[400]
            }
            onPressIn={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            placeholder={error ? error?.message : placeholder}
            style={{
              borderColor: error
                ? Colors.error[500]
                : isFocus
                ? Colors.primary[500]
                : 'transparent',
              borderWidth: isFocus ? 1.5 : 0,
              backgroundColor: error
                ? Colors.error[100]
                : isFocus
                ? Colors?.primary[100]
                : Colors.secondary[200],
              paddingHorizontal: 10,
              width: '100%',
              height: 45,
              borderRadius: 10,
              color: error ? Colors.error[500] : Colors.secondary[600],
              fontWeight: '500',
              fontSize: 14,
            }}
          />
        </View>
      )}
    />
  );
};

export default TextInput;
