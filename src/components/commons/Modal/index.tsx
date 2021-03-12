import Box from '@/style/layout/Box';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ModalWrapper } from './style';

const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
    },
    closed: { opacity: 0, scale: 0.5 },
  };

  return (
    <ModalWrapper
      initial={{ opacity: 0, scale: 0.5 }}
      variants={variants}
      animate={isModalOpen ? 'open' : 'closed'}
      transition={{ duration: 0.3 }}
    >
      <Box
        propStyle={{
          display: 'flex',
          flex: '1',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ background: '#fff', flex: 1 }}>
          <h1>Modal</h1>
          <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
            Fechar
          </button>
        </div>
      </Box>
    </ModalWrapper>
  );
};
export default Modal;
