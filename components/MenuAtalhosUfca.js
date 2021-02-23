import Link from 'next/link';
import React from 'react';

const MenuAtalhosUfca = () => {
    return(
        <div style={{color:"white", margin:"auto", fontFamily:"ubuntu mono", textAlign:"center", backgroundColor:"gold", padding:"1px"}}>
      
        <button>
            <a href="/">Página Inicial</a>
        </button>

        <button>
            <a href="/ufca/inventario">Inventário</a>
        </button>

        <button>
            <a target="_blank" href="https://conexaofuturo.com.br/ifeadm/">Relatórios Campus Brejo Santo ⬈</a>
        </button>

        <button>
            <a target="_blank" href="http://ifeadm.16mb.com/">Site IFEADM ⬈</a>
        </button>






        </div>
    );
}

export default MenuAtalhosUfca;