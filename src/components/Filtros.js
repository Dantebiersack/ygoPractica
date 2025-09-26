export default function Filtros({ busqueda, setBusqueda, tipo, setTipo }) {
  return (
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
  );
}
