import React from "react";
import { useState } from "react";

import "./Form.css";

export const Form = ({ viagens, setViagens, api }) => {
  const [id, setID] = useState("");
  const [destino, setDestino] = useState("");
  const [partida, setPartida] = useState("");
  const [data, setData] = useState("");
  const [placa, setPlaca] = useState("");
  const [nome, setNome] = useState("");

  async function handleAddEvento(data) {
    if (data.id === "") {
      const response = await api.post("/viagens", data);
      setViagens([...viagens, response.data]);
    } else {
      let response = await api.put(`/viagens/${data.id}`, data);
      response = await api.get("/viagens");
      setViagens(response.data);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await handleAddEvento({
      id,
      destino,
      partida,
      data,
      placa,
      nome,
    });

    setID("");
    setDestino("");
    setPartida("");
    setData("");
    setPlaca("");
    setNome("");
  }

  return (
    <div className="form-component">
      <h1>Marcar Viagem</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="id">ID da Viagem (em caso de alteração)</label>
          <input
            type="number"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="destino">Destino da Viagem</label>
          <input
            required
            type="text"
            name="destino"
            id="destino"
            value={destino}
            maxLength="32"
            onChange={(e) => setDestino(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="partida">Partida da Viagem</label>
          <input
            required
            type="text"
            name="partida"
            id="partida"
            value={partida}
            maxLength="32"
            onChange={(e) => setPartida(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="data">Data da Viagem</label>
          <input
            required
            type="date"
            name="data"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="placa">Placa da Viagem</label>
          <input
            required
            type="text"
            name="placa"
            id="placa"
            value={placa}
            maxLength="8"
            onChange={(e) => setPlaca(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="nome">Nome do(a) Motorista</label>
          <input
            required
            type="text"
            name="nome"
            id="nome"
            value={nome}
            maxLength="32"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <button type="submit">Cadastrar Viagem</button>
      </form>
    </div>
  );
};
