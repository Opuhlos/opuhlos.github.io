import Image from "next/image"
import styles from './Contact.module.css'
import {Noto_Sans_TC, Noto_Sans} from 'next/font/google'

const notosans = Noto_Sans({subsets: ['latin']})
const tc = Noto_Sans_TC({subsets: ['latin']})


export default function Contact() {
    return(
        <div className={styles.contactContainer}>

            <div className={styles.emailFormCard}>
                <form className={styles.oneCol} action="mailto: ehn75545@uga.edu method=post">
                    <div className={styles.centerElement}> <p className={`${notosans.className} ${styles.reachText}`}>Please reach out to me at</p> </div>

                    <div className={styles.centerElement}> <p className={`${notosans.className} ${styles.emailText}`}>ehn75545@uga.edu </p> </div>

                    <input className={styles.input} type="text" id="name" name="name" placeholder="Full Name"></input>
                    
                    <input className={`${tc.className} ${styles.inputMail}`} type="email" id="email" name="email" placeholder="Your Email"></input>

                    <textarea className={`${tc.className} ${styles.message}`} id="message" name="emailcontent" placeholder="Leave a message" ></textarea>

                    <div className={`${styles.centerElement}`}><input className={`${tc.className} ${styles.inputButton} ${styles.centerElement}`} type="submit" value="SUBMIT" ></input></div>
                </form>
            </div>

            <div className={styles.imageDecorationContainer}>
                {/* <img src="assets/orv.png" alt="Omniscient Reader's Viewpoint Panel" width="700px"> */}
                <Image src="/images/orv.png" alt="Omniscient Reader's Viewpoint Panel" width={700} height={320}></Image>
                
                <div className={styles.imageBottom}>
                    <p className={`${tc.className} ${styles.imageDecorationText}`}>551 Starstream Street &#8226; Ohio, GA 300221 | 770-365-7455</p>
                    <p className={`${tc.className} ${styles.imageDecorationText}`}>&copy; Omniscient Reader's Viewpoint</p>
                </div>
            </div>

    </div>
    );
}