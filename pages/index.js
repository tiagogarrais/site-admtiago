import MenuSuperiorGeral from '../components/MenuSuperiorGeral';
import MenuAtalhosGeral from '../components/MenuAtalhosGeral';
import RodapeSite from '../components/RodapeSite';
// import GoogleLogin from 'react-google-login';
import React, { useState } from "react";


function Index() {

  return (
    <div>
      <MenuSuperiorGeral />
      <MenuAtalhosGeral />
      <RodapeSite />
    </div>
  )
}

export default Index