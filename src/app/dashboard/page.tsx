'use client'

import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { getWeatherInfo } from '../api/weather-api';
import { IWeatherData } from '@/utils/types';
import { useWeatherStore } from '@/stores/weather.store';
import TotalInfo from '@/components/TotalInfo';
import dynamic from 'next/dynamic';

const DayTemperatureGraph = dynamic(() => import('@/components/DayTemperatureGraph'), { ssr: false })

function DashboardPage() {
  const weatherInfo = useWeatherStore((state) => state.weatherInfo)
  const setWeatherInfo = useWeatherStore((state) => state.setWeatherInfo)
  const setHourlyWeatherInfo = useWeatherStore((state) => state.setHourlyWeatherInfo)
  const { data, error, isLoading } = useQuery<IWeatherData>({
    queryKey: 'weather-info', queryFn: () => getWeatherInfo({
      lat: 47.806709,
      lon: 35.046745
    })
  });

  useEffect(() => {
    if(data) {
      setWeatherInfo(data.current)
      setHourlyWeatherInfo(data.hourly)
    }
  }, [data])

  console.log('weatherInfo', weatherInfo)
  console.log('error', error)

  return (
    <div className='w-6/12 pt-10'>    
      <TotalInfo />
      <DayTemperatureGraph />
    </div>
  )
}

export default React.memo(DashboardPage)