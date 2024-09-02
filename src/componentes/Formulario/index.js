import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = (props) => {

    // const times = [
    //     'Programação',
    //     'Front-End',
    //     'Data Science',
    //     'Devops',
    //     'Ux e Design',
    //     'Mobile',
    //     'Inovação e Gestão'
    // ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault()
        // console.log('Submit: ', nome, cargo, imagem, time)
        props.aoColaboradorCadastrado({nome, cargo, imagem, time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                />
                <CampoTexto
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}  
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                />
                <CampoTexto 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                    obrigatorio={true}
                    label="Image" 
                    placeholder="Digite o endereço da imagem" 
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;