import Header from "@components/layout/Header";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Header title="Error 404" backArrow={true} />
      <section>
        <p>The page you're looking for does not exist.</p>
        <p>
          Please, go back to <Link to={`/`}>list of products</Link> or to your{" "}
          <Link to={`/cart`}>cart.</Link>
        </p>
      </section>
    </>
  );
};
export default NotFoundPage;
