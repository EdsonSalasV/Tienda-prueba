import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'

const Detalles = () => {

  const navigate = useNavigate()

  const { dataFunkos, cart, setCart } = useContext(MyContext)

  const { id } = useParams()

  const addFunko = (id) => {
    setCart([...cart, addFunko])    
}

  const funkoDetalle = dataFunkos.find(item => item.id == id)

  
  return (
    <main className="m-2">
      <div className='d-flex flex-row'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={funkoDetalle.image} className="card-img-top" alt="img" />
          <div className="card-body">
            <h5 className="card-title">{funkoDetalle.nombre}</h5>
            <p className="card-text">{funkoDetalle.detalles}</p>
            <a className="btn btn-primary" onClick={()=>addFunko(funkoDetalle)}>Añadir al carrito</a>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Detalles
