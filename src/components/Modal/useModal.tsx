import { ModalComponent, ModalProps } from "./Modal";

import { useCallback, useRef } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const open = useCallback(() => {
    modalRef?.current?.showModal();
  }, []);

  const close = useCallback(() => {
    modalRef?.current?.close();
  }, []);

  const Modal = useCallback(
    ({ children, title, onClose }: ModalProps) => (
      <ModalComponent ref={modalRef} title={title} onClose={onClose}>
        {children}
      </ModalComponent>
    ),
    []
  );

  return { Modal, open, close };
};
