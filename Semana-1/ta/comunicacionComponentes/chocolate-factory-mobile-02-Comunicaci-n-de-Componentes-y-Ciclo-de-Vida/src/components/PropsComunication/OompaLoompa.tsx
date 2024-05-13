// OompaLoompa.tsx
import { FC } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onChildMessage: (message: string) => void;
}

export const OompaLoompa: FC<OompaLoompaProps> = ({ orders, onChildMessage }) => {
    const sendMessageParent = () => {
        let message: string = 'HI FATHER!!!!';
        onChildMessage(message)
    };


    return(
    <div className="backgroundOompaLoompa"><h1 className="oompaLoompa">{orders}</h1>
        <button onClick={sendMessageParent}>Send Message to Parent</button>
        <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
    </div>
    );
};