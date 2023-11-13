interface itemTitle {
  itemTitle: {
    jobTitle: string;
    location: string;
  };
}

const CardExpRight = (itemTitle: itemTitle) => {
  return (
    <div className="custom-card-for-exp">
      <p className="text-2xl font-bold">{itemTitle?.itemTitle?.jobTitle}</p>
      <p>{itemTitle?.itemTitle?.location}</p>
    </div>
  );
};

export default CardExpRight;
