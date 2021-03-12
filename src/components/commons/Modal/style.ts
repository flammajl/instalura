import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

interface ModalProps {
  isModalOpen: boolean;
}

export const ModalWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* align-items: stretch; */
  background: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  /* overflow: scroll; */
  z-index: 100;
`;
