import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../Buttons/Button';

const CommonCards = ({ activeTab, tabs }) => {

  const activeTabData = tabs.find(tab => tab?.name === activeTab);

  const motionOp = {
    initial: { x: '-100%', opacity: '0' },
    whileInView: { x: '0', opacity: '1' },
  };

  const tabContent = activeTab?.content;
  console.log(tabContent);

  return (
    <div className="flex flex-col items-center justify-between gap-2 my-2">
      <motion.div {...motionOp} className="fixed-ratio-container-work">
        <Image
          src="/profile/protfolio2.png"
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
        <h2>Title</h2>
        <p>Desc</p>
      </motion.div>
      <motion.div
        {...motionOp}
        className="flex items-center justify-between gap-2"
      >
        <Button type={'reg'} />
        <Button type={'diff'} />
      </motion.div>
    </div>
  );
};

export default CommonCards;
