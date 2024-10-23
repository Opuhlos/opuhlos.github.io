import Image from "next/image"
import styles from './Projects.module.css'
import {Noto_Sans_TC, Noto_Sans} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const tc = Noto_Sans_TC({subsets: ['latin']})

export default function Projects() {
   return(
    <div className ={styles.gridContainer}>

    <div className={styles.threeCol}>

        <div className={styles.card}>
            <Image className={styles.cardImg} src="/images/Discard.png" alt="Discard pixel art" width={300} height={168.75}></Image>
            <div className={styles.projectTitleGrid}>
                <div className={`${tc.className} ${styles.projectTitleText}`}>DISCARD</div>
                <div className={`${tc.className} ${styles.projectDateText}`}> AUG - DEC 2023</div>
            </div>

            <div className={`${tc.className} ${styles.projectDescription}`}>
                <ul className="list-disc space-y-3">
                    <li>Collaborated with a team of six developers on a daily basis to develop a 2D pixel art, rogue-like, bullet hell game in Unity</li>
                    <li>Illustrated three modular tilesets and 70+ environmental and UI assets using Aseprite</li>
                    <li>Designed and animated aerial enemies, each with seven distinct animation states</li>
                </ul>
            </div>

            <div className={styles.cardBottom}>
                <a className={styles.buttonLink} href="https://0nehundred.itch.io/discard-1" target="_blank">
                    <div className={styles.button}>
                        <svg className={styles.playSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215"/></svg>   
                        <p className={`${tc.className} ${styles.playText}`}>PLAY</p>
                    </div>
                </a>
            </div>
        </div>

        <div className={styles.card}>
            <Image className={styles.cardImg} src="/images/to-see.png" alt="To See 3D models" width={300} height={168.75}></Image>
            <div className={styles.projectTitleGrid}>
                <div className={`${tc.className} ${styles.projectTitleText}`}>TO SEE</div>
                <div className={`${tc.className} ${styles.projectDateText}`}> JAN - MAY 2024</div>
            </div>

            <div className={`${tc.className} ${styles.projectDescription}`}>
                <ul className="list-disc space-y-3">
                    <li>Collaborated with a team of six developers on a daily basis to develop a 3D puzzle narrative driven game with stylized shaders in Godot</li>
                    <li>Modeled, textured, and implemented 3D tilesets, environmental set pieces, and props into the Godot workspace</li>
                </ul>
            </div>

            <div className={styles.cardBottom}>
                <a className={styles.buttonLink}  href="https://origin-nori.itch.io/to-see-demo" target="_blank">
                    <div className={styles.button}>
                        <svg className={styles.playSvg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M1.5 8a6.5 6.5 0 1 0 13 0a6.5 6.5 0 0 0-13 0m4.879-2.773l4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215"/></svg>   
                        <p className={`${tc.className} ${styles.playText}`}>PLAY</p>
                    </div>
                </a>
            </div>
        </div>
        
        <div className={styles.card}>
            <Image className={styles.cardImg} src="/images/shell.png" alt="screenshot of shell code" width={300} height={168.75}></Image>
            <div className={styles.projectTitleGrid}>
                <div className={`${tc.className} ${styles.projectTitleText}`}>UNIX SHELL</div>
                <div className={`${tc.className} ${styles.projectDateText}`}> NOVEMBER 2023</div>
            </div>

            <div className={`${tc.className} ${styles.projectDescription}`}>
                <ul className="list-disc space-y-3">
                    <li>Built a shell program in C capable of executing commands, changing directories, and file I/O redirection to deepen understanding of file I/O</li>
                </ul>
            </div>
        </div>  

    </div>

</div>
   );
}