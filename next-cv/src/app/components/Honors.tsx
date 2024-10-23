import styles from './Honors.module.css'
import {Archivo_Black, Noto_Sans, Prompt} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const prompt = Prompt({subsets: ['latin'], weight: ["500", "400", "300"]})

export default function Honors() {
    return(
        <section className={styles.haaSectionContainer}>
            <div className={styles.haaTop}>
                <h2 className={`${notosans.className} ${styles.haaTitle}`}>Honors and Awards</h2>

                <div className={styles.awardBlockOne}>
                    <p className={`${styles.awardTitle}`}>Presidential Scholar</p>
                    <p className={`${prompt.className} ${styles.awardDet}`}>Spring 2023</p>
                </div>

                <div className={styles.awardBlockTwo}>
                    <p className={styles.awardTitle}>Zell Miller Scholarship Recipient</p>
                    <p className={`${prompt.className} ${styles.awardDet}`}>Fall 2022 - Present</p>
                </div>
            </div>
            
            <hr className={styles.haaLine}></hr>
        </section>
    );
}