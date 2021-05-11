import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ColorNav = () => {
    const router = useRouter();

    return (
        <React.Fragment>
            <div className="nav-container">
                <div className="inner-nav">
                <div className="nav-left">
                    <p className="roboto-text">Same Day Service</p>
                    <button className="sales-btn" onClick={() => router.push('/contact')}>
                        CALL NOW 614-778-0235
                    </button>
                </div>
                <div className="nav-right">
                    <ul className="sans-text">
                        <Link href="/">
                            <li>HOME</li>
                        </Link>
                        <Link href="/about">
                            <li>ABOUT</li>
                        </Link>
                        <Link href="/services">
                            <li>SERVICES</li>
                        </Link>
                        <Link href="/contact">
                            <li>CONTACT</li>
                        </Link>
                    </ul>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorNav;