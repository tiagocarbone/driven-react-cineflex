import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import styled from 'styled-components'

import Header from '../components/Header'
import MainPage from '../components/MainPage'
import MovieSession from '../components/MovieSession'
import Seats from '../components/Seats'
import Succes from '../components/Succes'
import { useState } from 'react'

function App() {

  const [filmTitle, setFilmTitle] = useState("")
  const [filmDate, setFilmDate] = useState("")
  const [filmHour, setFilmHour] = useState("")
  const [seatNumbers, setSeatNumbers] = useState([])
  const [clientName, setClientName] = useState("")
  const [clientCPF, setClientCPF] = useState("")

  /*

    Nome e cpf do comprador

*/



  return (

    <Container>
    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}  />
        <Route path='/sessoes/:idFilme' element={<MovieSession  setFilmTitle={setFilmTitle} filmTitle={filmTitle} setFilmDate={setFilmDate}  setFilmHour={setFilmHour} />}  />
        <Route path='/assentos/:idSessao' element={<Seats setSeatNumbers={setSeatNumbers} seatNumbers={seatNumbers}  setClientName={setClientName}  setClientCPF={setClientCPF} />}  />
        <Route path='/sucesso' element={<Succes filmTitle={filmTitle} filmDate={filmDate}  filmHour={filmHour} setSeatNumbers={setSeatNumbers} seatNumbers={seatNumbers} clientName={clientName} clientCPF={clientCPF} />}  />
      </Routes>



    </BrowserRouter>
    </Container>
  )
}

export default App



const Container = styled.div`
	max-width: 375px;

  margin: auto;
`;