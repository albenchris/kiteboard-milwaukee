import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {


    return (
        <>
            <Nav />
            <div className={styles.container}>
                {/* <Header /> */}

                <main className={styles.main}>
                    {children}
                </main>

                <Footer />
            </div>
        </>
    );
}

export default Layout;
