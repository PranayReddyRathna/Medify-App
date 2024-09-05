import React, { useState } from 'react';
import styles from './Faq.module.css';
import docpatient from '../../assets/docpatient.png';
import stylishshape from '../../assets/stylishshape.png';
import happy from '../../assets/happy.png';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Why choose our medical for your family?",
            answer: "Our medical services are tailored to provide comprehensive and compassionate care for all family members. We prioritize your health and well-being."
        },
        {
            question: "Why we are different from others?",
            answer: "We stand out because of our commitment to advanced technology, personalized care, and a team of experienced professionals dedicated to your health."
        },
        {
            question: "Trusted & experience senior care & love",
            answer: "Our senior care services are trusted by many and are designed to offer comfort, love, and expert care to ensure the best quality of life for seniors."
        },
        {
            question: "How to get appointment for emergency cases?",
            answer: "For emergency cases, you can call our 24/7 helpline or visit our emergency department directly. Our team is always ready to assist you."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <p style={{fontSize:'1.2rem',color:'var(--primary-main-color)',fontWeight:"500"}}>Get Your Answer</p>
            <p style={{fontSize:'3rem',fontWeight:"600",color:'var(--primary-heading-color)'}}>Frequently Asked Questions</p>
            <div className={styles.faqsection}>
                <div>
                    <img src={happy} alt="" style={{marginRight:"-10rem",marginBottom:"8rem",position:'relative'}}/>
                    <img src={docpatient} alt="" />
                    <img src={stylishshape} className={styles.stylishshape} style={{marginLeft:"-8rem",marginBottom:'12rem',position:"relative",zIndex:'1'}}/>
                </div>
                <div style={{display:"flex",alignItems:'flex-start',flexDirection:'column'}}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <p className={styles.question} onClick={() => toggleAccordion(index)}>
                                {faq.question}
                                <span style={{fontSize:'2rem',fontWeight:'700',color:'var(--primary-main-color)',paddingLeft:'2rem'}}>
                                    {activeIndex === index ? '-' : '+'}
                                </span>
                            </p>
                            {activeIndex === index && (
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Faq;