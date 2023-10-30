import { Route, Switch } from 'react-router-dom'
import styles from './styled.module.css'
import Home from '../home'
import Api from '../api'
import Chat from '../chat'

const Main = () => {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/chat' component={Chat}/>
                <Route path='/api' component={Api}/>
            </Switch>
        </div>
    )
}

export default Main