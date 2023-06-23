import Button from '@/components/Common/Buttons/Button';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <div className="flex max-sm:flex-col md:flex-row lg:flex-row items-center justify-center sm:gap-5 lg:gap-7 sm:mt-5 lg:mt-10">
      {/* Profile Image */}
      <div className="fixed-ratio-container">
        <Image
          src={`${profileImg?.imgSrc}`}
          alt="mohitul-islam"
          fill
          responsive
          priority
        />
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-start justify-between gap-5">
        <h1 className="font-merienda sm:text-[1.4rem] lg:text-4xl sm:leading-[1.5] lg:leading-[1.5] tracking-[1.5px]">
          Hi, I'm Mohitul Islam <br />
          and
          <span className="bg-[#040507] hover:bg-[#f7ad36] text-[#fff] hover:text-[#040507] px-1 ml-1 transition-all ease-out">
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
        <div className="flex flex-wrap items-start justify-between gap-7">
          {actionBtn?.map((btn) => (
            <Button key={btn?.id} type={btn?.type}>
              <a href={`${btn?.link}`}>{btn?.btnName}</a>
            </Button>
          ))}
        </div>
      </div>
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
