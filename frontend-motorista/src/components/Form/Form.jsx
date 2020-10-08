import React from "react";
import { useState } from "react";

import "./Form.css";

export const Form = ({ api }) => {
  const [id, setID] = useState("");
  const [destino, setDestino] = useState("");
  const [partida, setPartida] = useState("");
  const [data, setData] = useState("");
  const [placa, setPlaca] = useState("");
  const [nome, setNome] = useState("");

  return (
    <div>
      <h1>Marcar Viagem</h1>
      <form>
        <div>
          <label htmlFor="id">ID da Viagem (em caso de alteração)</label>
          <input
            type="number"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setID(e.target.value)}
          />
        </div>
        <div>
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
      </form>
    </div>
  );
};
