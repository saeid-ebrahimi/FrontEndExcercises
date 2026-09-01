import styled from "styled-components";
import { Button } from "./button";

type SimpleModalDialog = {
  onClose: () => void;
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is on top */
`;

const Modal = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
  background: #f9f9f9;
  border-bottom: 1px solid #e5e5e5;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: #f1f1f1;
  border-top: 1px solid #e5e5e5;
`;

export const ModalDialog = ({ onClose }: SimpleModalDialog) => {
  return (
    <ModalOverlay>
      <Modal>
        <Content>dummy content</Content>
        <Footer>
          <Button onClick={onClose}>close dialog</Button>
        </Footer>
      </Modal>
    </ModalOverlay>
  );
};
