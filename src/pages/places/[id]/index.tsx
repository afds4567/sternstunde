import { useRouter } from "next/router";

export default function PlaceDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Place {id} Detail</h1>;
}
