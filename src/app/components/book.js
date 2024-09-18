import { Link } from "react-router-dom";

export default function Book({ item }) {
  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  // Imagen por defecto si no hay portada
  const defaultCover = "https://via.placeholder.com/200";

  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img
          src={item.cover || defaultCover} // Usar imagen por defecto si no hay portada
          width="200"
          alt={item.title}
        />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}