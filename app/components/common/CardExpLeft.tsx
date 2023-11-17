interface itemDuration {
  duration: string;
}

const CardExpLeft = (itemDuration: itemDuration) => {
  return (
    <div className="">
      <p className="text-xl font-bold text-center md:text-right">
        {itemDuration?.duration}
      </p>
    </div>
  );
};

export default CardExpLeft;
