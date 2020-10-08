import React, { useState, useEffect } from "react";

import api from "../../services/api";

import "./Application.css";

export const Application = () => {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    async function loadViagens() {
      const response = await api.get("/viagens");

      setViagens(response.data);
    }

    loadViagens();
  }, []);

  return (
    <div>
      <div>
        <h1>Teste!</h1>
      </div>
    </div>
  );
};
