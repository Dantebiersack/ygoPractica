import Carta from "./Carta";

export default function ListaCartas({ cartas }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {cartas.map((carta) => (
        <Carta key={carta.id} carta={carta} />
      ))}
    </div>
  );
}
