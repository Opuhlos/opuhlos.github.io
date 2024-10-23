import {Noto_Sans, Prompt} from 'next/font/google'
import styles from './Skills.module.css'

const notosans = Noto_Sans({subsets: ['latin']})
const prompt = Prompt({subsets: ['latin'], weight: ["400", "300"]})

export default function Skills() {
    return(
        <>
            <h2 className={`${notosans.className} ${styles.skill}`}>SKILLS</h2>

            <section className={styles.skillsGrid}>
                <div className={styles.column1}>
                    <h1 className={`${notosans.className} ${styles.category}`}>Frameworks</h1>

                    <ul className={`${prompt.className} ${styles.skills} list-disc`}>
                        <li>Amazon Web Services</li>
                        <li>Argo</li>
                        <li>Boto3</li>
                        <li>Docker</li>
                        <li>Hugo</li>
                        <li>Kubernetes</li>
                    </ul>
                </div>
                <div className={styles.column2}>
                    <h1 className={`${notosans.className} ${styles.category}`}>Software</h1>

                    <ul className={`${prompt.className} ${styles.skills} list-disc`}>
                        <li>Aseprite</li>
                        <li>Bitbucket</li>
                        <li>Blender</li>
                        <li>Emacs</li>
                        <li>MobaXterm</li>
                        <li>Github</li>
                        <li>Godot</li>
                        <li>Procreate</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </div>
                <div className={styles.column3}>
                    <h1 className={`${notosans.className} ${styles.category}`}>Languages</h1>

                    <ul className={`${prompt.className} ${styles.skills} list-disc`}>
                        <li>Python</li>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>C</li>
                        <li>CSS</li>
                        <li>HTML</li>
                        <li>GDScript</li>
                    </ul>
                </div>
                <div className={styles.column4}>
                    <h1 className={`${notosans.className} ${styles.category}`}>OS</h1>

                    <ul className={`${prompt.className} ${styles.skills} list-disc`}>
                        <li>Mac</li>
                        <li>Windows</li>
                        <li>Linux Debian 12</li>
                    </ul>
                </div>
            </section>
        </>
    );
}