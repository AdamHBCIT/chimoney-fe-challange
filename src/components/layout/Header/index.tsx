import CartButton from "@components/button/CartButton";
import ProceedButton from "@components/button/ProceedButton";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {
  title: string,
  backArrow?: boolean,
  cartPage?: boolean
}

const Header = ({title, backArrow, cartPage}: Props) => {
  return (
    <header className="border-b border-zinc-300 flex flex-col gap-y-6 lg:flex-row lg:justify-between items-start lg:items-center pb-4">
      <div className="flex flex-col items-center gap-y-2 lg:flex-row">
        {backArrow && 
          <Link to="/" className="mr-4 flex items-center self-baseline lg:self-auto">
            <HiArrowSmLeft size="2rem" /> 
            <span className="lg:hidden">Back to products</span>
          </Link>
        }
        <h1 className="m-0">{title}</h1>
      </div>
      {!cartPage && 
        <CartButton />
      }
      {cartPage && 
        <ProceedButton />
      }
    </header>
  );
};
export default Header;
