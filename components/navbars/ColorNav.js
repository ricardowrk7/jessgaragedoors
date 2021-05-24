import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ColorNav = () => {
    const [focus, setFocus] = useState(false);
    const router = useRouter();
    const wrapperRef = useRef(null);

    const menuItems = [
        {
            name: "Home",
            link: '/'
        },
        // {
        //     name: "About",
        //     link: '/about'
        // },
        {
            name: "Residential",
            link: '/services/residential'
        },
        {
            name: "Commercial",
            link: '/services/commercial'
        },
        {
            name: "Contact",
            link: '/contact'
        }
    ]

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setFocus(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

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
                        <li onClick={() => setFocus('services')}>
                            SERVICES <i className="fa fa-angle-down" id="not-italic" style={{color: '#fff'}}/>
                            {focus === 'services' &&
                                <div className="service-box" ref={wrapperRef}>
                                    <Link href="/services/residential" className="link-text-color-width"><p className="link-text-color">Residential</p></Link>
                                    <Link href="/services/commercial" className="link-text-color-width"><p className="link-text-color">Commercial</p></Link>
                                </div>
                            }
                        </li>
                        <Link href="/contact">
                            <li className="mobile-move">CONTACT</li>
                        </Link>
                    </ul>
                    <div className="menu-bars" onClick={() => setFocus('mobile')}>
                        <i className="fa fa-bars" style={{fontStyle: 'normal'}} />
                        {focus === 'mobile' &&
                            <div className="mobile-menu" ref={wrapperRef}>
                                {menuItems.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Link href={item.link}>
                                            <div className="menu-item-box">
                                            <p>{item.name}</p>
                                            </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ColorNav;