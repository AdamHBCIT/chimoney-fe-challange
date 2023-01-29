import type { CartProduct } from "@lib/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link, useLocation, } from "react-router-dom";
import useStore from "@lib/store";
import Header from "@components/layout/Header";
import Loader from "@components/util/Loader";

const ProductDetailPage = () => {
  //const navigate = useNavigate();
  const addProduct = useStore( (state) => state.addProduct );
  const [product, setProduct] = useState<any>({});

  
  // Get params from URL
  const urlParams = useParams();
  console.log("urlParams: ", urlParams)
  const productId = Number(urlParams.productId);
  
  let location = useLocation();
  console.log("location: ", location)

  /**
   * GET data from API 
   * @param productId 
   */
  const getProductById = async (productId: number): Promise<void> => {
    const response = await fetch("https://api.chimoney.io/v0.2/info/assets");
    const data = await response.json();
    
    // find the product by product id. If it does not exist, become undefined
    const singleProduct = data.data.giftCardsRLD.content.find( (product: any) => product.productId === productId);
    
    // if the request is bad, return error
    if(singleProduct === undefined) {
      setProduct({"error": true})
      return;
    }
    else {
      setProduct(singleProduct);
      return;
    }
  };

  const addProductToCart = () => {
    const newProduct: CartProduct = {
      productId: product.productId,
      productName: product.productName,
      productImageURL: product.img,
      productQuantity: 4
    }

    addProduct(newProduct);
    //navigate("/cart");
  }

  useEffect(() => {
    getProductById(productId)
  }, []);

  return (
    <>
      <Header title={`Product: ${product.productName}`} backArrow={true} />
      {product.error === true && <p>Bad request</p>}

      {Object.keys(product).length === 0 && <Loader />}

      {Object.keys(product).length > 1 &&
        <section>
          <p>{product.productName}</p>
          <img src={product.img} alt="" />
          <label htmlFor="quantitySelectId">Quantity</label>
          <select id="quantitySelectId">
            <option>1</option>
            <option>2</option>
          </select>
          <button type="button" onClick={addProductToCart}>Add to cart</button>
          <Link to="?modal" state={{modal: true}}>Open modal</Link>
        </section>
      }
    </>
  );
};

export default ProductDetailPage;
