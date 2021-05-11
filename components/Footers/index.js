import React from 'react';
import Head from 'next/head';
import Icon from "@material-ui/core/Icon";
import Link from 'next/link';

const Footer = () => {
    const social = [
        {
            name: "fa-facebook",
            color: "#3b5998",
            link: "https://www.facebook.com/jessdoors614",
        },
        {
            name: "fa-twitter",
            color: "#1da1f2",
            link: "https://twitter.com/JesseMa30814879",
        },
        {
            name: "fa-instagram",
            color: "#262626",
            link: "https://www.instagram.com/jessgaragedoors/",
        },
        {
            name: "fa-linkedin",
            color: "#0077b5",
            link: "https://www.linkedin.com/in/jesse-maynard-4b8269211/",
        },
        {
            name: "fa-pinterest",
            color: "#bd081c",
            link: "https://www.pinterest.com/jessgaragedoorspataskala",
        },
    ]

    return (
        <React.Fragment>
            <Head>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="footer-container">
                <div className="footer-bottom">
                    <div className="footer-left">
                        <img src="/img/logo.png" alt="" className="logo-small"/>
                        <p id="subheader">{'@'}{new Date().getFullYear()} Jess Garage Doors INC</p>
                    </div>
                    <div className="footer-right">
                        <p>(614) 778-0235 Columbus</p>
                        <p><a href="/contact">EMAIL US</a></p>
                        <p><a href="/locations">OUR LOCATIONS</a></p>
                        <img src="/img/credit-card-icons.png" alt="" className="credit-img"/>
                        <p className="credit-blurb">All Major Credit Cards Accepted!</p>
                    </div>
                </div>
                <div className="social-footer">
                    {social.map((item, index) => {
                        return (
                            <Link href={item.link} key={index}>
                                <div style={{backgroundColor: item.color}} className="social-icon-2">
                                    <i className={`fa ${item.name}`} style={{color: "#fff", fontStyle: "normal", fontSize: "18px"}} />
                                    {/* <span className="material-icons">
                                    {item.name}
                                    </span> */}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;