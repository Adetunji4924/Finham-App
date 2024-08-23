const PrimaryButton = (props) => {
  return (
    <button
      id={props.id}
      className="rounded bg-[#002147] px-[1.2rem] py-[.8rem] font-Inter text-white font-medium hover:bg-secondary-0 transition ease-in-out delay-100 cursor-pointer"
    >
      {props.value}
    </button>
  );
};

export default PrimaryButton;
