import React from 'react'
import aboutPic from '../pics/aboutPic.png'


function About() {
  return (
    <div className='flex col items-center justify-center h-screen pt-20'>
        <div>
        <h1 className='text-center '>About Gym-n-Chew</h1>
        </div>
        <div className='flex'>
        <img className='w-64' src={aboutPic}></img>
       <h1 className='text-center w-3/4'>"Welcome to Gym-n-Chew, the ultimate
         hub for fitness enthusiasts and food lovers
          alike! We're all about sharing the joys of
           staying active and indulging in delicious meals.
            Gym-n-Chew provides a vibrant online community
             where you can proudly showcase your workout progress
              and tantalizing culinary creations. Whether you've
               conquered a challenging workout or whipped up a 
               mouthwatering feast, our platform is here to 
               celebrate your achievements. Connect
                with like-minded individuals, inspire
                 others with your fitness journey, and
                  discover a feast for the eyes with
                   a delightful assortment of food photos.
                    Join us at Gym-n-Chew and be part of a community that 
        appreciates the perfect balance between sweat and flavor!"</h1>
       
        </div>
    </div>
  )
}

export default About