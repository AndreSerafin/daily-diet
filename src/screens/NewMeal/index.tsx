import { StatusBar } from 'expo-status-bar'
import {
  Input,
  Label,
  TextArea,
  XStack,
  YStack,
  getTokens,
  Paragraph,
} from 'tamagui'
import { ScreenHeader } from '../../components/ScreenHeader'
import {
  StyledRadioGroup,
  StyledRadioItem,
} from '@components/overrided/RadioGroup'
import { useState } from 'react'
import { Circle } from '@tamagui/lucide-icons'
import { StyledContainedButton } from '@components/overrided/Button'
import { useNavigation } from '@react-navigation/native'

interface RadioItems {
  yes: boolean
  no: boolean
}

export function NewMeal() {
  const { color } = getTokens()
  const { navigate } = useNavigation()

  const [radioItems, setRadioItems] = useState<RadioItems>({
    yes: false,
    no: false,
  })

  const handleRadioItemChange = (value: keyof RadioItems) => {
    const updatedRadioItems: RadioItems = Object.keys(radioItems).reduce(
      (acc, item) => {
        acc[item as keyof RadioItems] = item === value
        return acc
      },
      {} as RadioItems,
    )
    setRadioItems(updatedRadioItems)
  }

  function handleReturn() {
    navigate('home')
  }

  return (
    <YStack f={1}>
      <StatusBar backgroundColor={color.$base_500.val} translucent={false} />
      <ScreenHeader
        onPressReturn={handleReturn}
        title="Nova refeição"
        color={color.base_500.val}
      />
      <YStack
        paddingHorizontal={24}
        gap={16}
        mt={-8}
        pt={40}
        borderTopRightRadius={20}
        borderTopLeftRadius={20}
        backgroundColor={'$base_white'}
        jc="space-between"
        f={1}
      >
        <YStack gap={8}>
          <YStack>
            <Label>Nome</Label>
            <Input />
          </YStack>

          <YStack>
            <Label>Descrição</Label>
            <TextArea />
          </YStack>

          <XStack gap={8}>
            <YStack f={1}>
              <Label>Data</Label>
              <Input />
            </YStack>
            <YStack f={1}>
              <Label>Hora</Label>
              <Input />
            </YStack>
          </XStack>
          <YStack>
            <Label>Está dentro da dieta?</Label>
            <XStack jc="center">
              <StyledRadioGroup space="$2" flexDirection="row">
                <StyledRadioItem
                  variant="green"
                  isChecked={radioItems.yes}
                  value="yes"
                  onPress={() => handleRadioItemChange('yes')}
                >
                  <Circle
                    size={8}
                    color={color.$brand_green_100.val}
                    fill={color.$brand_green_100.val}
                  />
                  <Paragraph>Sim</Paragraph>
                </StyledRadioItem>
                <StyledRadioItem
                  isChecked={radioItems.no}
                  variant="red"
                  value="no"
                  onPress={() => handleRadioItemChange('no')}
                >
                  <Circle
                    size={8}
                    color={color.$brand_red_100.val}
                    fill={color.$brand_red_100.val}
                  />
                  <Paragraph>Não</Paragraph>
                </StyledRadioItem>
              </StyledRadioGroup>
            </XStack>
          </YStack>
        </YStack>

        <StyledContainedButton>Cadastrar refeição</StyledContainedButton>
      </YStack>
    </YStack>
  )
}
