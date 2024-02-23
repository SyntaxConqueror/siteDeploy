import styles from './logo.module.css'
export const Logo = () => {

    return (
        <div className={styles.logo}>
            <img width={400} src="../../../public/Logo.svg" alt="Logo image"/>
        </div>
    )
}