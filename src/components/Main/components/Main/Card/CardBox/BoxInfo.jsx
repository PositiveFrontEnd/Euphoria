import PropTypes from "prop-types";
const BoxInfo = ({ data }) => {
  const { price, article, color, name, count } = data;
  const currentPrice = (price, count) => {
    if (count === 1) {
      return price;
    } else {
      return price * count;
    }
  };
  return (
    <div className="box__info">
      <h4 className="box__name">Product Name : {name}</h4>
      <p className="box__price">Price : {currentPrice(price, count)}</p>
      <span className="box__article">Product Code : {article}</span>
      <p className="box__color">Product Color : {color}</p>
    </div>
  );
};
BoxInfo.propTypes = {
  data: PropTypes.object,
};
export default BoxInfo;
