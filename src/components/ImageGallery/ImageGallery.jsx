import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ data, onOpenModal }) {
  return (
    <ul className={css.list}>
      {data.map((data) => (
        <ImageCard key={data.id} data={data} onClick={onOpenModal} />
      ))}
    </ul>
  );
}
