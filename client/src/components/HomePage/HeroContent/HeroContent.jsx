import Button from '@/components/Common/Buttons/Button';
import Image from 'next/image';

const HeroContent = () => {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-7 mt-10">
      {/* Profile Image */}
      {/* <div className="">
        <div className={'image-container'}>
          <Image
            src={`${profileImg?.imgSrc}`}
            alt="mohitul-islam"
            fill
            priority
            className={'image'}
          />
        </div>
      </div> */}

      <div className="w-[2000px] h-auto">
        <div className={'image-container'}>
          <Image
            src={`${profileImg?.imgSrc}`}
            alt="mohitul-islam"
            fill
            priority
            className={'image'}
          />
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-start justify-between gap-5">
        <h1 className="font-merienda text-4xl leading-[1.5] tracking-[1.5px]">
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
          doloribus consequatur aperiam, tenetur enim optio! Saepe et nulla
          quibusdam ullam animi quas ipsam, debitis, doloribus cumque
          voluptatibus, praesentium architecto dolorem mollitia eveniet soluta
          quae illo quasi odio. Veritatis, magni earum repudiandae cumque porro
          assumenda. Error commodi iure impedit reprehenderit sapiente.
        </p>

        {/* Contact and Work Button */}

        <div className="flex flex-wrap items-start justify-between gap-7">
          {actionBtn?.map((btn) => (
            <Button key={btn?.id}>
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
};

const actionBtn = [
  { id: 1, btnName: 'Contact Me', link: '/' },
  { id: 2, btnName: 'Check My Work', link: '/' },
];
