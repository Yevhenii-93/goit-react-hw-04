import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ data }) {
  return (
    <ul>
      {data.map((data) => (
        <ImageCard key={data.id} data={data} />
      ))}
    </ul>
  );
}
