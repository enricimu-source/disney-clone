import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'

function Slider() {
  const [moviesList, setMoviesList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    GlobalApi.getTrendingVideos().then(res => {
      setMoviesList(res.data.results || [])
    })
  }, [])

  const slideRight = () => {
    setCurrentIndex(prev =>
      prev < moviesList.length - 1 ? prev + 1 : 0
    )
  }

  const slideLeft = () => {
    setCurrentIndex(prev =>
      prev > 0 ? prev - 1 : moviesList.length - 1
    )
  }

  return (
    <div className="relative w-full h-[30vh] overflow-hidden">

      <HiChevronLeft
        onClick={slideLeft}
        className="hidden md:block absolute left-5 top-1/2 -translate-y-1/2 
        text-white text-[45px] cursor-pointer z-20"
      />

      <HiChevronRight
        onClick={slideRight}
        className="hidden md:block absolute right-5 top-1/2 -translate-y-1/2 
        text-white text-[45px] cursor-pointer z-20"
      />

      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}vw)`
        }}
      >
        {moviesList.map(
          (movie, index) =>
            movie.backdrop_path && (
              <div key={index} className="w-screen h-full flex-shrink-0">
                <img
                  src={IMAGE_BASE_URL + movie.backdrop_path}
                  alt={movie.title}
                  className="w-full h-full object-contain bg-black rounded-md hover:border-[4px] border-gray-100 transition-all duration-100 ease-in-out"
                />
              </div>
            )
        )}
      </div>
    </div>
  )
}

export default Slider
