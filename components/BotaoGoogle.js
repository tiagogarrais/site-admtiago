import GoogleLogin from 'react-google-login'
import React, { useState } from "react";


function BotaoGoogle() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  //const [profilePic, setProfilePic] = useState()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function responseGoogle(response) {
    const { profileObj: { name, email, imageUrl } } = response;
    setName(name);
    setEmail(email);
    //setProfilePic(imageUrl);
    setIsLoggedIn(true);
  }

  const failure = (response) => {
    alert('Login não concluído, tente novamente')
  }


  return (
    <div
      style={{ textAlign: 'center' }}>
      <hr />
      <GoogleLogin
        clientId="752079920699-0ovm5mbbfddb5nrb1skh05nphffehtcs.apps.googleusercontent.com"
        buttonText="Autenticar com Google"
        onSuccess={responseGoogle}
        onFailure={failure}
        cookiePolicy={'single_host_origin'}
        style={{ textAlign: 'center' }}
      />
      <hr />
      {isLoggedIn ?
        //Mostrar na tela, informações do usuário do site
        <div style={{ textAlign: 'center' }}>
          {/* <img src={profilePic} alt="Foto do perfil" /> */}
          <p>Nome: {name}</p>
          <p>E-mail: {email}</p>
        </div>
        : ''}
      <hr />

    </div>
  );
}

export default BotaoGoogle