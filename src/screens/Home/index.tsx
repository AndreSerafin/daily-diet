import { HomeHeader } from '@components/HomeHeader'
import { Paragraph, Text, XStack, YStack, getTokens } from 'tamagui'
import { ArrowUpRight, Plus } from '@tamagui/lucide-icons'
import { FlatList, TouchableOpacity } from 'react-native'
import { StyledContainedButton } from '@components/overrided/Button'
import { FoodItem } from '@components/FoodItem'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import { useMeals } from '@store/useMeals'
import { useEffect } from 'react'
export function Home() {
  const { color } = getTokens()
  const { navigate } = useNavigation()
  const {
    meals,
    mealsByDay,
    handleLoadMeals,
    transformToMealsByDay,
    setMealsByDay,
  } = useMeals()

  function handleNewMeal() {
    navigate('newMeal')
  }

  function handleStatistics() {
    navigate('statistics')
  }

  function handleMeal() {
    navigate('meal', meals[0])
  }

  useEffect(() => {
    handleLoadMeals()
  }, [])

  useEffect(() => {
    setMealsByDay(transformToMealsByDay(meals))
  }, [meals])

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
        <FlatList
          data={mealsByDay}
          keyExtractor={(item, index) => item.day + index}
          renderItem={({ item }) => (
            <YStack key={item.day}>
              <Text mb={16} mt={8} fontSize={18} fontWeight={'bold'}>
                {item.day.replace(/\//g, '.')}
              </Text>

              <YStack gap={8}>
                {item.meals.map((meal, index) => (
                  <FoodItem
                    key={meal.name + index}
                    food={meal}
                    onPress={handleMeal}
                  />
                ))}
              </YStack>
            </YStack>
          )}
        />
      </YStack>
    </YStack>
  )
}
