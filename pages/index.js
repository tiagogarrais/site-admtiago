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

  function responseGoogle(response) {
    const { profileObj: { name, email, imageUrl } } = response;
    setName(name);
    setEmail(email);
    setProfilePic(imageUrl);
    setIsLoggedIn(true);
  }

  function manterUsuarioLogado(){
    
  }

  const failure = (response) => {
    alert('Tente novamente')
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <MenuSuperiorGeral />
      <MenuAtalhosGeral />
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
          <img src={profilePic} alt="Foto do perfil" />
          <p>Nome: {name}</p>
          <p>E-mail: {email}</p>
        </div>
        : ''}
      <hr />

      {(isLoggedIn===true) ?
      <div>
      {manterUsuarioLogado()}
      Usuário logado, criar essa função para guardar a informação
      </div>
      : ''}



        // Criar uma sessão para o usuário se manter logado no site <br/>
        //Implementar remoção do botão do GoogleLogin quando o usuário logar no site

      <RodapeSite />
    </div>
  );
}

export default Index