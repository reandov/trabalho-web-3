import React from "react";

export const CardClean = ({ carona }) => {
  return (
    <li className="item">
      <header>
        <div className="info">
          <strong>{carona.destino}</strong>
          <p>ID da Carona: {carona.id}</p>
          <p>Placa do veículo: {carona.placa}</p>
          <p>Nome do(a) motorista: {carona.nome}</p>
          <p>Data da Carona: {carona.data}</p>
          <p>Local de Partida: {carona.partida}</p>
        </div>
      </header>
    </li>
  );
};
