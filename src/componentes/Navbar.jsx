import React from 'react';

const Navbar = () => {
  const total = 47850;
  const token = false;

  return (
    <nav>
      <button>🍕 Casita</button>
      {token ? (
        <>
          <button>🔓 Perfil</button>
          <button>🔒 Salir</button>
        </>
      ) : (
        <>
          <button>🔐 Entrar</button>
          <button>🔐 Registrar</button>
        </>
      )}
      <button>🛒 Total: {total.toLocaleString('es-ES')} $</button>
    </nav>
  );
};

export default Navbar;
