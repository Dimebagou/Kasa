import { useState, useRef, useEffect } from "react";
import "./index.css";

const Modal = (props) => {
    const { title, content } = props;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const modalContentRef = useRef(null);

    useEffect (() => {
        setIsOpenModal(false)
    }, [props])

    useEffect(() => {
        if (isOpenModal && modalContentRef.current) {
            modalContentRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isOpenModal]);

    return (
        <div className="modal">
            <div className="modal-header" ref={modalContentRef} onClick={() => setIsOpenModal(!isOpenModal)}>
                <h3>{title}</h3>
                <img src={isOpenModal ? "/img/icon-close.svg" : "/img/icon-open.svg"} alt="open content button" />
            </div>
            <div className={"modal-content" + (isOpenModal ? " visible" : "")}>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;
