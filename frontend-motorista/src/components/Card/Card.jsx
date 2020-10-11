import React from "react";

import "./Card.css";

export const Card = ({ viagem, handleDestroyViagem }) => {
  async function handleDelete() {
    await handleDestroyViagem(viagem.id);
  }

  return (
    <li className="item">
      <div className="button-options">
        <button onClick={handleDelete}>Excluir</button>
      </div>
      <header>
        <div className="info">
          <strong>{viagem.destino}</strong>
          <p>ID da Viagem: {viagem.id}</p>
          <p>Placa do veículo: {viagem.placa}</p>
          <p>Nome do(a) motorista: {viagem.nome}</p>
          <p>Data da viagem: {viagem.data}</p>
          <p>Local de Partida: {viagem.partida}</p>
        </div>
      </header>
    </li>
  );
};
