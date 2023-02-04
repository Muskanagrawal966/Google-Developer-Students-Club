import React from 'react'

const Preview = ({markdown}) => {
  // console.log(mdValue);
  return (
    <div className='w-1/2 bg-gray-800 ml-1 text-white p-2'>
        <div className=' bg-transparent text-white' dangerouslySetInnerHTML={{'__html':markdown}}></div>
    </div>
  )
}

export default Preview;