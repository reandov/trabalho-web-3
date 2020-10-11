import React, { useState, useEffect } from "react";

import "./Panel.css";

import { CardAlt } from "./CardAlt";
import { CardClean } from "./CardClean";

import api from "../../services/api";

export const Panel = ({ viagens }) => {
  const [caronas, setCaronas] = useState([]);

  useEffect(() => {
    async function loadCaronas() {
      const response = await api.get("/caronas");

      setCaronas(response.data);
    }

    loadCaronas();
  }, []);

  async function handleAddEscolha(data) {
    let response = await api.post("/caronas", data);
    response = await api.get("/caronas");
    setCaronas(response.data);
  }

  async function handleDestroyEscolha(id) {
    let response = await api.delete(`/caronas/${id}`);
    response = await api.get("/caronas");
    setCaronas(response.data);
  }

  return (
    <div className="panel-component">
      <div className="card-list">
        <div className="list-header">
          <h1>Caronas Disponíveis:</h1>
        </div>
        <ul>
          {viagens.map((viagem) => (
            <CardAlt
              key={viagem.id}
              viagem={viagem}
              handleAddEscolha={handleAddEscolha}
            />
          ))}
        </ul>
      </div>
      <div>
        <div className="card-list">
          <div className="list-header">
            <h1>Suas escolhas:</h1>
          </div>
          <ul>
            {caronas.map((carona) => (
              <CardClean
                key={carona.id}
                carona={carona}
                handleDestroyEscolha={handleDestroyEscolha}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
