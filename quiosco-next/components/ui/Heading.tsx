/** @format */

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-2xl my-10">{children}</h1>
    </div>
  );
};

export default Heading;
