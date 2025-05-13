export default function ImageCard({ data }) {
  return (
    <li>
      <img src={data.urls.small} alt={data.description}></img>
    </li>
  );
}
