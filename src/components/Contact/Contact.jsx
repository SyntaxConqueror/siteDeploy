import styles from './contact.module.css'
import {useState} from "react";

export const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        alert("Message was sent!");
        setName('');
        setMessage('');
        setPhone('');
        setEmail('');
    }

    return (
        <div id="contact" className={styles.contact__container}>
            <div className={styles.contact__title} style={{}}>Якщо ви маєте бажання, ви можете легко зв'язатися з нами, заповнивши форму</div>
            <form className={styles.contact__form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder={"Ім'я"}
                    required
                    min={5}
                    max={50}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder={"Електронна пошта"}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="tel"
                    placeholder={"Телефон"}
                    required
                    pattern="[0-9]{12}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder={"Повідомлення"}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" style={{marginBottom: "1em"}}>Відправити</button>
            </form>
        </div>
    )
}