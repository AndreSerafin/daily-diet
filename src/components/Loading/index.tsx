import { ActivityIndicator } from 'react-native'
import { YStack, getTokens } from 'tamagui'

export function Loading() {
  const { color } = getTokens()
  return (
    <YStack f={1} jc={'center'}>
      <ActivityIndicator size={50} color={color.$brand_green_100.val} />
    </YStack>
  )
}
