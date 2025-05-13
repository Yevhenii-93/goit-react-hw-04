export default function SearchBar({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();

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
      </form>
    </header>
  );
}
