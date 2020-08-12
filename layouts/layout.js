import Header from './../components/header';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Helium Akademi E-Sports Indonesia</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Header />
            {props.children}
    </div>
)

export default Layout;