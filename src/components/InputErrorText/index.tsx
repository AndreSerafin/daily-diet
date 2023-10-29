import { Text } from 'tamagui'

interface Props {
  children?: string
}

export function InputErrorText({ children }: Props) {
  return (
    <Text ml={8} color={'$brand_red_100'} mb={-10}>
      {children}
    </Text>
  )
}
