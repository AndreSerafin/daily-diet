import { CreateMealFormInputs } from '@screens/NewMeal'
import { mealCreate } from '@storage/meals/mealCreate'
import { mealsGetAll } from '@storage/meals/mealsGetAll'
import { MealDTO } from 'src/dtos/MealDTO'
import { create } from 'zustand'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

export interface MealsItem {
  id: string
  name: string
  hour: string
  is_at_diet: boolean
}

interface MealByDay {
  day: string
  meals: Array<MealsItem>
}

interface MealsState {
  meals: Array<MealDTO>
  mealsByDay: Array<MealByDay>

  setMeals: (state: Array<MealDTO>) => void
  setMealsByDay: (state: Array<MealByDay>) => void
  handleCreateMeal: (data: CreateMealFormInputs) => void
  handleLoadMeals: () => Promise<void>
  transformToMealsByDay: (meals: Array<MealDTO>) => Array<MealByDay>
}

export const useMeals = create<MealsState>((set, get) => {
  return {
    meals: [],
    mealsByDay: [],

    setMeals: (state: Array<MealDTO>) => {
      set({ meals: state })
    },

    setMealsByDay: (state: Array<MealByDay>) => {
      set({ mealsByDay: state })
    },

    handleLoadMeals: async () => {
      const meals = await mealsGetAll()

      console.log(meals.length)

      set({ meals })
    },

    handleCreateMeal: (data: CreateMealFormInputs) => {
      const newMeal: MealDTO = {
        id: uuidv4(),
        name: data.name,
        description: data.description,
        date: data.date,
        hour: data.hour,
        is_at_diet: data.isAtDiet,
      }

      mealCreate(newMeal)
      console.log(newMeal)
    },

    transformToMealsByDay: (meals: Array<MealDTO>): Array<MealByDay> => {
      const mealsByDay: { [key: string]: MealByDay } = {}

      meals.forEach((item) => {
        const day = item.date

        if (!mealsByDay[day]) {
          mealsByDay[day] = { day, meals: [] }
        }

        if (!mealsByDay[day].meals.includes(item)) {
          mealsByDay[day].meals.push(item)
        }
      })

      const result: Array<MealByDay> = Object.values(mealsByDay)

      return result
    },
  }
})
