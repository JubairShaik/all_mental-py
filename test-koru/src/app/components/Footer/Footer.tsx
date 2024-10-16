// import styling
import styles from "./Footer.module.css";

// import component
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img
                className="w-6/12 md:w-3/12"
                src="/assets/logos/logo.png"
                alt="koru logo" />

            <section className="w-full flex flex-row justify-between my-4">
                <div className="footer__content">
                    <h4 className={styles.title}>
                        General
                    </h4>

                    <ul>
                        <Link className={styles.link} href="/about">
                            <li className="text-xs md:text-sm leading-relaxed">
                                About
                            </li>
                        </Link>
                        
                        <Link className={styles.link} href="/contact">
                            <li className="text-xs md:text-sm leading-relaxed">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="">
                    <h4 className={styles.title}>
                        Social
                    </h4>

                    <ul>
                        <Link className={styles.link} href="https://linkedin.com/in/lilymtle">
                            <li className="text-xs md:text-sm leading-relaxed">
                                LinkedIn
                            </li>
                        </Link>

                        <Link className={styles.link} href="https://github.com/lilymtle">
                            <li className="text-xs md:text-sm leading-relaxed">
                                GitHub
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="">
                    <h4 className={styles.title}>
                        Resources
                    </h4>

                    <ul>
                        <Link className={styles.link} href="https://mood-compass.vercel.app/">
                            <li className="text-xs md:text-sm leading-relaxed">
                                MoodCompass
                            </li>
                        </Link>
                    </ul>
                </div>
            </section>

            <div className="footer__wrapper w-full flex flex-col gap-1 md:flex-row md:justify-between">
                <p className="text-xs">
                    © 2024 Koru, All Rights Reserved.
                </p>

                <p className="text-xs">
                    Crafted with <span style={{color: "#FF7676"}}>♥</span> by Lily.
                </p>
            </div>
        </footer>
    );
};

export default Footer;