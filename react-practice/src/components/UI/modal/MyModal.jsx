import React from "react";
import s from './MyModal.module.css'

export const MyModal = ({children}) => {
    return (
        <div className={s.myModal}>
            <div className={s.myModalContent}>
                {children}
        </div>
        </div>)
};