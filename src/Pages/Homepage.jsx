import { Button } from '@chakra-ui/react'
import React from 'react'
import Productlist from '../Components/Productlist'
import "./Homepage.css"
const Homepage = () => {
  return (
    <div>
      <div className='head'> 
      <Button className='bt'>Sell Car</Button>
      </div>
      <Productlist/>
    </div>
  )
}

export default Homepage

