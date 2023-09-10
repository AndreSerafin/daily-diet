import { Button, styled } from 'tamagui'

export const StyledContainedButton = styled(Button, {
  backgroundColor: '$base_200',
  color: '$base_white',
  borderWidth: 1,
  height: 50,

  hoverStyle: {
    backgroundColor: '$base_100',
    borderWidth: 1,
  },
  pressStyle: {
    backgroundColor: '$base_100',
  },
})

export const StyledOutlinedButton = styled(Button, {
  backgroundColor: 'transparent',
  height: 50,
  borderWidth: 1,
  borderColor: '$base_100',

  hoverStyle: {
    backgroundColor: '$base_500',
    borderColor: '$base_100',
  },
  pressStyle: {
    backgroundColor: '$base_500',
    borderColor: '$base_100',
  },
})
