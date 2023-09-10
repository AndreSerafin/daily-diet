import { radius, size, space, zIndex } from '@tamagui/themes'
import { createTokens } from 'tamagui'

export const defaultColors = {
  base_100: '#1b1d1e',
  base_200: '#333638',
  base_300: '#5c6265',
  base_400: '#b9bbbc',
  base_500: '#dddedf',
  base_600: '#eff0f0',
  base_700: '#fafafa',
  base_white: '#ffffff',
  brand_green_100: '#639339',
  brand_green_200: '#cbe4b4',
  brand_green_300: '#e5f0db',
  brand_red_100: '#bf3b44',
  brand_red_200: '#f3babd',
  brand_red_300: '#f4e6e7',
} as const

export const tokens = createTokens({
  size,
  space,
  zIndex,
  color: defaultColors,
  radius,
})
