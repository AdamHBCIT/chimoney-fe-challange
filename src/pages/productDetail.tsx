import type { CartProduct } from "@lib/store";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import useStore from "@lib/store";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const addProduct = useStore( (state) => state.addProduct );
  const [product, setProduct] = useState<any>({});

  // Get params from URL
  const urlParams = useParams();
  const productId = Number(urlParams.productId);

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
    navigate("/cart");
  }

  useEffect(() => {
    getProductById(productId)
  }, []);

  return (
    <>
      <h1>Product Detail Page</h1>
      {product.error === true && <p>Bad request</p>}

      {Object.keys(product).length === 0 && <p>Loading</p>}

      {Object.keys(product).length > 1 &&
        <div>
          <p>{product.productName}</p>
          <img src={product.img} alt="" />
          <label htmlFor="quantitySelectId">Quantity</label>
          <select id="quantitySelectId">
            <option>1</option>
            <option>2</option>
          </select>
          <button type="button" onClick={addProductToCart}>Add to cart</button>
        </div>
      }
    </>
  );
};

export default ProductDetailPage;
