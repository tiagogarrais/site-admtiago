import Link from 'next/link';
import React from 'react';
import { ButtonToggle } from 'reactstrap';

const MenuAtalhos = () => {
    return(
        <div style={{color:"white", margin:"auto", fontFamily:"ubuntu mono", textAlign:"center", backgroundColor:"gold", padding:"1px"}}>
      
        <ButtonToggle color="black">
            <a href="/">Página Inicial</a>
        </ButtonToggle>{' '}

        <ButtonToggle color="black">
            <a href="/inventario">Inventário</a>
        </ButtonToggle>{' '}


        </div>
    );
}

export default MenuAtalhos;