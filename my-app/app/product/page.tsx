import Link from 'next/link';

const ProductList = () => {
  return (
    <ul>
      <li>
        <Link href="/product/[productId]" as="/product/1">
          Pencil
        </Link>
      </li>
      <li>
        <Link href="/product/[productId]" as="/product/2">
          Sharpner
        </Link>
      </li>
      <li>
        <Link href="/product/[productId]" as="/product/3">
          Pens
        </Link>
      </li>
    </ul>
  );
};

export default ProductList;
