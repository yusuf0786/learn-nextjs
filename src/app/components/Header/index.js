'use client';

import Logo from "./Logo";
import Menu from "./Menu";

export default function Header(props) {
    return <header>
        <Logo />
        <Menu {...props} />
        {props.children}
    </header>
}