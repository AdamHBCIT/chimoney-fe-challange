import { useEffect, useState } from "react";
import Header from "@components/layout/Header";
import Loader from "@components/util/Loader";
import { useParams, Link } from "react-router-dom";

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);

  /**
   * Get products from API
   */
  const getProducts = async (): Promise<void> => {
    const response = await fetch("https://api.chimoney.io/v0.2/info/assets");
    if (response.status === 404) {
      setProducts([null]);
      return;
    }
    const data = await response.json();

    // select only gift cards and only 20 items
    const allProducts = data.data.giftCardsRLD.content.slice(1, 20);

    // if the request is bad, set products to null
    if (allProducts === undefined) {
      setProducts([null]);
      return;
    } else {
      setProducts(allProducts);
      return;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header title="Products" />

      {products[0] === null && <p>Bad request</p>}

      {products.length === 0 && <Loader />}

      {products.length > 1 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-8 py-8">
          {products.map((product) => (
            <div
              className="flex flex-col justify-between"
              key={product.productId}
            >
              <div>
                <Link to={`/product/${product.productId}`} >
                  <img
                    src={product.img}
                    alt={product.productName}
                    className="object-cover w-full rounded-md h-full md:h-52"
                  />
                </Link>

                <Link
                  to={`/product/${product.productId}`}
                  className=""
                >
                  <p className="text-xl">{product.productName}</p>
                </Link>
              </div>

              <Link to={`/product/${product.productId}`} className="btn lg:justify-center">
                View
              </Link>
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ProductsPage;
