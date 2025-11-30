import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert2 = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert2;
