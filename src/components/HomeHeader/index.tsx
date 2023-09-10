import Logo from '@assets/imgs/Logo'
import { Avatar, XStack } from 'tamagui'

export function HomeHeader() {
  return (
    <XStack jc="space-between">
      <Logo />
      <Avatar circular borderWidth={2} borderColor={'$base_200'}>
        <Avatar.Image
          src={
            'https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80'
          }
          width={40}
          height={40}
        />
      </Avatar>
    </XStack>
  )
}
