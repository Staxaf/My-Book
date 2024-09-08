import { ICurrentWeatherInfo, IHourlyWeatherInfo } from '@/utils/types'
import { create } from 'zustand'

type StateType = {
  weatherInfo: ICurrentWeatherInfo | null,
  hourlyWeatherInfo: IHourlyWeatherInfo[]
}

type ActionType = {
  setWeatherInfo: (weatherInfo: StateType['weatherInfo']) => void
  setHourlyWeatherInfo: (hourlyWeatherInfo: IHourlyWeatherInfo[]) => void
}

export const useWeatherStore = create<StateType & ActionType>((set) => ({
  weatherInfo: null,
  hourlyWeatherInfo: [],
  setWeatherInfo: (weatherInfo) => set({ weatherInfo }),
  setHourlyWeatherInfo: (hourlyWeatherInfo) => set({hourlyWeatherInfo: hourlyWeatherInfo.slice(3, 21)}),
}))

