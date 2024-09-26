import React from 'react';

function CardPizza({ name, price, ingredientes, img }) {
  return (
    <div className="card">
      <img src={img} alt={`${name}`} />
      <h2>{name}</h2>
      <p>Precio: ${price.toLocaleString('es-ES')}</p>
      <ul>
        {ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>
      <button>Ver más</button>
      <button>Agregar</button>
    </div>
  );
}

export default CardPizza;
