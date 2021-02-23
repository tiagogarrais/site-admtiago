import React from 'react';


class InventarioComponente extends React.Component {

    state = {}

    handleSubmit = e => {
        console.log(this.state)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

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
                    onSubmit={this.handleSubmit}
                    style={{ textAlign: "center" }}
                >
                    <fieldset>
                        <legend style={{ fontSize: "0.9rem" }}>Dados do bem</legend>
                        <label>
                            Informe o tombo do bem:
                                <input
                                type="number"
                                name="tombo"
                                placeholder=" Apenas números"
                                onChange={this.handleChange}
                                value={this.state.tombo}
                            />
                        </label>
                        <button tipe="submit">Pesquisar</button>
                        <button tipe="reset">Limpar dados</button>
                    </fieldset>
                </form>

                <div id="resultado" style={{ textAlign: "center", backgroundColor: "white", color: "black" }}>
                    <br />...
                    <br />Aguardando dados
                    <br />...
            </div>
            </div>
        );
    }
}

export default InventarioComponente;