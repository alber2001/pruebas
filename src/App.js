import React from 'react';
import './styles/styles.scss';
import Topbar from './Topbar'
import Curso from './Curso'

const App = () => (
  <>
    <Topbar /> 
    <div className="ed-grid m-grid-3">
    <Curso/>   
    <Curso/>
    <Curso/>
    <Curso/>   
    <Curso/>
    <Curso/>
    </div>
  </>
)
export default App;
