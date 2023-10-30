import { Link } from 'react-router-dom'
import styles from './styled.module.css'

function Button({children}) {
    return <button className={styles.buttons}>{children}</button>;
  }

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.Nav}>
                <Link to='/'>
                    <Button>Главная</Button>
                </Link>
                <Link to='/chat'>
                    <Button>Чат</Button>
                </Link>
                <Link to='/api'>
                    <Button>Погода сейчас</Button>
                </Link>
            </nav>
        </div>
    )
}

export default Header