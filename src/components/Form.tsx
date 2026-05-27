import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, BookFormData } from "../types/booksSchema"
import "../styles/Form.css";
import { Link } from "react-router-dom"

const Form = () => {
    const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<BookFormData>({
  resolver: zodResolver(bookSchema) as any,
});

  const onSubmit = async (data: BookFormData) => {
    try {
      const res = await fetch("https://book-backend-6rn3.onrender.com/add-book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.error("Błąd API");
        return;
      }
      alert("Książka została poprawnie dodana")
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
     <div className="form-container">
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Dodaj nową książkę</h2>

      <div className="input-grid">
        <div className="fancy-input">
          <input {...register("title")} placeholder=" " />
          <label>Tytuł książki</label>
          <p style={{color:"red"}}>{errors.title?.message}</p>
        </div>

        <div className="fancy-input">
          <input {...register("author")} placeholder=" " />
          <label>Autor</label>
          <p style={{color:"red"}}>{errors.author?.message}</p>
        </div>

        <div className="fancy-input">
          <input {...register("isbn")} placeholder=" " />
          <label>ISBN</label>
          <p style={{color:"red"}}>{errors.isbn?.message}</p>
        </div>

        <div className="fancy-input">
          <input {...register("number_of_pages")} />
          <label>Liczba stron</label>
          <p style={{color:"red"}}>{errors.number_of_pages?.message}</p>
        </div>

        <div className="fancy-input">
          <input {...register("rating")} />
          <label>Ocena (1-5)</label>
          <p style={{color:"red"}}>{errors.rating?.message}</p>
        </div>
      </div>

      <button
        style={{ padding: "20px", marginTop: "20px" }}
        type="submit"
        className="submit-btn"
      >
        Wyślij formularz
      </button>
    </form>
  </div>
  <Link to="/">Wróć</Link>
  </>
  );
};

export default Form;
