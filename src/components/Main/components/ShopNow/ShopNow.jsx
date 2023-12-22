import { ReactComponent as ChevronLeft } from "./ShopSvg/ChevronLeft.svg";
import { ReactComponent as ChevronRight } from "./ShopSvg/ChevronRight.svg";

// import ChevronLeft from "./ShopSvg/ChevronLeft.svg?react";
// import ChevronRight from "./ShopSvg/ChevronRight.svg?react";
import Button from "../../../Button/Button";
import "./ShopNow.scss";
const ShopNow = () => {
  return (
    <section className="main__shop">
      <ChevronLeft />
      <div className="main__box box">
        <p className="box__gold__silver">Gold or Silver</p>
        <h2 className="box__name">Summer Decorations For Yuo</h2>
        <p className="box__decoration__type">
          Ring / Earing / Necklace / Bracelet
        </p>
        <Button className="box__button" click={() => {}}>
          Shop Now
        </Button>
      </div>
      <ChevronRight />
    </section>
  );
};

export default ShopNow;
