import MenuSuperiorGeral from '../components/MenuSuperiorGeral';
import MenuAtalhosGeral from '../components/MenuAtalhosGeral';
import RodapeSite from '../components/RodapeSite';
import GoogleLogin from 'react-google-login';
import React, { useState } from "react";


function Index() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const responseGoogle = (response) => {
    console.log(response)
    const { profileObj: { name, email, imageUrl } } = response
    setName(name)
    setEmail(email)
    setProfilePic(imageUrl)
    setIsLoggedIn(true)
  }

  const failure = (response) =>{
    alert('Tente novamente')
  }


  return (
    <div style={{textAlign:'center'}}>
      <MenuSuperiorGeral />
      <MenuAtalhosGeral />
      <GoogleLogin
        clientId="752079920699-0ovm5mbbfddb5nrb1skh05nphffehtcs.apps.googleusercontent.com"
        buttonText="Autenticar com Google"
        onSuccess={responseGoogle}
        onFailure={failure}
        cookiePolicy={'single_host_origin'}
        style={{textAlign:'center'}}
      />
      <hr />
      {isLoggedIn ? 
        <div style={{textAlign:'center'}}>
        <img src={profilePic} alt="Foto do perfil" />
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
      </div> : ''}
      <hr />
      <RodapeSite />
    </div>
  );
}
export default Index