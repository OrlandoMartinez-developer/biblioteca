import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import styles from '../styles/Create.module.css'; 

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.container}>
          <div className={styles.title}>Title</div>
          <input
            className={styles.input}
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Author</div>
          <input
            className={styles.input}
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          {cover && <img src={cover} className={styles.coverImage} />}
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Intro</div>
          <input
            className={styles.input}
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Completed</div>
          <input
            className={styles.input}
            type="checkbox"
            name="completed"
            onChange={handleChange}
            checked={completed}
          />
        </div>

        <div className={styles.container}>
          <div className={styles.title}>Review</div>
          <input
            className={styles.input}
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <button
          type="submit"
          className={styles.submitButton}
        >
          Register Book
        </button>
      </form>
    </Layout>
  );
}
