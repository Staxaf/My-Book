'use client'

import { useWeatherStore } from '@/stores/weather.store'
import React, { useMemo } from 'react'
import type { SeriesType } from './types'
import dynamic from 'next/dynamic'
import type { ApexOptions } from "apexcharts";
import { Colors } from '@/utils/constants'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function DayTemperatureGraph() {
  const hourlyWeatherInfo = useWeatherStore((state) => state.hourlyWeatherInfo)
  const hoursForGraph = useMemo(() => hourlyWeatherInfo.map(h => `${new Date(h.dt * 1000).getUTCHours()}:00`), [hourlyWeatherInfo])
  // console.log('hourlyWeatherInfo.map(h => new Date(h.dt * 1000).getUTCHours())', hourlyWeatherInfo.map(h => new Date(h.dt * 1000).getUTCHours()))
  const chartOptions: ApexOptions = {
    chart: {
      id: 'basic-line',
      toolbar: {
        show: false, // Disable the toolbar
      },
    },
    xaxis: {
      categories: hoursForGraph, // Months for the x-axis
    },
    yaxis: {
      show: false
    },
    grid: {
      borderColor: '#1D61A1', // Customize grid line color
      strokeDashArray: 5,
    },
    markers: {
      size: 6, // Size of the dots (markers)
      colors: ['white'], // Color of the dots
      strokeColors: '#C1E3FF', // Border color of the dots
      strokeWidth: 3, // Border thickness of the dots
      hover: {
        size: 8, // Size of the dots when hovered
      },
    },
    dataLabels: {
      enabled: true, // Enable data labels
      offsetY: -10, // Position the labels above the markers
      offsetX: 3,
      background: {
        enabled: true,
        foreColor: Colors.MainBlue,
        padding: 4,
        borderRadius: 4,
        // borderColor: '#FF5722',
        opacity: 1,
      },
      style: {
        fontSize: '12px', // Custom font size
        colors: ['white'], // Custom label color

      },
      formatter: function (val, opts) {
        // Custom formatter for the data labels (e.g., showing '$' before the value)
        return `${val.toLocaleString()}°`
      },
    },
    title: {
      text: 'Temperature', // Chart title
      style: {
        fontSize: '25px',
        color: Colors.MainBlue,
        fontWeight: 'bold',

      }
    },
    stroke: {
      curve: 'smooth',
      width: 5, // Customize the thickness of the line
      colors: ['#5183B6'],
      // curve: 'smooth', // Makes the line smooth
    },
    tooltip: {
      custom: ({ series, seriesIndex, dataPointIndex, w }) => {
        const value = series[seriesIndex][dataPointIndex];
        const time = w.globals.categoryLabels[dataPointIndex];
        const feelsLike = hourlyWeatherInfo.find(h => `${new Date(h.dt * 1000).getUTCHours()}:00` === time)?.feels_like

        // Custom HTML for the tooltip
        return `<div style="background-color: #333; color: #fff; padding: 10px; border-radius: 5px;">
                  <strong>${time}</strong><br/>
                  Temperature: <strong>${value.toLocaleString()}°</strong> <br/>
                  Feels like: <strong>${feelsLike}°</strong>
                </div>`;
      },
    }
  }

  const series: SeriesType = [
    {
      name: 'Temperature',
      data: hourlyWeatherInfo.map(h => h.temp), // Sales data for each month
    },
  ]
  return (
    <div className='bg-blue-100 rounded-xl mt-5 p-5'>
      {(typeof window !== 'undefined') && <Chart options={chartOptions} series={series} type="line" width="100%" height="400" />}
    </div>
  )
}
