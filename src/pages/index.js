import useSWR from "swr";

const URL = "https://example-apis.vercel.app/api/art";

export default function SpotlightPage() {
  const { data, error, isLoading } = useSWR(URL);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <h1>Hello {data[0].artist}</h1>
    </div>
  );
}
