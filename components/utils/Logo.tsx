import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href={'/'}
      className="text-xl"
    >
      {/* Mohitul */}
      <Image
        src="/assets/logo.svg"
        alt="mohitul-islam"
        width={54}
        height={54}
        priority
        className='rounded-2xl'
      />
    </Link>
  );
};

export default Logo;
