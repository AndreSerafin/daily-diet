import { HomeHeader } from '@components/HomeHeader'
import { Paragraph, XStack, YStack, getTokens } from 'tamagui'
import { ArrowUpRight, Plus } from '@tamagui/lucide-icons'
import { SectionList, TouchableOpacity } from 'react-native'
import { StyledContainedButton } from '@components/overrided/Button'
import { useState } from 'react'
import { FoodItem } from '@components/FoodItem'
import {
  CustomGroupSeparator,
  CustomItemSeparator,
} from '@components/overrided/CustomListSeparator'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'

interface FoodItem {
  name: string
  hour: string
  type: 'diet' | 'not-diet'
}

interface FoodDay {
  title: string
  data: FoodItem[]
}

export function Home() {
  const { color } = getTokens()
  const { navigate } = useNavigation()

  const [meals, setMeals]: FoodDay = useState([
    {
      title: '10.11.23',
      data: [
        { name: 'Bolo de Chocolate', hour: '20:00', type: 'diet' },
        { name: 'Sorvete de Baunilha', hour: '15:30', type: 'not-diet' },
        { name: 'Torta de Morango', hour: '18:45', type: 'not-diet' },
      ],
    },
    {
      title: '15.09.23',
      data: [
        { name: 'Espaguete à Bolonhesa', hour: '12:15', type: 'not-diet' },
        { name: 'Fettuccine Alfredo', hour: '19:30', type: 'not-diet' },
        { name: 'Lasanha', hour: '14:00', type: 'not-diet' },
      ],
    },
    {
      title: '20.07.22',
      data: [
        {
          name: 'Sanduíche de Frango Grelhado',
          hour: '13:00',
          type: 'diet',
        },
        {
          name: 'Sanduíche de Queijo e Presunto',
          hour: '16:45',
          type: 'not-diet',
        },
        { name: 'Sanduíche de Peito de Peru', hour: '11:30', type: 'not-diet' },
      ],
    },
    {
      title: '25.05.21',
      data: [
        { name: 'Hambúrguer', hour: '21:00', type: 'not-diet' },
        { name: 'Batata Frita', hour: '21:00', type: 'not-diet' },
        { name: 'Nuggets de Frango', hour: '21:00', type: 'not-diet' },
      ],
    },
  ])

  function handleNewMeal() {
    navigate('newMeal')
  }

  function handleStatistics() {
    navigate('statistics')
  }

  function handleMeal() {
    navigate('meal')
  }

  return (
    <YStack gap={32} f={1} marginHorizontal={24} marginVertical={36}>
      <StatusBar backgroundColor="transparent" translucent={false} />
      <HomeHeader />
      <YStack
        borderRadius={8}
        paddingHorizontal={16}
        paddingVertical={20}
        ai="center"
        jc="center"
        backgroundColor={'$brand_green_300'}
      >
        <XStack mb={-16} alignSelf={'flex-end'}>
          <TouchableOpacity onPress={handleStatistics}>
            <ArrowUpRight color={color.brand_green_100.val} />
          </TouchableOpacity>
        </XStack>
        <Paragraph fontFamily="$nunito" fontSize={32} fontWeight={'$7'}>
          90,86%
        </Paragraph>
        <Paragraph fontFamily="$nunito" fontSize={14}>
          das refeições dentro da dieta
        </Paragraph>
      </YStack>
      <YStack gap={8}>
        <Paragraph fontFamily="$nunito" fontSize={16}>
          Refeições
        </Paragraph>
        <StyledContainedButton
          onPress={handleNewMeal}
          h={50}
          icon={<Plus size={22} />}
        >
          Nova refeição
        </StyledContainedButton>
      </YStack>
      <YStack f={1}>
        <SectionList
          scrollEnabled
          sections={meals}
          keyExtractor={(item: FoodItem, index) => item.name + index}
          renderItem={({ item }) => (
            <FoodItem food={item} onPress={handleMeal} />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Paragraph fontSize={18} fontWeight={'700'}>
              {title}
            </Paragraph>
          )}
          ItemSeparatorComponent={CustomItemSeparator}
          SectionSeparatorComponent={CustomGroupSeparator}
        />
      </YStack>
    </YStack>
  )
}
