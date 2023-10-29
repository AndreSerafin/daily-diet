import { StatusBar } from 'expo-status-bar'
import {
  Input,
  Label,
  TextArea,
  XStack,
  YStack,
  Form,
  getTokens,
  Button,
} from 'tamagui'
import { ScreenHeader } from '../../components/ScreenHeader'

import { useState } from 'react'
import { Circle } from '@tamagui/lucide-icons'
import { StyledContainedButton } from '@components/overrided/Button'
import { useNavigation } from '@react-navigation/native'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { maskDateDDMMYYYY, maskTimeHHMMSS } from '@utils/masks'
import { InputErrorText } from '@components/InputErrorText'
import { useMeals } from '@store/useMeals'

const createMealFormSchema = z.object({
  name: z.string({ required_error: 'Digite o nome da refeição' }),
  description: z.string({
    required_error: 'Digite uma descrição para a refeição',
  }),
  date: z.string({ required_error: 'Digite a data' }),
  hour: z.string({ required_error: 'Digite a hora' }),
  isAtDiet: z.boolean(),
})

export type CreateMealFormInputs = z.infer<typeof createMealFormSchema>

export function NewMeal() {
  const { color } = getTokens()
  const { navigate } = useNavigation()

  const [radioValue, setRadioValue] = useState(false)

  const { handleCreateMeal } = useMeals()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreateMealFormInputs>({
    resolver: zodResolver(createMealFormSchema),
  })

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
      <Form
        onSubmit={handleSubmit((data) => {
          handleCreateMeal(data)
        })}
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
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, ...rest } }) => (
                <Input onChangeText={onChange} {...rest} />
              )}
            />
            {errors && <InputErrorText>{errors?.name?.message}</InputErrorText>}
          </YStack>

          <YStack>
            <Label>Descrição</Label>
            <Controller
              control={control}
              name="description"
              render={({ field: { onChange, ...rest } }) => (
                <TextArea onChangeText={onChange} {...rest} />
              )}
            />
          </YStack>
          {errors && (
            <InputErrorText>{errors?.description?.message}</InputErrorText>
          )}
          <XStack gap={8}>
            <YStack f={1}>
              <Label>Data</Label>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange, ...rest } }) => (
                  <Input
                    onChangeText={(value) => {
                      onChange(maskDateDDMMYYYY(value))
                    }}
                    {...rest}
                  />
                )}
              />
              {errors && (
                <InputErrorText>{errors?.date?.message}</InputErrorText>
              )}
            </YStack>
            <YStack f={1}>
              <Label>Hora</Label>
              <Controller
                control={control}
                name="hour"
                render={({ field: { onChange, ...rest } }) => (
                  <Input
                    onChangeText={(value) => {
                      onChange(maskTimeHHMMSS(value))
                    }}
                    {...rest}
                  />
                )}
              />
              {errors && (
                <InputErrorText>{errors?.hour?.message}</InputErrorText>
              )}
            </YStack>
          </XStack>
          <YStack>
            <Label>Está dentro da dieta?</Label>
            <XStack jc="center">
              <XStack f={1} gap={8}>
                <Button
                  f={1}
                  h={50}
                  bg={radioValue ? '$brand_green_300' : '$base_600'}
                  borderColor={radioValue ? '$brand_green_100' : 0}
                  onPress={() => {
                    setRadioValue(true)
                    setValue('isAtDiet', radioValue)
                  }}
                >
                  Sim
                  <Circle
                    size={8}
                    color={color.$brand_green_100.val}
                    fill={color.$brand_green_100.val}
                  />
                </Button>
                <Button
                  h={50}
                  f={1}
                  bg={!radioValue ? '$brand_red_300' : '$base_600'}
                  borderColor={!radioValue ? '$brand_red_100' : 0}
                  onPress={() => {
                    setRadioValue(false)
                    setValue('isAtDiet', radioValue)
                  }}
                >
                  Não
                  <Circle
                    size={8}
                    color={color.$brand_red_100.val}
                    fill={color.$brand_red_100.val}
                  />
                </Button>
              </XStack>
            </XStack>
          </YStack>
        </YStack>

        <Form.Trigger asChild>
          <StyledContainedButton>Cadastrar refeição</StyledContainedButton>
        </Form.Trigger>
      </Form>
    </YStack>
  )
}
