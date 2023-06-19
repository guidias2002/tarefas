import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({ addTarefa }) {

  const [tarefa, setTarefa] = useState('')

  const criarTarefa = (e) => {
    e.preventDefault()
    if (!tarefa) return alert('Preencha o campo')

    const novaTarefa = {
      id: Math.random(),
      tarefa: tarefa,
      completo: false
    }
    addTarefa(novaTarefa)
    setTarefa('')
  }

  return (
    <form>
      <div className='container-form'>
        <TextField
          label="Ecreva uma tarefa"
          onChange={(e) => setTarefa(e.target.value)}
          value={tarefa}
          fullWidth
        />
        <Button type='submit' onClick={criarTarefa} variant="text">Enviar</Button>
      </div>
    </form>
  )
}
