import styles from './target.module.css';
export const Target = () => {

    return (
        <div id="target" className={styles.global_target__container}>
            <div style={{textAlign: "center"}}>
                <span className={styles.target__content__item} style={{fontSize: 30, color: "white"}}>Наша мета полягає в створенні простої та доступної платформи</span>
            </div>
            <div className={styles.target__container}>
                <div className={styles.target__content}>
                    <span className={styles.target__content__item} style={{color: "#FB8500", fontSize: 25}}>Але це ще не все!</span>
                    <ul className={styles.target__content__item}>
                        <li className={styles.target__content__list__item}>Створення сприятливого середовища для обміну ідеями та думками</li>
                        <li className={styles.target__content__list__item}>Підтримка глобального спілкування та зв'язку</li>
                        <li className={styles.target__content__list__item}>Забезпечення простого та ефективного інструменту для відстеження актуальних подій</li>
                        <li className={styles.target__content__list__item}>Створення можливості для підтримки спільнот, тематичних груп та обговорень</li>
                        <li className={styles.target__content__list__item}>Заохочення та підтримка креативності та самовираження</li>
                    </ul>
                </div>
                <div className={styles.target__media}>
                    <img className={styles.target__img} src="../../../public/target.png" alt="Target"/>
                </div>
            </div>

        </div>
    )
}