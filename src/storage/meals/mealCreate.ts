import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealDTO } from 'src/dtos/MealDTO'
import { mealsGetAll } from './mealsGetAll'

export async function mealCreate(newMeal: MealDTO) {
  try {
    const storedGroups = await mealsGetAll()

    await AsyncStorage.setItem(
      MEAL_COLLECTION,
      JSON.stringify([...storedGroups, newMeal]),
    )
  } catch (error) {
    throw error
  }
}
