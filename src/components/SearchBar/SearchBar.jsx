import toast, { Toaster } from "react-hot-toast";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topik"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-center" />
      </form>
    </header>
  );
}
