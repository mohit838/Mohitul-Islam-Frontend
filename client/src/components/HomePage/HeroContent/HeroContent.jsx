import Button from '@/components/Common/Buttons/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroContent = () => {
  const motionOp = {
    initial: { x: '-100%', opacity: '0' },
    whileInView: { x: '0', opacity: '1' },
  };

  return (
    <div className="flex max-sm:flex-col md:flex-row lg:flex-row items-center justify-center sm:gap-5 lg:gap-7 globalMarginBottom">
      {/* Profile Image */}
      <motion.div {...motionOp} className="fixed-ratio-container">
        <Image
          src={`${profileImg?.imgSrc}`}
          alt="mohitul-islam"
          fill
          responsive="true"
          priority
        />
      </motion.div>

      {/* Profile Info */}
      <motion.div
        {...motionOp}
        className="flex flex-col sm:items-center md:items-start justify-between gap-5"
      >
        <h1 className="font-merienda sm:text-[1.4rem] lg:text-4xl sm:leading-[1.5] lg:leading-[1.5] tracking-[1.5px]">
          Hi, I'm Mohitul Islam <br />
          and
          <span className="bg-[#040507] hover:bg-[#f7ad36] text-[#fff] hover:text-[#040507] px-1 ml-1 transition-all ease-out cursor-pointer ">
            Junior Frontend Developer.
          </span>
        </h1>
        <p className="font-montserrat text-[1.125rem]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem esse
          facilis porro exercitationem vel voluptate minima cupiditate velit
          repellat non praesentium cum, id ipsam reiciendis nisi iusto ex
          doloribus consequatur aperiam.
        </p>

        {/* Contact and Work Button */}
        <div className="flex items-center justify-center gap-7">
          {actionBtn?.map((btn) => (
            <Button key={btn?.id} type={btn?.type}>
              <a href={`${btn?.link}`}>{btn?.btnName}</a>
            </Button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;

const profileImg = {
  imgSrc: '/profile/mohit.jpeg',
  imgSrc2: '/profile/protfolio1.jpg',
  imgSrc3: '/profile/protfolio2.png',
};

const actionBtn = [
  { id: 1, btnName: 'Contact Me', link: '/', type: 'reg' },
  { id: 2, btnName: 'Check My Work', link: '/', type: 'diff' },
];
