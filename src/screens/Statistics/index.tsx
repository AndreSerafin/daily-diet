import { StatusBar } from 'expo-status-bar'
import { getTokens, Paragraph, XStack, YStack } from 'tamagui'
import { Card } from './components/Card'
import { ArrowLeft } from '@tamagui/lucide-icons'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function Statistics() {
  const { color } = getTokens()
  const { goBack } = useNavigation()

  function handleReturn() {
    goBack()
  }

  return (
    <YStack f={1}>
      <StatusBar
        backgroundColor={color.$brand_green_300.val}
        translucent={false}
      />
      <YStack
        paddingHorizontal={16}
        paddingVertical={40}
        backgroundColor={'$brand_green_300'}
        fb={150}
      >
        <TouchableOpacity onPress={handleReturn}>
          <ArrowLeft color={color.$brand_green_100.val} />
        </TouchableOpacity>
        <YStack ai="center" jc="center" mt={-15}>
          <Paragraph fontFamily="$nunito" fontSize={32} fontWeight={'$7'}>
            90,86%
          </Paragraph>
          <Paragraph fontFamily="$nunito" fontSize={14}>
            das refeições dentro da dieta
          </Paragraph>
        </YStack>
      </YStack>
      <YStack
        ai="center"
        mt={-20}
        f={1}
        bg={'$base_white'}
        gap={32}
        paddingTop={32}
        borderRadius={20}
      >
        <Paragraph fontFamily="$nunito" fontWeight={'bold'}>
          Estatísticas gerais
        </Paragraph>
        <YStack gap={8}>
          <Card
            bg={'$base_600'}
            numberOfMeals={30}
            description={'melhor sequência de pratos dentro da dieta'}
          />
          <Card
            bg={'$base_600'}
            numberOfMeals={109}
            description={'refeições registradas'}
          />

          <XStack gap={8}>
            <Card
              bg={'$brand_green_300'}
              numberOfMeals={99}
              description={'refeições dentro da dieta'}
            />
            <Card
              bg={'$brand_red_300'}
              numberOfMeals={10}
              description={'refeições fora da dieta'}
            />
          </XStack>
        </YStack>
      </YStack>
    </YStack>
  )
}
