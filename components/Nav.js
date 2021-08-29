import { useState } from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    const [navClass, setNavClass] = useState('closed');

    const burgerHandler = async () => {
        if (navClass === 'closed') await setNavClass('open');
        if (navClass === 'open') await setNavClass('closed');
        console.log('nav class:', navClass);


    };

    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logo}>
                <h1>Kiteboard Milwaukee</h1>
            </div>
            <ul className={
                navClass === 'open' ? navStyles.open : navStyles.closed
                // navClass
                }>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>

                <li>
                    <Link href='/wind'>
                        Wind
                    </Link>
                </li>

                <li>
                    <Link href='/lessons'>
                        Lessons
                    </Link>
                </li>

                <li>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </li>

                <li>
                    <Link href='https://www.adventurekiteboarding.com/'>
                        Shop
                    </Link>
                </li>
            </ul>


            <div
                className={navStyles.burger}
                onClick={burgerHandler}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

        </nav>

    );
}

export default Nav;
