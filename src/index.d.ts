declare module "my-modale-by-moi-meme" {
  import * as React from "react";

  interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

  const Modal: React.FC<ModalProps>;

  export { Modal };
}
