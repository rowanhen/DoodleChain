import { ModalComponent } from "./Modal";

import { ReactNode, useCallback, useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalId = crypto.randomUUID();

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const Modal = useCallback(
    ({ children }: { children: ReactNode }) => (
      <ModalComponent id={modalId} isOpen={isOpen} onClose={close}>
        {children}
      </ModalComponent>
    ),
    [isOpen, modalId, close]
  );

  return { Modal, open, close };
};
