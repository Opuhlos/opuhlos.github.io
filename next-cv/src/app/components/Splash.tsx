import Education from './Education'
import styles from './Splash.module.css'
import {Archivo_Black, Noto_Sans, Prompt} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const prompt = Prompt({subsets: ['latin'], weight: ["400", "300"]})
const archivo = Archivo_Black({subsets: ['latin'], weight: ["400"]})


export default function Splash() {
    return(
        <section className={styles.splash}>
           <Education/>

            <div className={styles.tagContainer}>
                <h1 className={`${notosans.className} ${styles.h1}`}>Welcome &#10022; Chào !</h1>
                <div className={styles.centerElement}>
                    <p className={`${archivo.className} ${styles.tagLine}`}>
                        Hello, I'm Eric Nguyen, a 3rd year Computer Science student, 2D/3D artist,
                        and hobbyist game developer!
                    </p>

                </div>

                <div className={styles.palette}>
                    <div className={styles.block1}></div>
                    <div className={styles.block2}></div>
                    <div className={styles.block3}></div>
                    <div className={styles.block4}></div>
                    <div className={styles.block5}></div>
                </div>
            </div>

        </section>
    );
}