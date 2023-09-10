import styled, { css } from 'styled-components'
import { RadioGroup } from 'tamagui'

interface RadioItemButonTypes {
  variant: 'green' | 'red'
  isChecked: boolean
}

export const StyledRadioGroup = styled(RadioGroup)`
  flex: 1;
`

export const StyledRadioItem = styled(
  RadioGroup.Item,
).attrs<RadioItemButonTypes>(() => ({
  unstyled: true,
  pressStyle: { backgroundColor: '$base_500' },
}))`
  ${({ variant, isChecked, theme }) => css`
    flex: 1;
    gap: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 16px 16px;

    background-color: ${variant === 'red' && isChecked
      ? theme.brand_red_300
      : variant === 'green' && isChecked
      ? theme.brand_green_300
      : theme.base_600};

    border: 1px solid
      ${variant === 'red' && isChecked
        ? theme.brand_red_100
        : variant === 'green' && isChecked
        ? theme.brand_green_100
        : theme.base_600};
    border-radius: 6px;
  `};
`
