export default function ImageCard({ data, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={data.urls.small} alt={data.description}></img>
    </li>
  );
}
