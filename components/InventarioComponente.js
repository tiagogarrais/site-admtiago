import React, { useState, FormEvent } from 'react';
import axios from 'axios'


function InventarioComponente() {
    const [tombo, setTombo] = useState('');

    function handleEnviarTombo(event){
        event.preventDefault()
        axios.post('../api/inventario', {tombo: tombo})
    }


    return (
        <div style={{
            color: "black",
            margin: "auto",
            fontFamily: "monospace",
            textAlign: "center",
            backgroundColor: "white",
            padding: "10pt"
        }}>

            <h3 style={{ textAlign: "center", fontSize: "22pt", color: "black" }} >Inventário do Instituto de Formação de Educadores</h3>


            <form
                style={{ 
                    textAlign: 'center' 
                }}

                onSubmit={handleEnviarTombo}
                method='post'
                
            >

                <fieldset>
                    <legend style={{ fontSize: "0.9rem" }}>Dados do bem</legend>
                    <label>
                        Informe o tombo do bem:
                        <input
                            type="number"
                            name="tombo"
                            value={tombo}
                            placeholder="Apenas números"
                            onChange={e => setTombo(e.target.value)}
                        />
                    </label>
                    <button tipe="submit">Pesquisar</button>
                </fieldset>
            </form>


        </div>
    )
}
export default InventarioComponente;