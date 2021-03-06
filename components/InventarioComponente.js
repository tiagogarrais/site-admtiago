import React, { useState, FormEvent } from 'react';
import axios from 'axios'

function InventarioComponente() {
    const [tombo, setTombo] = useState('')
    const [proprietario, setProprietario] = useState('')

    function EnviarTombo(event) {
        event.preventDefault()
        axios.post('../api/enviarInventario', { tombo: tombo, proprietario: proprietario })
        document.getElementById('resultado').innerHTML = `<p><strong>Bem pertencente ao órgão ${proprietario}, tombo nº  ${tombo} enviado.</strong></p>`
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

            <h3 style={{
                textAlign: "center",
                fontSize: "22pt",
                color: "black"
            }}>
                Inventário do Instituto de Formação de Educadores
            </h3>


            <form
                style={{
                    textAlign: 'center'
                }}

                onSubmit={EnviarTombo}
                method='post'
            >

                <fieldset>
                    <legend style={{ fontSize: "0.9rem" }}>Dados do bem</legend>

                    <label>
                        Informe o tombo do bem:
                        <input
                            type="number"
                            value={tombo}
                            placeholder="Informar apenas números"
                            onChange={e => setTombo(e.target.value)}
                        />
                    </label>

                    <br />

                    <label> Informe o proprietário do bem:
                        <select 
                            value={proprietario} 
                            onChange={p => setProprietario(p.target.value)}>
                            <option id='NAO'    value=''>                               Selecione um item da lista      </option>
                            <option id='ufca'   value='Universidade Federal do Cariri'> Universidade Federal do Cariri  </option>
                            <option id='ufc'    value='Universidade Federal do Ceará'>  Universidade Federal do Ceará   </option>
                            <option id='pbs'    value='Prefeitura de Brejo Santo'>      Prefeitura de Brejo Santo       </option>
                            <option id='gec'    value='Governo do Estado do Ceará'>     Governo do Estado do Ceará      </option>
                        </select>
                    </label>

                    <br />


                    <button tipe="submit">Enviar</button>
                </fieldset>
            </form>

            <div id='resultado'>

            </div>

        </div>
    )
}
export default InventarioComponente;