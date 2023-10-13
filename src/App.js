import React from 'react'
import Spline from "./components/spline.jsx"

function App() {
  return (
    <>
    <div className='absolute top-0 right-0'>
      <Spline/>
    </div>

    <div className='relative flex flex-col gap-y-5 p-10 mt-10 border-2 max-w-[70vh] bg-gray-900'>
<h1 className='text-white text-4xl font-bold'>
We International Digital Marketing
</h1>
<p className='text-white text-xl max-w-[100vh]'>
Bring your team together and build your community by using our cross-platform app that lets you collaborate via chat, voice and by sharing and storing unlimited media files. A world of topics is waiting for you. Join the private beta.
</p>
    </div>
    </>
  )
}

export default App