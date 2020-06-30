import React from 'react';
import './styles/styles.scss';
import Topbar from './Topbar'
import Curso from './Curso'

const cursos = [
  {
    "title":"React desde cero",
    "image":"https://edteam-media.s3.amazonaws.com/courses/original/dc8c97f5-9026-443b-b1c9-1e9dfe29712c.jpg",
    "price":20,
    "profesor":"alberto"
  }, {
    "title":"React HTML cero",
    "image":"https://edteam-media.s3.amazonaws.com/courses/original/7fd29763-c6b4-4a98-951b-65a5b26b8aaa.png",
    "price":20,
    "profesor":"Yessica Vargas"
  }, {
    "title":"React CSS cero",
    "image":"https://edteam-media.s3.amazonaws.com/courses/original/427ef383-8ee8-4efb-9dff-cca05bf8dafa.png",
    "price":20,
    "profesor":"Katy Jazmin"
  }, {
    "title":"React cerp cero",
    "image":"https://edteam-media.s3.amazonaws.com/courses/original/017af6fe-323f-497f-865d-da4d54555202.png",
    "price":20,
    "profesor":"Maria Avila"
  }]


const App = () => (
  <>
    <Topbar />
    <div className="ed-grid m-grid-4">
      {
        cursos.map( curso => <Curso title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor}/> )
      }
    </div>
  </>
)
export default App;
