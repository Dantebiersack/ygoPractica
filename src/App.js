import React, { useState, useEffect } from "react";
import ListaCartas from "./components/ListaCartas";

function App() {
  const [cartas, setCartas] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tipo, setTipo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=2000&offset=0")
      .then((res) => res.json())
      .then((data) => {
        setCartas(data.data || []);
        setFiltradas(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const resultados = cartas.filter((carta) => {
      const coincideNombre = carta.name.toLowerCase().includes(busqueda.toLowerCase());
      const coincideTipo = tipo === "" || carta.type.includes(tipo);
      return coincideNombre && coincideTipo;
    });
    setFiltradas(resultados);
  }, [busqueda, tipo, cartas]);

  return (
    <div className="container my-4">
      <h1 className="text-center">Cartas de Yu-Gi-Oh!</h1>

      {/* Filtros */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-control"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Todos los tipos</option>
            <option value="Monster">Monstruo</option>
            <option value="Spell">Hechizo</option>
            <option value="Trap">Trampa</option>
          </select>
        </div>
      </div>

      {/* Loader o lista */}
      {loading ? (
        <div className="text-center">Cargando cartas...</div>
      ) : (
        <ListaCartas cartas={filtradas} />
      )}
    </div>
  );
}

export default App;
