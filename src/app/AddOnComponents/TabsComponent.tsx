const Tab = ({ title, onClick, isActive }: any) => {
  return (
    <button
      // className={`px-4 py-2 focus:outline-none ${
      //   isActive ? "bg-gray-500" : ""
      // }`}
      className={`${
        isActive ? "border-designColor rounded-lg" : "border-transparent"
      } resumeLi mr-2 mb-2 w-auto h-auto px-4 py-3 text-sm`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Tab;
