
const colorClasses = {
  blue: "bg-blue-700",
  white: "bg-white",
  black: "bg-black",
  red: "bg-red-500",
};

const Loader = ({ color= "blue" }) => {
  return (
    <div className="flex flex-row gap-2">
      <div className={`w-4 h-4 rounded-full ${colorClasses[color]}   animate-bounce`} />
      <div className={`w-4 h-4 rounded-full ${colorClasses[color]} animate-bounce [animation-delay:-.3s]`} />
      <div className={`w-4 h-4 rounded-full ${colorClasses[color]} animate-bounce [animation-delay:-.5s]`} />
    </div>
  );
}

export default Loader;
