//React
import React, { lazy } from 'react'
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import useTheme from '../../../hooks/useTheme'
import { ActivityIndicator } from 'react-native'

type IVariant = 'primary' | 'outline'

interface IButtonProps {
  label: string
  variant?: IVariant
  customStyle?: StyleProp<ViewStyle>
  onPress?: () => void
  isLoading?: boolean
}

const Button: React.FC<IButtonProps> = props => {
  const { Colors } = useTheme()
  const { customStyle, variant = 'primary', onPress, isLoading = false } = props
  return (
    <TouchableOpacity onPress={() => onPress?.()} style={{}}>
      {isLoading === true ? (
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ActivityIndicator size={'small'} color="white" />
        </View>
      ) : (
        <Text
          style={{
            textAlign: 'center',
            color:
              variant === 'primary'
                ? Colors.secondary[50]
                : Colors.primary[500],
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          {props.label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
