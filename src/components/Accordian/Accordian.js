import React, { useState } from 'react'
import styles from './styles.module.scss'

const Accordion = ({ title, children }) => {
    const [isOpen, setOpen] = useState(true);

    const clicked = () => {
        setOpen(!isOpen)   
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>
            <span className={styles.arrow} onClick={e => clicked()}>
                {isOpen ? <span>&#9660;</span> : <span>&#9650;</span>}
            </span>
            <span className={styles.titleText}>{title}</span>
        </div>
        {isOpen && <div>
          <div className={styles.item}>{children}</div>
        </div>}
      </div>
    );
};

export default Accordion;
