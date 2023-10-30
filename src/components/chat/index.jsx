import { useEffect, useState } from 'react'
import style from './styles.module.css'
import { useLocalStorage } from '../../hook/useLocalStorage';
import OkDelMassage from './OkDelMassage';
import Chat from './Chat';

const Massage = () => {

    const [Massage, SetMassage] = useLocalStorage('CHAT', []);

    const [UserName] = useLocalStorage('USER-NAME');

    const LimitedUser = UserName.length > 10 ? UserName.slice(0, 8) + '...' : UserName;
    
    const [Value, SetValue] = useState("");

    const HandleChange = (event) => {
        SetValue(event.target.value)
    };

    const HanleButton = () => {
        const TrimValue = Value.trim();
        if (UserName && Value !== "" && TrimValue !== "") {
            SetMassage([...Massage, `${LimitedUser}: ${Value}`])
            SetValue("")
        }

        else if (!UserName) {
            SetMassage([...Massage])
        }
        else {
            SetMassage([...Massage])
            SetValue("")
        }
    };

    const HandleDeleteFull = () => {
        SetMassage([])
    };

    const removeMassage = (index) => {
        const isUserMessage = index < Massage.length && Massage[index].startsWith(LimitedUser);
        if (isUserMessage) {
            SetMassage(Massage.filter((_, i) => i !== index));
        }
    };

    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center' }}>
                <Chat
                    Massage={Massage}
                    SetMassage={SetMassage}
                    LimitedUser={LimitedUser}
                    UserName={UserName}
                    Value={Value}
                    removeMassage={removeMassage}
                />
                <OkDelMassage
                    HandleChange={HandleChange}
                    HanleButton={HanleButton}
                    HandleDeleteFull={HandleDeleteFull}
                    Value={Value}
                    SetValue={SetValue}
                    UserName={UserName}
                />
            </div>
        </>
    )
}

export default Massage