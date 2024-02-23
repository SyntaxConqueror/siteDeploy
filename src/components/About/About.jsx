import styles from './about.module.css'
export const About = () => {

    return (
        <div id="about" className={styles.about__container}>
            <div className={styles.about__media}>
                <img className={styles.about__img} width={800} src="https://syntaxconqueror.github.io/siteDeploy/team.png" alt="Team"/>
            </div>
            <div className={styles.about__content}>
                <span style={{fontSize: 32, marginBottom: "1em"}}>ПРО НАС</span>
                <span className={styles.about__content__item}>Ми - команда ентузіастів, що вірить у силу коротких, але значущих повідомлень</span>
                <span className={styles.about__content__item}>Ми вирішили створити цей сервіс з метою відповіді на потребу сучасного світу у зручному та ефективному інструменті для спілкування.</span>
                <span className={styles.about__content__item}>Ми віримо, що кожна думка має значення, а кожен користувач повинен мати можливість висловитися без перешкод.</span>
                <span className={styles.about__content__item}>Ми відчуваємо велику відповідальність за забезпечення безпеки та конфіденційності наших користувачів, тому розробляємо наш сервіс з урахуванням найсучасніших технологій захисту даних.</span>
            </div>
        </div>
    )
}