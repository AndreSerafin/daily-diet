import { Paragraph, YStack, YStackProps } from 'tamagui'

interface Props extends YStackProps {
  numberOfMeals: number
  description: string
}

export function Card({ numberOfMeals, description, ...rest }: Props) {
  return (
    <YStack
      ai="center"
      jc="center"
      height={90}
      paddingHorizontal={8}
      borderRadius={8}
      {...rest}
    >
      <Paragraph fontFamily="$nunito" fontSize={24} fontWeight={'700'}>
        {numberOfMeals}
      </Paragraph>
      <Paragraph fontFamily="$nunito" fontSize={14}>
        {description}
      </Paragraph>
    </YStack>
  )
}
