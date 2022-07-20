import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cars from '../Pages/Cars'
import Commercials from '../Pages/Commercials'
import Houses from '../Pages/Houses'
import Mobiles from '../Pages/Mobiles'
import Motarcycles from '../Pages/Motarcycles'
import Rent_Houses from '../Pages/Rent_Houses'
import Scooters from '../Pages/Scooters'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path={'/cars'} element={<Cars/>}></Route>
        <Route path={'/motarcycles'} element={<Motarcycles/>}></Route>
        <Route path={'/mobiles'} element={<Mobiles/>}></Route>
        <Route path={'/forsale'} element={<Houses/>}></Route>
        <Route path={'/scooters'} element={<Scooters/>}></Route>
        <Route path={'/commercial'} element={<Commercials/>}></Route>
        <Route path={'/forrent'} element={<Rent_Houses/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes