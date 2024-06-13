"use client"

import Image from 'next/image'
import styles from 'app/sass/global-error.module.sass'
import { ErrorPageProrps } from '../../types'

export default function GlobalError({reset}: ErrorPageProrps) {

    return(
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>Ha ocurrido un error</h1>
            <Image
                src='/images/error.png'
                height={500}
                width={500}
                alt='Error'
            >

            </Image>
            <p className={styles.Error__message}>Al parecer ha ocurrido un error</p>
            <button className={styles.Error__button} onClick={reset}>Volver a intentar</button>
        </main>
    )
}