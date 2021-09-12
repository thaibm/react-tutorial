import * as React from "react";
import classNames from "classnames";
import "./Modal.scss";
interface Props {
    isModalOpen: boolean;
    setIsModalOpen: (isOpen: boolean) => void;
    children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ isModalOpen, setIsModalOpen, children }) => {
    return (
        <div
            className={classNames("modal", {
                modal__hidden: !isModalOpen,
            })}
        >
            <div
                className="modal__overlay"
                onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="modal__body">{children}</div>
        </div>
    );
};

export default Modal;
