import React, { useEffect, useState } from 'react'

import { motion } from "framer-motion";
import project1 from "../../assets/project_img_1.jpg";
import project2 from "../../assets/project_img_2.jpg";
import project3 from "../../assets/project_img_3.jpg";
import project4 from "../../assets/project_img_4.jpg";


export default function Projects() {

  return (
    <motion.div
    initial= {{opacity: 0 , x: -200}}
    transition={{duration: 1 }}
    whileInView={{opacity: 1 , x: 0}}
    viewport={{once: true}}
    className='container mx-auto py-4 pt-10 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
 <span className=' font-light underline underline-offset-4 decoration-1 under '> Completed </span></h1>   
    <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

<div >  
  <div className='flex gap-8'> 
    <div className='relative w-full sm:w-1/4 flex-shrink-0'>
<img src={project1}  className='w-full h-auto mb-14'/>
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
<div className="inline-block bg-white w-3/4 px-4 py-2 shadow:md">
<h2 className='text-xl font-semibold text-gray-800'>Skyline Haven</h2>
<p className='text-gray-500 text-sm'>
$2,50,000 <span>|</span> California
</p>
</div>
</div>
    </div>
    <div className='relative w-full sm:w-1/4 flex-shrink-0'>
<img src={project2}  className='w-full h-auto mb-14'/>
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
<div className="inline-block bg-white w-3/4 px-4 py-2 shadow:md">
<h2 className='text-xl font-semibold text-gray-800'>Vista Verde</h2>
<p className='text-gray-500 text-sm'>
$2,50,000 <span>|</span> San Francisco
</p>
</div>
</div>
    </div>
    <div className='relative w-full sm:w-1/4 flex-shrink-0'>
<img src={project3}  className='w-full h-auto mb-14'/>
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
<div className="inline-block bg-white w-3/4 px-4 py-2 shadow:md">
<h2 className='text-xl font-semibold text-gray-800'>Serenity Suites</h2>
<p className='text-gray-500 text-sm'>
$2,50,000 <span>|</span> Chicago
</p>
</div>
</div>
    </div>
    <div className='relative w-full sm:w-1/4 flex-shrink-0'>
<img src={project4}  className='w-full h-auto mb-14'/>
<div className='absolute left-0 right-0 bottom-5 flex justify-center'>
<div className="inline-block bg-white w-3/4 px-4 py-2 shadow:md">
<h2 className='text-xl font-semibold text-gray-800'>Central Square</h2>
<p className='text-gray-500 text-sm'>
$2,50,000 <span>|</span> Los Angeles
</p>
</div>
</div>
    </div> 
  </div>
 
</div>

    </motion.div>
  )
}
