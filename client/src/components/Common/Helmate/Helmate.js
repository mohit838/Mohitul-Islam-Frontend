const Helmate = (props) => {
  document.title = 'Mohitul Islam - ' + props.title;

  return <div className="w-full">{props.children}</div>;
};

export default Helmate;
