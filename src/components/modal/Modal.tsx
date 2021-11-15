import React from 'react';
import { Modal as ModalBox } from 'antd';
import './style.css';

interface ModalProps {
  showModal: boolean;
  setShowPostCode: (value: React.SetStateAction<boolean>) => void;
}

const Modal: React.FC<ModalProps> = ({ children, showModal, setShowPostCode }) => {
  const handleOk = () => {
    setShowPostCode(false);
  };
  const handleCancel = () => {
    setShowPostCode(false);
  };

  return (
    <ModalBox visible={showModal} onOk={handleOk} onCancel={handleCancel} footer={null}>
      {children}
    </ModalBox>
  );
};

export default Modal;
