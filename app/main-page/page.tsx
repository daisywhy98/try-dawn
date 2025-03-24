

import React from 'react'
import NewsCard from '../components/NewsCard'
import UploadPhoto from '../components/UploadPhoto'
import PieChartComponent from '../components/PieChartComponent'

const mainPage = () => {
  return (
    <div>
      <div>
        <NewsCard></NewsCard>
      </div>
      <div className='flex flex-row gap-4'>
      <UploadPhoto></UploadPhoto>
      <PieChartComponent></PieChartComponent>
      </div>
      
    </div>
  )
}

export default mainPage