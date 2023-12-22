const BoxCounter = ({ item, increment, decrement }) => {
  return (
    item.count >= 0 && (
      <div className="box__counter">
        <button
          onClick={() => decrement(item, item.count)}
          className="box__counter__button--decrement"
        >
          -
        </button>
        <span>{item.count} </span>
        <button
          onClick={() => increment(item, item.count)}
          className="box__counter__button--increment"
        >
          +
        </button>
      </div>
    )
  );
};

export default BoxCounter;
