import Link from 'next/link';
import React from 'react';

const MenuAtalhosGeral = () => {
    return(
        <div style={{color:"white", margin:"auto", fontFamily:"ubuntu mono", textAlign:"center", backgroundColor:"gold", padding:"1px"}}>
      
        <button>
            <a href="/ufca">UFCA - Campus Brejo Santo</a>
        </button>

        <button>
            <a target="_blank" href="https://conexaofuturo.com.br/viveiro/">Conheça o viveiro Águas claras ⬈</a>
        </button>

        <button>
            <a target="_blank" href="https://conexaofuturo.com.br/fardamento/">Confecção de fardamento ⬈</a>
        </button>

        <button>
            <a href="http://www.raiolaser.16mb.com/moodle/">Cursos EAD ⬈</a>
        </button>

        


        




        </div>
    );
}

export default MenuAtalhosGeral;