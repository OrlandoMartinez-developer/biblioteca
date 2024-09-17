import { Link } from "react-router-dom";
import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  console.log("Books in store:", store.items); // Verificar si hay libros en el store

  return (
    <Layout>
      <div style={booksContainer}>
        {store.items.length > 0 ? (
          store.items.map((item) => (
            <Book key={item.id} item={item} />
          ))
        ) : (
          <p>No books available</p> // Muestra un mensaje si no hay libros
        )}
      </div>
    </Layout>
  );
}
