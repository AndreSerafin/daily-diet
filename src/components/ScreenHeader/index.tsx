import { ArrowLeft } from '@tamagui/lucide-icons'
import { StatusBar } from 'expo-status-bar'
import { TouchableOpacity } from 'react-native'
import { getTokens, XStack, Paragraph, View } from 'tamagui'

interface Props {
  title: string
  color: string
  onPressReturn?: () => void
}

export function ScreenHeader({ title, color, onPressReturn }: Props) {
  const { color: colors } = getTokens()

  return (
    <>
      <StatusBar backgroundColor={color} translucent={false} />
      <XStack
        bg={color}
        ai="center"
        height={120}
        jc="space-evenly"
        paddingHorizontal={24}
      >
        <View f={1}>
          <TouchableOpacity onPress={onPressReturn}>
            <ArrowLeft color={colors.$base_100.val} />
          </TouchableOpacity>
        </View>
        <View f={99} ai={'center'} fw="nowrap">
          <Paragraph
            color={'$base_100'}
            fontFamily={'$nunito'}
            fontWeight={'700'}
            fontSize={18}
          >
            {title}
          </Paragraph>
        </View>
        <View f={1} />
      </XStack>
    </>
  )
}
