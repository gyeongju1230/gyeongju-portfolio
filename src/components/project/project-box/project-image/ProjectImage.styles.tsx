import styled from 'styled-components';
import { motion } from 'framer-motion';

const smallViewport = '62rem';

export const ImageBox = styled(motion.button)`
  cursor: pointer;
  outline: none;
  border: 0;

  width: 55%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  border-radius: 10px;
  background-color: #fff5ef;
  box-shadow: 1px 2px 9px rgba(45, 45, 45, 0.3);

  @media (max-width: ${smallViewport}) {
    width: 90%;
    height: 80%;
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const Image = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    width: 100%;
    height: 100%;
  }
`;
