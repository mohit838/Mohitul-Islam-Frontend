import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Buttons/Button';

const CardWrapper = ({ item }) => {
  const motionOp = {
    initial: { x: '-100%', opacity: '0' },
    whileInView: { x: '0', opacity: '1' },
  };

  return (
    <div className="flex flex-col items-center justify-between gap-2 my-2">
      <motion.div {...motionOp} className="fixed-ratio-container-work">
        <Image
          src={`${item?.imgSrc}`}
          alt="web-apps"
          fill
          responsive="true"
          priority
        />
      </motion.div>

      <motion.div
        {...motionOp}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h2>{item?.title}</h2>
        <p>{item?.desc}</p>
      </motion.div>

      <motion.div
        {...motionOp}
        className="flex items-center justify-between gap-2"
      >
        <Button type={'reg'}>
          <Link href={'#'} legacyBehavior>
            <a>Preview</a>
          </Link>
        </Button>
        <Button type={'diff'}>
          <Link href={'#'} legacyBehavior>
            <a>GitHub</a>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default CardWrapper;
