import React from 'react';
import './ProductDetail.css';

const product = {
  "id": 101,
  "name": "스텐이중식판세트",
  "price": 10000,
  "stock": 565,
  "imageUrl": "https://front-recruitment-task.s3.amazonaws.com/%E1%84%8C%E1%85%AE%E1%84%87%E1%85%A1%E1%86%BC%E1%84%83%E1%85%A9%E1%84%80%E1%85%AE/%EC%A3%BC%EB%B0%A9%EB%8F%84%EA%B5%AC1.jpeg",
  "productOptions": [
    {
      "id": 1011,
      "name": "수저세트 미포함, 실리콘링 미포함",
      "price": 0,
      "stock": 5,
      "createdAt": "2021-08-23T22:52:17.634Z"
    },
    {
      "id": 1012,
      "name": "수저세트 포함",
      "price": 2000,
      "stock": 5,
      "createdAt": "2021-08-23T22:52:34.248Z"
    },
    {
      "id": 1013,
      "name": "실리콘링 포함",
      "price": 1000,
      "stock": 555,
      "createdAt": "2021-08-23T23:03:04.873Z"
    },
    {
      "id": 1014,
      "name": "수저세트 포함, 실리콘링 포함",
      "price": 3000,
      "stock": 0,
      "createdAt": "2021-08-23T22:52:34.248Z"
    }
  ]
};

function ProductDetail() {
  return (
    <div className="product-detail-wrap">
      <div className="product">
        <div className="product-thumbnail-wrap">
          <img src={product.imageUrl} />
        </div>
        <div className="product-info-wrap">
          <div>{product.name}</div>
          <div>{product.price}원</div>
          <div className="product-option-wrap">
            <label htmlFor="option-select">옵션</label>
            <select name="option" id="option-select">
              <option value="">--Please choose an option--</option>
              {product.productOptions.map((option, index) => (
                <option key={index} value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="price-wrap">
            <div className="price-info"><span>주문 수량</span><span>0개</span></div>
            <div className="price-info"><span>총 상품 금액</span><span>0원</span></div>
          </div>
          <button className="cart-button">장바구니에 담기</button>
        </div>
      </div> 
    </div>
  );
}

export default ProductDetail;
