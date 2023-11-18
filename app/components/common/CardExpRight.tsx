interface itemTitle {
  itemTitle: {
    jobTitle: string;
    location: string;
    responsiblity: string;
  };
}

const CardExpRight = ({ itemTitle }: itemTitle) => {
  return (
    <div className="custom-card-for-exp">
      <p className="text-2xl font-bold">{itemTitle?.jobTitle}</p>
      <p className="text-sm font-semibold">{itemTitle?.responsiblity}</p>
      <p>{itemTitle?.location}</p>
    </div>
  );
};

export default CardExpRight;
