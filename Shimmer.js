const Shimmer = () => {
  return (
    <div>
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index}className="w-56 h-72 p-7 m-5 flex flex-wrap shadow-lg bg-black"></div>
        ))}
    </div>
  );
};

export default Shimmer;
