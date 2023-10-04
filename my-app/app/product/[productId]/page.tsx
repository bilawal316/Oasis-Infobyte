export default function ProductDetail({
    params,
  }: {
    params: { productId: string; detailsId: string };
  }) {
    return (
      <h1>
        Details {params.detailsId} for product {params.productId}
      </h1>
    );
  }