import React, { useState } from 'react'
import PriceTag from './PriceTag';
type Product = {
  id: number;
  name: string;
  price: number;
  description? : string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [showDesc,setShowDesc]=useState(false);
  const handdleToggle = () => setShowDesc(!showDesc)
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <PriceTag price={product.price} /> <br />
      <button className='border border-gray-300 p-3' onClick={handdleToggle}>
        {showDesc ? "Ẩn mô tả" : 'Xem thêm'}
      </button>
      {
        showDesc && (
          <div>
            {product.description}
          </div>
        )
      }
    </div>
  );
};

export default ProductCard