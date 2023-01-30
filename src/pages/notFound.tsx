import Header from "@components/layout/Header";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return(
    <>
      <Header title="404" backArrow={true} />
      <p>The page you're looking for does not exist</p>
      <p>Please, go back to <Link to={`/`}>list of products</Link> or to your <Link to={`/cart`}>cart</Link></p>
      
    </>
  )
}
export default NotFoundPage;