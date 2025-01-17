import React from 'react'

const Marquee = ({imagesurls}) => {
  return (
    <div className='flex w-full py-6 gap-20 whitespace-nowrap overflow-hidden'>
        {imagesurls.map(url => <img src={url} className='w-[6vw] flex-shrink-0' />)}
        {imagesurls.map(url => <img src={url} className='flex-shrink-0' />)}
    </div>
  )
}

export default Marquee