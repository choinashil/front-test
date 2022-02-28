import React from 'react';
import './ProductList.css';

const products = [
  {
    "id": 101,
    "name": "스텐이중식판세트",
    "price": 10000,
    "stock": 565,
    "imageUrl": "https://front-recruitment-task.s3.amazonaws.com/%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE/%EC%A3%BC%EB%B0%A9%EB%8F%84%EA%B5%AC1.jpeg"
  },
  {
    "id": 102,
    "name": "쟁반 세트",
    "price": 12900,
    "stock": 5,
    "imageUrl": "https://front-recruitment-task.s3.amazonaws.com/%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE/%EC%A3%BC%EB%B0%A9%EB%8F%84%EA%B5%AC2.jpeg"
  },
  {
    "id": 103,
    "name": "스마일 머그",
    "price": 15300,
    "stock": 175,
    "imageUrl": "https://front-recruitment-task.s3.amazonaws.com/%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE/%EC%A3%BC%EB%B0%A9%EB%8F%84%EA%B5%AC3.jpeg"
  },
  {
    "id": 104,
    "name": "와인오프너 풀세트",
    "price": 37000,
    "stock": 133,
    "imageUrl": "https://front-recruitment-task.s3.amazonaws.com/%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE/%EC%A3%BC%EB%B0%A9%EB%8F%84%EA%B5%AC4.jpeg"
  }
];


function ProductList() {
  return (
    <div className="product-list-wrap">
      <div className="product-list">
        {products.map((product, index) => {
          return (
            <div key={index} className="product-item">
              <img src={product.imageUrl} className="product-thumbnail" />
              <div>{product.name}</div>
              <div>{product.price}원</div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default ProductList;
