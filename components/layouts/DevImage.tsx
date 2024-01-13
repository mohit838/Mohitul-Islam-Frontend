import { SocialIconsProps } from "@/types/Types";
import Image from "next/image";

const DevImage = ({ contiainerStyles, imgSrc }: SocialIconsProps) => {
  return (
    <div className={`${contiainerStyles}`}>
      <Image
        src={`${imgSrc}`}
        alt="mohitul-islam"
        fill
        priority
      />
    </div>
  );
};

export default DevImage;
