import { HeadingProps } from "@/types";

const Heading = ({ heading }: HeadingProps) => {
  return (
    <div>
      <header className="text-white font-jersey-20">
        <p className="text-3xl">{heading}</p>
        <p className="text-lg">Monday, 15th April</p>
      </header>
    </div>
  );
};

export default Heading;
