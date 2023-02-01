import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@components/layout/Header";
import useStore, { CartProduct } from "@lib/store";
import { useForm, SubmitHandler } from "react-hook-form";
import Modal from "@components/util/Modal";
import { BsFillCheckCircleFill } from "react-icons/bs";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  cardNumber: number;
  validMonth: number;
  validYear: number;
};

const CheckoutPage = () => {
  const cart = useStore((state) => state.cart);
  const clearCart = useStore((state) => state.clearCart);
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: "onSubmit" });

  const handleCheckoutSubmit: SubmitHandler<FormData> = async (
    formData: FormData
  ) => {
    reset();
    clearCart();
    setShowModal(true);
  };

  return (
    <>
      <Header title="Checkout" checkoutPage={true} backArrow={true} />
      <div className="grid grid-cols-1 grid-rows-auto lg:grid-rows-1 lg:grid-cols-12 gap-x-6">
        <section className="col-span-1 row-start-2 lg:row-start-1 lg:col-span-8 py-6 lg:pr-6 lg:border-r">
          <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
            <fieldset>
              <legend className="text-h4 my-2">
                1. Your basic information
              </legend>
              <div className="flex flex-col sm:flex-row sm:gap-x-4">
                <div className="flex flex-col mb-4 md:mb-0 sm:basis-6/12">
                  <label htmlFor="firstNameId">
                    First Name <span className="required text-lg">*</span>
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    id="firstNameId"
                    type="text"
                    className={`input ${
                      errors?.firstName?.type === "required"
                        ? "input-error"
                        : ""
                    }`}
                  />
                  {errors?.firstName?.type === "required" && (
                    <span className="required text-sm">
                      First name is required
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-4 :mb-0 sm:basis-6/12">
                  <label htmlFor="lastNameId">
                    Last Name <span className="required text-lg">*</span>
                  </label>
                  <input
                    {...register("lastName", { required: true })}
                    id="lastNameId"
                    type="text"
                    className={`input ${
                      errors?.lastName?.type === "required" ? "input-error" : ""
                    }`}
                  />
                  {errors?.lastName?.type === "required" && (
                    <span className="required text-sm">
                      Last name is required
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="emailId">
                  Email <span className="required text-lg">*</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  id="emailId"
                  type="email"
                  className={`input ${
                    errors?.email?.type === "required" ? "input-error" : ""
                  }`}
                />
                {errors?.email?.type === "required" && (
                  <span className="required text-sm">Email is required</span>
                )}
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-h4 my-2">
                2. Your payment information
              </legend>

              <div className="flex flex-col mb-4">
                <label htmlFor="cardId">
                  Credit Card Number <span className="required text-lg">*</span>
                </label>
                <input
                  {...register("cardNumber", { required: true })}
                  id="cardId"
                  type="number"
                  className={`input ${
                    errors?.cardNumber?.type === "required" ? "input-error" : ""
                  }`}
                />
                {errors?.cardNumber?.type === "required" && (
                  <span className="required text-sm">
                    Card number is required
                  </span>
                )}
              </div>
              <div className="flex flex-col mb-4">
                <label>
                  Valid Date <span className="required text-lg">*</span>
                </label>
                <div className="flex flex-col sm:gap-x-4 sm:flex-row">
                  <div className="flex flex-col">
                    <input
                      {...register("validMonth", { required: true })}
                      id="validMonthId"
                      type="number"
                      placeholder="MM"
                      className={`input mb-4 sm:mb-0 sm:basis-6/12 ${
                        errors?.validMonth?.type === "required"
                          ? "input-error"
                          : ""
                      }`}
                    />
                    {errors?.validMonth?.type === "required" && (
                      <span className="required text-sm">
                        Month is required
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      {...register("validYear", { required: true })}
                      id="validYearId"
                      type="number"
                      placeholder="YY"
                      className={`input mb-4 sm:mb-0 sm:basis-6/12 ${
                        errors?.validYear?.type === "required"
                          ? "input-error"
                          : ""
                      }`}
                    />
                    {errors?.validYear?.type === "required" && (
                      <span className="required text-sm">Year is required</span>
                    )}
                  </div>
                </div>
              </div>
            </fieldset>

            <div className="flex w-full">
              <button type="submit" className="btn w-full">
                Pay
              </button>
            </div>
          </form>
        </section>

        <aside className="cold-span-1 row-start-1 pb-4 lg:row-start-1 lg:col-span-4 border-b border-zinc-300 lg:border-b-0">
          {cart.length > 0 && (
            <>
              <p className="text-h4 my-3">Your order</p>
              {cart.map((product: CartProduct) => (
                <div key={product.productId} className="flex flex-row my-4">
                  <div className="basis-1/4 mr-3">
                    <img
                      src={product.productImageURL}
                      alt={product.productName}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="basis-3/4">
                    <p className="m-0 text-lg">{product.productName}</p>
                    <p className="m-0 italic">
                      Quantity: {product.productQuantity}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </aside>
      </div>
      {showModal && (
        <Modal clickClose={setShowModal}>
          <div className="flex flex-row items-center py-4 mb-6">
            <BsFillCheckCircleFill color="#16a34a" className="mr-2" />
            <p className="m-0 text-xl font-bold">Payment has been successful</p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <Link to={`/`} className="btn">
              Return to products
            </Link>
          </div>
        </Modal>
      )}
    </>
  );
};
export default CheckoutPage;
