import React from 'react';
import styled from 'styled-components';

const Modal = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return [
    <ModalOverlayDiv onClick={() => toggleModal()} />,
    <ModalWrapDiv>
      <ModalDiv>{children}</ModalDiv>
    </ModalWrapDiv>,
  ];
};

export default Modal;

const ModalOverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalWrapDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
`;

const ModalDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  width: 95%;
  padding: 2rem;
  max-width: 60rem;
  height: auto;
  min-height: 40rem;
  pointer-events: all;
  max-height: 95vh;
  overflow: auto;
`;
