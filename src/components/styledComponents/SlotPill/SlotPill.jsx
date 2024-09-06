import React from 'react';
import styles from './SlotPill.module.css';

function SlotPill({ time, date, BookSlot, location, hospitalName }) {
    console.log('BookSlot in SlotPill:', BookSlot); // Should log the function

    return (
        <div className={styles.slotpill} onClick={() => BookSlot(time, date, location, hospitalName)}>
            <span style={{ fontSize: '1.3rem', color: 'var(--primary-main-color)' }}>{time}</span>
        </div>
    );
}

export default SlotPill;