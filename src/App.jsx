import { useEffect, useState, CSSProperties } from "react";
import { FadeLoader } from "react-spinners";
import "./App.css";
import { fetchImagesApi } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [topik, setTopik] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

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
        setError(false);
        setLoading(true);
        const newTopik = await fetchImagesApi(topik, currentPage);
        setResult((prevTopik) => [...prevTopik, ...newTopik]);
        setHasMore(newTopik.length > 0);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [currentPage, topik]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {result.length > 0 && <ImageGallery data={result} />}
      {loading && <FadeLoader color="#921198" />}
      {error && <ErrorMessage />}
      {!loading && hasMore && result.length > 0 && (
        <LoadMoreBtn onClick={addPage} />
      )}
    </>
  );
}
