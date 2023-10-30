import style from './styles.module.css'
import Img from './IMAGE/мусор.png'

//Дочерний компонент отображаемый сам чат
const Chat = (props) => {
    return (
        <div className={style.Background}>
            <div className={style.ChatStyling}>
                <div className={style.TitlePrivateMassageStyling}>Личные сообщения</div>
                {props.Massage.map((el, i) => {
                    return (
                        <div className={style.MassageStyling} key={i}>
                            <span style={{ color: 'black' }}>{el}</span>
                            {props.UserName && (
                                <img
                                    className={style.DeleteMassageStyling}
                                    onClick={() => props.removeMassage(i)}
                                    src={Img}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
        
    );
}
// https://emojio.top/wp-content/uploads/imgemoji/lg/wastebasket-lg.png
export default Chat