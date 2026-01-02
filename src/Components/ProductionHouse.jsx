import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import nationalG from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import starwarV from './../assets/Videos/star-wars.mp4'
import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalGeographicV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'

function ProductionHouse() {
     const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
 return (
  <div className="flex gap-2 md:gap-5 mt-16 p-2 px-5 md:px-16">
    {productionHouseList.map((item) => (
      
      <div
        key={item.id}
        className="rounded-lg overflow-hidden"
      >

        <div
          className="group relative border-2 border-gray-600 rounded-lg
                     hover:scale-110 transition-all duration-300 ease-in-out
                     cursor-pointer"
        >
          <img
            src={item.image}
            className="w-full relative z-10"
          />

          <video
            src={item.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover
                       opacity-0 group-hover:opacity-50
                       transition-opacity duration-300"
          />
        </div>

      </div>
    ))}
  </div>
)


}

export default ProductionHouse
