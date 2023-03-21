import Image from "next/image";
import { useRouter } from "next/router";

export default function ArtPieceDetails({
  imageSource,
  name,
  artist,
  year,
  genre,
  dimensions,
}) {
  const router = useRouter();
  return (
    <div>
      <button type="button" aria-label="back to art pieces list" onClick={null}>
        Back
      </button>
      <h1>Title: {name}</h1>
      <Image
        src={imageSource}
        alt={name}
        width={dimensions.width}
        height={dimensions.height}
      />
      <ul>
        <li>Artist: {artist}</li>
        <li>Year: {year}</li>
        <li>Genre: {genre}</li>
      </ul>
    </div>
  );
}
