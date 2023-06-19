import React, { useState } from 'react'
import Form from '../../components/Form'
import { List } from '@mui/material'
import ItemTarefa from '../../components/ItemTarefa'



export default function Home() {

    const [listaTarefa, setListaTarefa] = useState([])

    const addTarefa = (tarefa) => {
        setListaTarefa([...listaTarefa, tarefa])
    }

    const removeTarefa = (id) => {
        const novaLista = listaTarefa.filter(tarefa => tarefa.id !== id)
        setListaTarefa(novaLista)
    }

    return (
        <div className='container'>
            <div>
                <Form addTarefa={addTarefa} />
            </div>
            <List>
                {listaTarefa.map((tarefa) => (
                    <ItemTarefa tarefa={tarefa} removeTarefa={removeTarefa} />
                ))}
            </List>
        </div>
    )
}
