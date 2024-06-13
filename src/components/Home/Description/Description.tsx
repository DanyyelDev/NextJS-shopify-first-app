"use client"

import classNames from 'classnames/bind'
import { useState } from 'react';
import styles from './Description.module.sass';
import Image from 'next/image'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,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'

export const Description = () => {
    const [hasBorder, setBorder] = useState(false)

    const handleClick = () => setBorder(!hasBorder)

    const cx = classNames.bind(styles)
    const buttonStyles = cx('Description__button',{
        'Description__button--border': hasBorder
    })

    console.log(buttonStyles);
    
    return(
        <section className={styles.Description}>
            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image 
                        src="/images/description.jpeg" 
                        alt="products marketplace" 
                        /* width={500} 
                        height={300} */
                        fill
                        placeholder='blur'
                        blurDataURL={PLACEHOLDER_IMAGE}
                    />
                </div>
            </button>
            
            <div className={styles.Description__text}>
                <h2>Bring the future today</h2>
                <p>Future World: Your Gateway to Tomorrows Tech! Dive into a world of cutting-edge gadgets and gear. Stay ahead of the curve and redefine your digital lifestyle with us.</p>
            </div>
        </section>
    )
}