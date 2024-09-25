import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import styled from 'styled-components'

import Header from '../components/Header'
import MainPage from '../components/MainPage'
import MovieSession from '../components/MovieSession'
import Seats from '../components/Seats'

function App() {


  return (

    <Container>
    <BrowserRouter>

      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}  />
        <Route path='/sessoes/:idFilme' element={<MovieSession/>}  />
        <Route path='/assentos/:idSessao' element={<Seats/>}  />

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