import { Star } from 'lucide-react'
import React from 'react'

function Rating({rating}:{rating:number}) {
    const ProductRating = Math.round(rating);

  return (
    <div className='flex flex-row '>
        {
            [1,2,3,4,5].map((e)=><Star className={`w-[15px] h-[15px ] ${ProductRating>e?'text-yellow-600':'text-gray-400'}`} key={e}/>)
        }
    </div>
  )
}

export default Rating