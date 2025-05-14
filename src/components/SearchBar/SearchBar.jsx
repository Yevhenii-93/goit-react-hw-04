import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.elements.topik.value.trim() === "") {
      toast.error("fill in the field");
    }

    onSubmit(event.target.elements.topik.value);

    event.target.reset();
  };

  return (
    <header className={css.searchHeader}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          name="topik"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchButton} type="submit">
          Search
        </button>
        <Toaster position="top-center" />
      </form>
    </header>
  );
}
