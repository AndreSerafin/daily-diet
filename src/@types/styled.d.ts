import 'styled-components/native'

import { defaultColors } from '@theme/index'

type ThemeType = typeof defaultColors

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
