import styles from './main.module.css'

export const Main = () => {

    return (
        <div id="main" className={styles.main__container}>
            <div className={styles.main__media}>
                <img className={styles.main__img} src="../../../main.webp" alt=""/>
            </div>
            <div className={styles.main__content}>
                <span className={styles.main__phrase} style={{fontSize: 32, textAlign: "center"}}>Ласкаво просимо до нашого проєкту!</span>
                <span className={styles.main__phrase} style={{fontSize: 20, float: "right", textAlign: "center"}}>Де кожен символ рахується, а кожен думка може знайти свій голос.</span>
                <span className={styles.main__phrase} style={{fontSize: 20,float: "left", textAlign: "center"}}>Приєднуйтеся до нашої спільноти, де ви можете ділитися своїми думками, враженнями та новинами в обмежених кількістю символів.</span>
                <span className={styles.main__phrase} style={{fontSize: 20,float: "right", textAlign: "center"}}>Підніміть свій голос у світі коротких, але потужних повідомлень!</span>
            </div>
        </div>
    )
}