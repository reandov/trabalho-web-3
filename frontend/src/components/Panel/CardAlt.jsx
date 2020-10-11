import React from "react";

export const CardAlt = ({ viagem, handleAddEscolha }) => {
  async function handleAdd() {
    await handleAddEscolha({
      id: viagem.id,
      destino: viagem.destino,
      partida: viagem.partida,
      data: viagem.data,
      placa: viagem.placa,
      nome: viagem.nome,
    });
  }

  return (
    <li className="item">
      <div className="button-options">
        <button onClick={handleAdd}>Participar</button>
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
