import { Image, Paragraph, YStack } from 'tamagui'
import positiveFeedback from '@assets/imgs/feedbackPositive.png'
import negativeFeedback from '@assets/imgs/feedbackNegative.png'
import { StyledContainedButton } from '@components/overrided/Button'

interface Props {
  variant: 'positive' | 'negative'
}

export function Feedback({ variant }: Props) {
  return (
    <YStack jc="center" ai="center" f={1} gap={40}>
      <YStack ai={'center'} m={32}>
        <Paragraph
          fontSize={24}
          color={variant === 'positive' ? '$brand_green_100' : '$brand_red_100'}
          fontFamily={'$nunito'}
          fontWeight={'$7'}
        >
          {variant === 'positive' ? 'Cotinue assim!' : 'Que pena!'}
        </Paragraph>
        {variant === 'positive' ? (
          <Paragraph>
            Você continua
            <Paragraph fontWeight={'700'}> dentro da dieta.</Paragraph> Muito
            bem!
          </Paragraph>
        ) : (
          <Paragraph textAlign="center">
            Você
            <Paragraph fontFamily={'$nunito'} fontWeight={'700'}>
              {' '}
              saiu da dieta{' '}
            </Paragraph>
            dessa vez, mas continue se esforçando e não desista!
          </Paragraph>
        )}
      </YStack>
      <Image
        alt=""
        source={variant === 'positive' ? positiveFeedback : negativeFeedback}
      />

      <StyledContainedButton>Ir para a página inicial</StyledContainedButton>
    </YStack>
  )
}
