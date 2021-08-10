import Link from 'next/link';

const Nav = () => {
    return (
        <nav>
            <div className='logo'>
                <h1>Kiteboard Milwaukee</h1>
            </div>
            <ul>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                {/* <li>
                    <Link href='/wind'>
                        Wind
                    </Link>
                </li> */}
                {/* <li>
                    <Link href='/lessons'>
                        Lessons
                    </Link>
                </li> */}
                {/* <li>
                    <Link href='/contact'>
                        Contact
                    </Link>
                </li> */}
                <li>
                    <Link href='https://www.adventurekiteboarding.com/'>
                        Shop
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
