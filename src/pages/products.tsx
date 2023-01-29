import { useEffect, useState } from 'react';
import Header from "@components/layout/Header";
import Loader from "@components/util/Loader";

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async (): Promise<void> => {
    const response = await fetch("https://api.chimoney.io/v0.2/info/assets");
    if(response.status === 404) {
      setProducts([null])
      return;
    }
    const data = await response.json();

    console.log({data})
    
    // select only gift cards and only 20 items
    const allProducts = data.data.giftCardsRLD.content.slice(1, 20);

    // if the request is bad, set products to null
    if(allProducts === undefined) {
      setProducts([null])
      return;
    }
    else {
      setProducts(allProducts);
      return;
    }
    
  }

  useEffect( () => {
    getProducts();
  }, [])


  return(
    <>
      <Header title="Products"/>

      {products[0] === null && <p>Bad request</p>}

      {products.length === 0 && <Loader />}

      {products.length > 1 &&
        products.map( (product) => (
          <div className="border-b border-zinc-300 py-8 grid gap-x-4 grid-cols-4 grid-rows-2 place-content-stretch" key={product.productId} >
            <a href={`/product/${product.productId}`} 
               className="row-span-2 col-span-2 md:col-span-1 self-center">
              <img src={product.img} alt={product.productName} className="object-cover w-full rounded-md"/>
            </a>
            <a href={`/product/${product.productId}`}
               className="row-span-1 col-span-2 md:col-span-3">
              <p className="text-xl">{product.productName}</p>
            </a>
            <div className="row-span-1 col-span-4 md:col-span-3">
              <button>Delete</button>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default ProductsPage;