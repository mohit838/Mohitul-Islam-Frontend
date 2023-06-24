import { motion } from 'framer-motion';

const Button = ({ children, type }) => {
  return (
    <motion.button
      className={`px-4 py-2 ${
        type === 'diff' ? 'actionBtnDiff' : 'actionBtnReg'
      }`}
      whileTap={{
        scale: '1.2',
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
