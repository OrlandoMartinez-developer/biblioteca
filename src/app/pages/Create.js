import { useState, useMemo } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    cover: "",
    intro: "",
    completed: false,
    review: "",
  });

  const store = useAppContext();

  const inputStyles = useMemo(() => ({
    formContainer: {
      width: "400px",
      margin: "0 auto",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "15px 0",
    },
    title: {
      fontSize: "16px",
      textAlign: "left",
    },
    input: {
      padding: "10px",
      borderRadius: "5px",
      fontSize: "16px",
    },
  }), []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newBook = {
      ...formData,
      id: crypto.randomUUID(),
    };
    store.createItem(newBook);
  }

  function handleOnChangeFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setFormData((prevData) => ({
      ...prevData,
      cover: reader.result.toString(),
    }));
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
        {["title", "author", "intro", "review"].map((field) => (
          <div key={field} style={inputStyles.container}>
            <div style={inputStyles.title}>{field.charAt(0).toUpperCase() + field.slice(1)}</div>
            <input
              style={inputStyles.input}
              type="text"
              name={field}
              onChange={handleChange}
              value={formData[field]}
            />
          </div>
        ))}

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          {formData.cover && <img src={formData.cover} width="200" alt="Book cover" />}
        </div>

        <div style={inputStyles.container}>
          <div style={inputStyles.title}>Completed</div>
          <input
            style={inputStyles.input}
            type="checkbox"
            name="completed"
            onChange={handleChange}
            checked={formData.completed}
          />
        </div>

        <input
          type="submit"
          value="Register book"
          style={{
            padding: "15px 20px",
            minWidth: "200px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#1e9638",
            color: "white",
            fontWeight: "bolder",
            fontSize: "18px",
          }}
        />
      </form>
    </Layout>
  );
}

