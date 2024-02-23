import styles from './header.module.css';
import {Logo} from "../Logo/Logo.jsx";
import {Menu} from "../Menu/Menu.jsx";

export const Header = () => {

    return (
        <header className={styles.header}>
            <Logo></Logo>
            <Menu></Menu>
        </header>
    )
}