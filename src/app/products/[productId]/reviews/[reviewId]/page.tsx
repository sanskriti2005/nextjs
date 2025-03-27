export default async function Page({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  return <div>
    <h1>{reviewId} for {productId}</h1>
  </div>;
}
