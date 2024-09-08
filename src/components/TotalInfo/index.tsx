import { useWeatherStore } from '@/stores/weather.store'
import React from 'react'
import styles from './styles.module.sass'

export default function TotalInfo() {
  const weatherInfo = useWeatherStore((state) => state.weatherInfo)

  if (!weatherInfo) return null

  return (
    <div className='w-full rounded-lg bg-slate-500 py-2 px-5'>
      <div className='flex justify-between items-center'>
        <p className='text-white text-3xl font-medium '>Gotham</p>
        <p className='text-white text-base font-regular '>Today: 10:00</p>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <p className={`text-7xl text-white font-semibold ${styles.temperature}`}>{Math.round(weatherInfo.temp)}</p>
        <p className='txt-xl text-white capitalize mt-2'>{weatherInfo.weather[0].description}</p>
      </div>
      <div className='flex justify-between mt-3'>
        <p className={styles.weather__value}>{weatherInfo.wind_speed} m/s</p>
        <p className={styles.weather__value}>{weatherInfo.humidity}%</p>
        <p className={styles.weather__value}>{weatherInfo.wind_gust} m/s</p>
      </div>
    </div>
  )
}
