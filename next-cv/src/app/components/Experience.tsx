import styles from './Experience.module.css'
import {Archivo_Black, Noto_Sans, Prompt} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const archivo = Archivo_Black({subsets: ['latin'], weight: ["400"]})
const prompt = Prompt({subsets: ['latin'], weight: ["400", "300"]})

export default function Experience() {
    return(
        <section className={styles.leaSectionContainer}>
        <div className={styles.leaTop}>
            <h2 className={`${notosans.className} ${styles.lea}`}>Leadership & Experience</h2>
        </div>

        <div className={styles.leaMid}>
            <dl className={styles.dlGrid}>
                <dt className={`${archivo.className} ${styles.listDL}`}>
                    <a className={styles.listGpLink} href = "https://www.globalpayments.com/" target = "_blank" >Global Payments DevOps Intern</a>
                </dt> 
                <dd className={`${prompt.className} ${styles.listDD}`}>
                    June 2024 - August 2024
                </dd>
    
                <dt className={`${archivo.className} ${styles.listDL}`}>
                    UGA Game Builders Club Projects Officer
                </dt>
                <dd className={`${prompt.className} ${styles.listDD}`}>
                    December 2023 - Present
                </dd>
            </dl>
        </div>

        <div className={styles.leaBot}>
            <div className={styles.erwinQuoteBlock}>
                <p className={`${prompt.className} ${styles.quote}`}>
                    "Because my soldiers do not buckle or yield when faced with the cruelty of this world! My soldiers push forward! My soldiers scream out! My soldiers RAGE!"
                </p>
                <p className={`${archivo.className} ${styles.quoter}`}>- Erwin Smith</p>
            </div>

            <div className={styles.benQuoteBlock}>
                <p className={`${prompt.className} ${styles.quote}`}>
                    "With great power comes great responsibility"
                </p>
                <p className={`${archivo.className} ${styles.quoter}`}>- Ben Parker</p>
            </div>
        </div>

        <hr className={styles.leaLine}></hr>
        <br></br>  
    </section>
    ); 
}