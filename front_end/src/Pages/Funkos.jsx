import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext'


const Funkos = ({ funkos }) => {

    const { cart, setCart, dataFunkos, setDataFunkos } = useContext(MyContext)

    const addFunko = (id) => {

        const funkoRepeat = cart.find((item) => item.id === funkos.id);

        if (funkoRepeat) {
            setCart(cart.map((item) => (item.id === funkos.id ? {
                ...funkos, quanty: funkoRepeat.quanty + 1
            } : item)))
        }else{
            setCart([...cart, funkos])
        }        
    };


    const navigate = useNavigate()

    const details = () => {
        navigate(`detalles/${funkos.id}`)
    };



    return (
        <main className="m-2" key={funkos.id}>
            <div className=" container d-flex flex-row">
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src={funkos.image}
                        className="card-img-top"
                        alt={funkos.nombre}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{funkos.nombre}</h5>
                        <h4 className="text-primary">${funkos.precio}</h4>
                        <p className="card-text">{funkos.detalles}</p>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" onClick={details}>
                                Ver Detalles
                            </button>
                            <button
                                className="btn btn-success"
                                onClick={() => addFunko(funkos.id)}
                            >
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}




export default Funkos
