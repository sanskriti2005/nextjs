export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        Feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Feature {slug[0]} documentation</h1>;
  } else {
    return (
      <div>
        <h1>Docs home page</h1>
      </div>
    );
  }
}
