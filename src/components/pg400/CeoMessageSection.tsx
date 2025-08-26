import React from 'react';
import Image from 'next/image';
import styles from './CeoMessageSection.module.css';

type CeoMessageSectionProps = {
  title: string;
  paragraph1: string;
  paragraph2: string;
  signature: string;
};

const CeoMessageSection = ({ title, paragraph1, paragraph2, signature }: CeoMessageSectionProps) => {
    return (
        <section id="ceo-message" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>

                    <Image 
                      src="/images/ceo-portrait.jpg" // Replace with the actual image path
                      alt="Portrait of the CEO" 
                      width={400} 
                      height={500} 
                      className={styles.ceoImage}
                    />
                </div>
                <div className={styles.textWrapper}>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }} />
                    <p className={styles.paragraph}>
                        {paragraph1}
                    </p>
                    <p className={styles.paragraph}>
                        {paragraph2}
                    </p>
                    <p className={styles.signature}>
                        {signature}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CeoMessageSection;