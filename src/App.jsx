import { useEffect, useState } from "react";
import "./App.css";
import { fetchImagesApi } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";

export default function App() {
  const [result, setResult] = useState([]);

  const [topik, setTopik] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = async (newImages) => {
    setTopik(newImages);
    setCurrentPage(1);
    setResult([]);
  };

  const addPage = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topik === "") {
      return;
    }

    async function fetchImages() {
      try {
        const newTopik = await fetchImagesApi(topik, currentPage);
        setResult((prevTopik) => [...prevTopik, ...newTopik]);
      } catch {}
    }

    fetchImages();
  }, [currentPage, topik]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {result.length > 0 && (
        <div>
          <h1>List</h1>
        </div>
      )}
    </>
  );
}
