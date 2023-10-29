import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import { defaultColors } from '@theme/index'
import { Routes } from '@routes/index'
import { Loading } from '@components/Loading'
import { SafeAreaView } from 'react-native-safe-area-context'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '@services/queryClient'

export default function App() {
  const colorScheme = useColorScheme()

  const [fontsLoaded] = useFonts({
    NunitoSans: NunitoSans_400Regular,
    NunitoSansBold: NunitoSans_700Bold,
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultColors}>
        <TamaguiProvider config={config}>
          <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
            <SafeAreaView style={{ flex: 1 }}>
              {fontsLoaded ? <Routes /> : <Loading />}
            </SafeAreaView>
          </Theme>
        </TamaguiProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
