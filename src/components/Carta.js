export default function Carta({ carta }) {
  return (
    <div className="card m-2 bg-dark text-light" style={{ width: "18rem" }}>
      <img
        src={carta.card_images?.[0]?.image_url_small}
        className="card-img-top"
        alt={carta.name}
      />
      <div className="card-body">
        <h5 className="card-title">{carta.name}</h5>
        <p className="card-text">{carta.desc?.slice(0, 100)}...</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Tipo: {carta.type}</li>
          <li className="list-group-item">Raza: {carta.race}</li>
          {carta.atk && (
            <li className="list-group-item">
              ATK: {carta.atk} / DEF: {carta.def}
            </li>
          )}
          {carta.level && (
            <li className="list-group-item">Nivel: {carta.level}</li>
          )}
        </ul>
      </div>
    </div>
  );
}
