import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { Header } from "../Header/Header";
import { Form } from "../Form/Form";
import { Dashboard } from "../Dashboard/Dashboard";
import { Panel } from "../Panel/Panel";
import { Footer } from "../Footer/Footer";

import api from "../../services/api";

import "./Application.css";

export const Application = () => {
  const [viagens, setViagens] = useState([]);
  const [page, setPage] = useState("passageiro");

  const updateRoute = () => {
    if (page === "passageiro") {
      setPage("motorista");
    } else {
      setPage("passageiro");
    }
  };

  useEffect(() => {
    async function loadViagens() {
      const response = await api.get("/viagens");

      setViagens(response.data);
    }

    loadViagens();
  }, []);

  return (
    <BrowserRouter>
      <div className="page-container">
        <div className="content-wrap">
          <div>
            <Header />
            <Link to={`/${page}`} className="route-link">
              <button onClick={updateRoute} className="route-button">
                &#129068; Ir para {`${page}`}
              </button>
            </Link>
          </div>
          <Switch>
            <Route path="/motorista" exact>
              <div className="content-container">
                <div>
                  <Form viagens={viagens} setViagens={setViagens} api={api} />
                </div>
                <div>
                  <Dashboard
                    viagens={viagens}
                    api={api}
                    setViagens={setViagens}
                  />
                </div>
              </div>
            </Route>
            <Route path="/passageiro">
              <Panel viagens={viagens} setViagens={setViagens} />
            </Route>
          </Switch>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
