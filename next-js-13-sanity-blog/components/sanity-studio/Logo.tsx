import Image from "next/image";
import { LogoProps } from "sanity";

const Logo = (props: LogoProps) => {
  return (
    <div className="flex items-center rounded-full space-x-2">
      <Image
        className="rounded-full object-cover"
        height={40}
        width={40}
        src="/images/logo.PNG"
        alt="MK"
      />
      {props.renderDefault(props)}
    </div>
  );
};

export default Logo;
