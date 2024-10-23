import {Noto_Sans} from 'next/font/google'
import styles from './Footers.module.css'

const notosans = Noto_Sans({subsets: ['latin']})


export default function FixedFooter() {
    return(
        <footer className={styles.fixedFooter}> 
            <p> <a href="contact.html" className={`${notosans.className} ${styles.footerText}`} >&#10022; &copy; ERIC H NGUYEN &#10022;</a> </p>
        </footer>
    );
}