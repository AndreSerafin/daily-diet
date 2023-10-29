import { MealDTO } from 'src/dtos/MealDTO'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      meal: MealDTO
      newMeal: undefined
    }
  }
}
