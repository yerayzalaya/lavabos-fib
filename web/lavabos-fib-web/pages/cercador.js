import Head from 'next/head'
import Link from 'next/link'

const Cercador = () => {
    return (
        <div>
            <Head>
                <title>Lavabos FIB - Cercador</title>
            </Head>
            <Link href="/">Tornar a l'inici</Link>

            <form action="/action_page.php">

                <input id="paraula_clau" type="text" name="paraula_clau"/>
                <label htmlFor="paraula_clau">Paraula clau</label><br/><br/>
                <input id="edifici" type="text" name="edifici"/>
                <label htmlFor="edifici">Edifici</label><br/><br/>
                <input id="planta" type="text" name="planta"/>
                <label htmlFor="planta">Planta</label><br/><br/>
                <input id="sexe" type="text" name="sexe"/>
                <label htmlFor="sexe">Sexe</label><br/><br/>
                <input type="submit" value="Submit"/>

            </form>
        </div>

    )
}

export default Cercador