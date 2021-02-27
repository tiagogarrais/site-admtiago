import React, { useState, FormEvent } from 'react';
import axios from 'axios'


function InventarioComponente() {
    const [tombo, setTombo] = useState('');

    function EnviarTombo(event) {

        event.preventDefault()
        axios.post('../api/enviarInventario', { tombo: tombo })
    }

    function MostrarResultado(event) {
        event.preventDefault()
        document.getElementById('resultado').innerHTML = `<p><strong>Tombo nº  ${tombo} enviado.</strong></p>`
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

                onSubmit={EnviarTombo}
                method='post'
                onSubmitCapture={MostrarResultado}
            >

                <fieldset>
                    <legend style={{ fontSize: "0.9rem" }}>Dados do bem</legend>

                    <label>
                        Informe o tombo do bem:
                        <input
                            type="number"
                            value={tombo}
                            placeholder="Apenas números"
                            onChange={e => setTombo(e.target.value)}
                        />
                    </label>

                    <button tipe="submit">Enviar</button>
                </fieldset>
            </form>

            <div id='resultado'>

            </div>


        </div>
    )
}
export default InventarioComponente;