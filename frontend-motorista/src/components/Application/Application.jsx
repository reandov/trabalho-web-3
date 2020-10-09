import React, { useState, useEffect } from "react";

import { Header } from "../Header/Header";
import { Form } from "../Form/Form";
import { Dashboard } from "../Dashboard/Dashboard";
import { Footer } from "../Footer/Footer";

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
    <div className="page-container">
      <div className="content-wrap">
        <div>
          <Header />
        </div>
        <div className="content-container">
          <div>
            <Form viagens={viagens} setViagens={setViagens} api={api} />
          </div>
          <div>
            <Dashboard viagens={viagens} api={api} setViagens={setViagens} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
