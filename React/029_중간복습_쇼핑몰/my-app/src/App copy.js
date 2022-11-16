import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import shoppingCart from "./assets/icon-shopping-cart-white.svg";
import heart from "./assets/icon-heart.svg";
import hearton from "./assets/icon-heart-on.svg";

// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  
  span {
    color: red;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`;

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`;

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const IconShoppingCart = styled.a`
  background: pink url(${shoppingCart}) no-repeat center / 40px 40px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: sticky;
  top: 60px;
`;

const ProductNameItem = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
`;

const HeartIcon = styled.span`
  background: url(${(props) => (props.className === "click" ? hearton : heart)})
    no-repeat center / 20px 20px;
  width: 20px;
  height: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 22px;
`;
async function requests() {
  const response = await fetch("http://test.api.weniv.co.kr/mall");
  const data = await response.json();
  return data;
}

function ProductList() {
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then((productData) => {
      setProductListData(productData);
      setDataLoadSwitch(false);
    });
  }

  // 무한반복
  // requests().then(productData => setProductListData(productData))
  // console.log(productListData)

  // const productListData = requests()
  // console.log(productListData) // 위와 같이 실행하면 promise입니다.

  return (
    <ContainerProductList>
      {productListData.map((item) => (
        <ProductListItem
          key={item.id}
          productName={item.productName}
          price={item.price}
          thumbnailImg={item.thumbnailImg}
        />
      ))}
    </ContainerProductList>
  );
}

function ProductListItem({ productName, price, thumbnailImg }) {
  return (
    <ItemProductList>
      <ImgProduct
        src={"http://test.api.weniv.co.kr/" + thumbnailImg}
        alt={productName}
      />
      <ProductContainer>
        <ProductNameItem>{productName}</ProductNameItem>
        <HeartIcon onClick={handleClick} className="click"></HeartIcon>
      </ProductContainer>
      <p>{price}</p>
    </ItemProductList>
  );
}

function handleClick() {
  console.log("click");
  return <HeartIcon className="click"></HeartIcon>;
}

function ShoppingCart() {
  return <IconShoppingCart href="#"></IconShoppingCart>;
}

function App() {
  return (
    <>
      <ContainerMain>
        <GlobalStyle />
        <ProductList />
        <ShoppingCart />
      </ContainerMain>
    </>
  );
}
export default App;
