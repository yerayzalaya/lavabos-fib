import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title> Lavabos FIB</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Et donem la benvinguda als lavabos de la FIB!
                </h1>

                <h2>Navega per la pàgina</h2>
                <p><a href="cercador">Cercador</a></p>
                <p><a href="estadistiques">Estadistiques</a></p>
                <p><a href="reservori">Reservori</a></p>

                <sub>Created with love (and sweat) by ddanor and arraymalaya :)</sub>

            </main>
        </div>
    )
}