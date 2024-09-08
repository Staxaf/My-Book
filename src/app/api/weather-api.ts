import { Units } from "@/utils/constants"
import { instance } from "@/utils/instance"
import { IWeatherData } from "@/utils/types"
import type { AxiosResponse } from "axios"

type WeatherParamsType = {
  lat: number,
  lon: number,
  dt?: number,
  units?: Units.Metric | Units.Imperial,
  lang?: string
}

export const getWeatherInfo = async (params: WeatherParamsType) => {
  const res: AxiosResponse<IWeatherData> = await instance.get('', {params})
  console.log('res.data', res.data)
  return res.data
}