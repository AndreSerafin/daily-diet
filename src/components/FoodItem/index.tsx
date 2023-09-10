import { Paragraph, Stack, XStack, getTokens } from 'tamagui'
import { Circle } from '@tamagui/lucide-icons'

interface FoodItem {
  name: string
  hour: string
  type: 'diet' | 'not-diet'
}

interface Props {
  food: FoodItem
  onPress?: () => void
}

export function FoodItem({ food: { name, hour, type }, onPress }: Props) {
  return (
    <XStack
      pressStyle={{ backgroundColor: '$base_500' }}
      hoverStyle={{ backgroundColor: '$base_500' }}
      onPress={onPress}
      gap={20}
      paddingHorizontal={12}
      paddingVertical={14}
      borderRadius={6}
      borderWidth={1}
      borderColor={'$base_400'}
      ai={'center'}
    >
      <Paragraph>{hour}</Paragraph>
      <Stack borderLeftWidth={1} height={14} borderColor={'$base_400'} />
      <Paragraph flex={1}>{name}</Paragraph>
      <Paragraph>
        {type === 'diet' ? (
          <Stack
            bg={'$brand_green_200'}
            width={14}
            height={14}
            borderRadius={999}
          />
        ) : (
          <Stack
            bg={'$brand_red_200'}
            width={14}
            height={14}
            borderRadius={999}
          />
        )}
      </Paragraph>
    </XStack>
  )
}
