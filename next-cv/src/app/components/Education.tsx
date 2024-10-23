import Image from "next/image"
import styles from './Education.module.css'
import {Archivo_Black, Noto_Sans, Prompt} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const prompt = Prompt({subsets: ['latin'], weight: ["400", "300"]})
const archivo = Archivo_Black({subsets: ['latin'], weight: ["400"]})

export default function Education() {
    return(
        <section className={styles.infoBar}>
                <Image className={styles.profile} src="/images/headshot.jpg" alt="Headshot of Eric" width={250} height={250}></Image>
                
                <p className={`${prompt.className} ${styles.addressParagraph}`}>551 Starstream Street &#8226; Ohio, GA 300221</p>

                <div className={styles.infoBox}>
                    <h2 className={`${notosans.className} ${styles.h2}`}>Education</h2>
                    <p className={`${prompt.className} ${styles.boxText}`}>
                        University of Georgia | GPA 3.93
                        <br></br>
                        Franklin College of Arts & Sciences
                        <br></br>
                        Bachelors of Science in Computer Science
                    </p>
                </div>

                <div className={styles.infoBox}>
                    <h2 className={`${notosans.className} ${styles.h2}`}>Relevant Courses</h2>
                    <p className={styles.boxText}>Introduction to Computing and Programming, Software Development, Systems Programming, Discrete Mathematics, Introduction to Theory of Computing, Data Structures</p>
                </div>
        </section>
    );
}