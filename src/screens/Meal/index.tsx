import { AlertDialog } from '@components/AlertDialog'
import { ScreenHeader } from '@components/ScreenHeader'
import {
  StyledContainedButton,
  StyledOutlinedButton,
} from '@components/overrided/Button'
import { useNavigation } from '@react-navigation/native'
import { Circle } from '@tamagui/lucide-icons'
import { PencilLine, Trash2 } from 'lucide-react-native'
import { useState } from 'react'
import { Paragraph, XStack, YStack, getTokens } from 'tamagui'

export function Meal() {
  const { color } = getTokens()
  const { navigate, goBack } = useNavigation()
  const [alertDialogIsOpen, setAlertDialogIsOpen] = useState(false)

  function handleGoBack() {
    goBack()
  }

  function handleEditMeal() {
    navigate('newMeal')
  }

  return (
    <YStack f={1}>
      <ScreenHeader
        onPressReturn={handleGoBack}
        title={'Refeição'}
        color={color.$brand_green_300.val}
      />
      <YStack
        p={24}
        gap={8}
        f={1}
        mt={-8}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
        justifyContent="space-between"
        bg={'$base_white'}
      >
        <YStack gap={24}>
          <YStack gap={8}>
            <Paragraph fontFamily={'$nunito'} fontWeight={'$7'} fontSize={20}>
              X-tudo
            </Paragraph>
            <Paragraph color="$base_200" fontFamily={'$nunito'} fontSize={16}>
              Xis completo da lancheria do bairro
            </Paragraph>
          </YStack>
          <YStack gap={8}>
            <Paragraph fontFamily={'$nunito'} fontWeight={'$7'} fontSize={14}>
              Data e hora
            </Paragraph>
            <Paragraph color="$base_200" fontFamily={'$nunito'} fontSize={16}>
              12/08/2022 às 20:00
            </Paragraph>
          </YStack>
          <XStack>
            <XStack
              p={8}
              borderRadius={999}
              ai="center"
              gap={8}
              bg={'$base_600'}
            >
              <Circle
                size={8}
                color={color.$brand_red_100.val}
                fill={color.$brand_red_100.val}
              />
              <Paragraph>fora da dieta</Paragraph>
            </XStack>
          </XStack>
        </YStack>
        <YStack gap={8}>
          <StyledContainedButton
            onPress={handleEditMeal}
            icon={<PencilLine size={18} color={color.$base_white.val} />}
          >
            Editar Refeição
          </StyledContainedButton>
          <AlertDialog
            isOpen={alertDialogIsOpen}
            openDialogButton={
              <StyledOutlinedButton icon={<Trash2 size={18} />}>
                Excluir Refeição
              </StyledOutlinedButton>
            }
          />
        </YStack>
      </YStack>
    </YStack>
  )
}
