"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import WalletConnect from '@/components/wallet/WalletConnect';

const links = [
    {
        title: "Home",
        path: "/", 
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    }
];

const Links = () => {
    const [open, setOpen] = useState(false);

    //temporary
    const sesssion = false;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link)=>(
                    <NavLink item={link} key={link.title} />
                ))}
                {sesssion ? (
                    <>
                        {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: "Login", path: "/login"}} />
                )}
                <WalletConnect />
            </div>
            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    <WalletConnect />
                </div>
            )}
        </div>
    );
};

export default Links;