import Link from 'next/link';

const ProductList = () => {
  return (
    <ul>
      <li>
        <Link href="/product/[productId]" as="/product/1">
          Product 1
        </Link>
      </li>
      <li>
        <Link href="/product/[productId]" as="/product/2">
          Product 2
        </Link>
      </li>
      <li>
        <Link href="/product/[productId]" as="/product/3">
          Product 3
        </Link>
      </li>
    </ul>
  );
};

export default ProductList;
