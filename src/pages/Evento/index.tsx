import React, { useEffect, useState } from 'react'
import api from '../../servicos/api'
import { useHistory } from 'react-router-dom'
import { CadastroEventos, TodosEventos } from './estilo'

interface CadastroEventos {
Eventos:string;
  nome: string;
  local: string;
  diasemana: string;
  horario: string;
}

interface TodosEventos {
  Eventos:string;
  nome: string;
  local: string;
  diasemana: string;
  horario: string;
}


const Evento: React.FC = () => {
  const history = useHistory()
  const [Eventos, setEventos] = useState<TodosEventos[]>([])
  const [nome, setNome] = useState('')
  const [local, setLocal] = useState('')
  const [diasemana, setDiasemana] = useState('')
  const [horario, setHorario] = useState('')

  useEffect(() => {
    buscarTodosEventos()
  }, [])

  async function apagarEvento(nome: string) {
    await api.delete(`/Eventos/${nome}`)
    buscarTodosEventos()
  }

  async function buscarTodosEventos() {
    const todosEventos = await api.get('/Eventos')
    setEventos(todosEventos.data)
  }

  async function adicionarEvento(event: any) {
    event.preventDefault()
    console.log(`Nome: ${nome}  local: ${local}  Diasemana: ${diasemana} horario: ${horario}`)

    if (!nome.trim() || !local.trim() || !diasemana.trim() || !horario.trim())  {
      return
    }

    const novoevento = await api.post('/eventos', {
      nome,
      local,
      diasemana,
      horario
    })

    const { data } = novoevento

    setEventos([...Eventos, data])
  }
  return (
    <CadastroEventos>
      <form onSubmit={adicionarEvento}>
        <input
          type='text'
          name='nome'
          onChange={event => setNome(event.target.value)}
          placeholder='Nome do Evento: ' />
          </input>
        <input
          type='text'
          name='local'
          onChange={event => setLocal(event.target.value)}
          placeholder='Local: ' /> </input>

        <input
          type='text'
          name='diasemana'
          onChange={event => setDiasemana(event.target.value)}
          placeholder=': ' /> </input>
          <input
          type='text'
          name='horario'
          onChange={event => setHorario(event.target.value)}
          placeholder='Horario: ' />
        </input>

        <button type='submit'>Cadastrar</button>
      </form>

      <TodosEventos>
        {Evento.map(Eventos => {
            return (
                <div>
                  <span>{`Nome: ${Eventos.nome}`}</span>
                  <span>{`Local: ${Eventos.local}`}</span>
                  <span>{`Diasemana: ${Eventos.diasemana}`}</span>
                  <span>{`Horario: ${Eventos.horario}`}</span>
                </div>
                <div>

                    <button onClick={() => {
                    apagarEvento(Eventos.nome)
                  }}>Remove</button>
                </div>
              </div>
              <button onClick={() => {
              }}>like</button>
            </div>
          </div>
            )
          })}
      </TodosEventos>
    </CadastroEventos>
  )
}

export default Evento
