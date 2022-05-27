import React from 'react'
import Footer from '../Componants/Footer'

const About = () => {
  return (
    <>
      <div className=' text-center border p-8 bg-blue-100 w-full'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          <div>
            <h3 className='order-2 text-xl mb-3'>I Md. Mazharul Islam Sohag</h3>
            <p>My avilable time is very short. It has been very difficult for me to do this course all the time with office, home, family etc. Every member of my family and I have come to appreciate how the day and night went, but I am still attached to it. Hopefully, at the end of the course I will get a good job. I don't have a father in my family, my mother is very ill. My family has 8 members including three children. It is very difficult to make a living in the current market with the income my earn. So I hope this day will not last forever inshaAllah</p>
          </div>

          <div>
            <h1>Village: Vhuighor</h1>
            <h1>Thana: Fatulla</h1>
            <h1>City: Narayanganj</h1>
            <h1>Phone: +8801812060163</h1>
            <h1>Email: mislamsohag@gmail.com</h1>
          </div>

          <div>
            <img className='order-1 img-fluid w-100' src="https://i.ibb.co/ZmSpPNX/IMG20211017082810.jpg" alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default About
