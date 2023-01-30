import type { CartProduct } from "@lib/store";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useStore from "@lib/store";
import Header from "@components/layout/Header";
import Loader from "@components/util/Loader";
import SelectQuantity from "@components/form/SelectQuantity";
import AddToCartButton from "@components/button/AddToCartButton";
import Modal from "@components/util/Modal";
import { BsFillCheckCircleFill } from "react-icons/bs";

const ProductDetailPage = () => {
  // store
  const addProduct = useStore( (state) => state.addProduct );
  const cart = useStore( (state) => state.cart );
  const updateProductQuantity = useStore( (state) => state.updateProductQuantity );

  // states
  const [product, setProduct] = useState<any>({});
  const [quantity, setQuantity] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showUpdatedModal, setShowUpdatedModal] = useState<boolean>(false);

  // Get productId from URL params
  const urlParams = useParams();
  const productId = Number(urlParams.productId);
  
  /**
   * GET data from API 
   */
  const getProductById = async (productId: number): Promise<void> => {
    const response = await fetch("https://api.chimoney.io/v0.2/info/assets");
    if(response.status === 404) {
      setProduct({"error": true})
      return;
    }
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

  /**
   * Add new product to the cart 
   */
  const addProductToCart = () => {
    const newProduct: CartProduct = {
      productId: product.productId,
      productName: product.productName,
      productImageURL: product.img,
      productQuantity: quantity
    }
    
    if (cart.length > 0) {
      const existProduct = cart.find( (product: any) => product.productId === productId)
      // if product is already in cart, update quantity
      if (existProduct) {
        updateProductQuantity(productId, quantity);
        setShowUpdatedModal(true);
        return;
      }
    }
    addProduct(newProduct);
    setShowModal(true);
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
        <section className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <div className="col-span-1">
            <img
              className="rounded-md w-full" 
              src={product.img} 
              alt={product.productName} />
          </div>

          <div className="col-span-1">
            <p className="text-3xl">{product.productName}</p>

            <SelectQuantity changeQuantity={setQuantity} />
            <AddToCartButton clickToCart={addProductToCart} />

          </div>
        </section>
      }

      {showModal && 
        <Modal clickClose={setShowModal}>
          <div className="flex flex-row items-center py-4 mb-6">
            <BsFillCheckCircleFill color="#16a34a" className="mr-2"/>
            <p className="m-0 text-xl font-bold">Item added to the cart</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-6">
            <Link to="/cart" className="btn">Go to Cart</Link>
            <Link to="/checkout" className="btn">Proceed to checkout</Link>
          </div>
        </Modal>
      }

      {showUpdatedModal && 
        <Modal clickClose={setShowUpdatedModal}>
          <div className="flex flex-row items-center py-4 mb-6">
            <BsFillCheckCircleFill color="#16a34a" className="mr-2"/>
            <p className="m-0 text-xl font-bold">Item's quantity updated</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 lg:gap-x-6">
            <Link to="/cart" className="btn">Go to Cart</Link>
            <Link to="/checkout" className="btn">Proceed to checkout</Link>
          </div>
        </Modal>
      
      }
    </>
  );
};
export default ProductDetailPage;
