import PropTypes from "prop-types";
const BoxPicture = ({ data }) => {
  const { url, name } = data;
  return (
    <div className="box__picture">
      <img className="box__img" src={url} alt={name} />
    </div>
  );
};
BoxPicture.propTypes = {
  data: PropTypes.object,
};
export default BoxPicture;
