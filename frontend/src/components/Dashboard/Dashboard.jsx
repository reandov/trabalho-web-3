import React from "react";

import { Card } from "../Card/Card";

import "./Dashboard.css";

export const Dashboard = ({ viagens, api, setViagens }) => {
  async function handleDestroyViagem(id) {
    let response = await api.delete(`/viagens/${id}`);
    response = await api.get("/viagens");
    setViagens(response.data);
  }

  return (
    <div className="card-list">
      <div className="list-header">
        <h1>Suas caronas:</h1>
      </div>
      <ul>
        {viagens.map((viagem) => (
          <Card
            key={viagem.id}
            viagem={viagem}
            handleDestroyViagem={handleDestroyViagem}
          />
        ))}
      </ul>
    </div>
  );
};
