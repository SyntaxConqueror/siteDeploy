import styles from './menu.module.css'
export const Menu = () => {
    return (
        <div className={styles.menu__container}>
            <ul className={styles.menu}>
                <li className={styles.menu__item}>
                    <a href="#main">Головна</a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#target">Наша мета</a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#about">Про нас</a>
                </li>
                <li className={styles.menu__item}>
                    <a href="#contact">Контакт</a>
                </li>
            </ul>
        </div>
    )
}