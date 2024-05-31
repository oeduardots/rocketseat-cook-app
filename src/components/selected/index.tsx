import { MaterialIcons } from '@expo/vector-icons'
import { Text, View } from 'react-native'
import Animated, { BounceOutDown, SlideInDown } from 'react-native-reanimated'

import { Button } from '@/components/button'
import { theme } from '@/theme'

import { styles } from './styles'

interface SelectedProps {
  quantity: number
  onClear: () => void
  onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  return (
    <Animated.View
      style={styles.container}
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          onPress={onClear}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Enncontrar" onPress={onSearch} />
    </Animated.View>
  )
}
