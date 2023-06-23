import Image from 'next/image';

const HeroContent = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {/* Profile Image */}
      <div>
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
      <div>
        <h1>
          Hi, I'm Mohitul Islam <br />
          and Junior Frontend React Developer.
        </h1>
      </div>
    </div>
  );
};

export default HeroContent;

const profileImg = {
  imgSrc: '/profile/mohit.jpeg',
};
