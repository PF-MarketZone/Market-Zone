import MainButton from './components/Buttons/MainButton'
import Detail from './View/Detail/Detail'
import { Routes, Route } from 'react-router-dom';
//import './App.css'
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
      display: block;
      margin: 0;
      padding: 0;
  }
`;


function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      <div>
        <Routes>
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
        <div>
          <MainButton text="Ir a Detalle" route="/detail/1" />
        </div>
      </div>
    </>
  )
}

export default App
