import { useRouter } from "next/router";


export default function ArtPieceDetail () {
    const router = useRouter();
    const { slug } = router.query;
    const currentArtPiece = artPieces.indexOf(currentArtPiece);

    if (!currentArtPiece) {
        return;
    }
    return (
        <
    )
}