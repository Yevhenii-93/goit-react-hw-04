import css from "./ImageCard.module.css";

export default function ImageCard({ data, onClick }) {
  return (
    <li className={css.imageItem} onClick={onClick}>
      <img
        className={css.imageThumb}
        src={data.urls.small}
        alt={data.description}
      ></img>
    </li>
  );
}
