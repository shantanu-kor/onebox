import React from 'react';

import nav from '../assets/Primary_Nav.png'
import AllInbox from '../components/homeComp/AllInbox';
import Mail from '../components/homeComp/Mail';
import Details from '../components/homeComp/Details';
import Activities from '../components/homeComp/Activities';

const Home = () => {

  return (
    <div className="flex h-screen gap-2">
      <img src={nav} />
      <AllInbox />
      <Mail />
      <div className="flex flex-col gap-2">
        <Details />
        <Activities />
      </div>
    </div>
  )
}

export default Home;