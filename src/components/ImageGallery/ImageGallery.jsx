import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ data, onOpenModal }) {
  return (
    <ul>
      {data.map((data) => (
        <ImageCard key={data.id} data={data} onClick={onOpenModal} />
      ))}
    </ul>
  );
}
