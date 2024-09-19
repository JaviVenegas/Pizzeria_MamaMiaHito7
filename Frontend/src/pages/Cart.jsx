import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { DataPizzaContext } from '../contexts/DataPizzaContext';
import { UserContext } from '../contexts/UserContext';


const Cart = () => { 

    const { cart, addCart, removeFromCart, deletePizza, total } = useContext(CartContext); //context has all the formulas we are going to use
    const { dataPizza } = useContext(DataPizzaContext); //context: use dataPizza to read pizza info
    const { user } = useContext(UserContext); //here we call token from userContext  



    return (
        <>
            <div>
                <h2>Carrito de Compras</h2>
            </div>
            <div>
                <h4>Disponibles para agregar:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {dataPizza.map(pizza => (
                        <div key={pizza.id} className="card" style={{ width: '18rem' }}>
                            <img 
                                src={pizza.img} 
                                alt={pizza.name} 
                                className="card-img-top rounded mx-auto d-block" 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">Precio: ${pizza.price.toLocaleString()}</p>
                                <button 
                                    className="btn btn-success" 
                                    onClick={() => addCart({ ...pizza, count: 1 })}
                                >
                                    Añadir Pizza
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="pt-2">Pizzas compradas:</h4>
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                style={{ width: '50px', height: '50px', marginRight: '10px' }} 
                            />
                            {item.name} - {item.count} x ${item.price.toLocaleString()} = ${ (item.count * item.price).toLocaleString()}
                            <button 
                                className="btn btn-secondary btn-sm mx-2" 
                                onClick={() => addCart({ ...item, count: 1 })}
                            >
                                +
                            </button>
                            <button 
                                className="btn btn-secondary btn-sm mx-2" 
                                onClick={() => removeFromCart(item.id)}
                            >
                                -
                            </button>
                            <button 
                                className="btn btn-danger btn-sm mx-2" 
                                onClick={() => deletePizza(item.id)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="pb-4 text-center">
                    <h5>Monto Total: ${total.toLocaleString()}</h5>
                    <button className="btn btn-primary" disabled= {!user.token}>Comprar</button>
                </div>
            </div>
        </>
    );
};

export default Cart;
