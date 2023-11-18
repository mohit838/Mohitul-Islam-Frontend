import Image from "next/image";
import Link from "next/link";

interface gItems {
  item: {
    id: number;
    imgSrc: string;
    desc: string;
    link: string;
  };
}

const GallaryCard = ({ item }: gItems) => {
  return (
    <div className="w-full md:w-1/2">
      <div className="gallary-card">
        <Link
          href={`${item?.link}`}
          legacyBehavior
          target="_blank"
        >
          <a>
            {/* Image of project */}
            <div className="w-full relative aspect-video">
              <Image
                className="object-cover"
                src={item?.imgSrc}
                alt="mohitul-islam-project-1"
                fill
              />
            </div>
            {/* Intro project */}
            <div>
              <p className="project-intro-text">{item?.desc}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default GallaryCard;
