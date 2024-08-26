import './ModalComponent.scss';
import React from 'react';
import { Modal } from 'antd';

interface ModalComponentProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
  title: string;
  children: React.ReactNode;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({
  isModalOpen,
  handleCancel,
  handleOk,
  title,
  children,
}) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};
