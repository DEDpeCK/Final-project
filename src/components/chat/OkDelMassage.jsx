import style from './styles.module.css'

const OkDelMassage = (props) => {
    return (
        <>
            <input
                maxLength={150}
                className={style.InputMassageStyling}
                value={props.Value}
                onChange={props.HandleChange}
                placeholder={props.UserName ? "Сообщение" : "Для начала войдите в аккаунт!"}
                readOnly={!props.UserName}
            />
            <button
                    className={props.Value !== "" ? style.ButtonOkMassageStyling : style.ButtonOkMassageStyling1}
                    onClick={props.HanleButton}>
                    <span className={style.StylingTitle}>
                        {">"}
                    </span>
                </button>
            {props.UserName && (
                <button onClick={props.HandleDeleteFull} className={style.ButtonDeleteFullStyling}>Очистить чат</button>
            )}
        </>
    )
}

export default OkDelMassage