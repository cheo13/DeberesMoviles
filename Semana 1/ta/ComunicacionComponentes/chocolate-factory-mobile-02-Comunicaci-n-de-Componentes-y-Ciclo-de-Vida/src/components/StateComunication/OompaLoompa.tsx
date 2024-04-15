import { FC } from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onChildMessage: (message: string) => void;
}

export const OompaLoompaState: FC<OompaLoompaProps> = ({ orders, onChildMessage }) => {
    const sendMessageToParent = () => {

        onChildMessage("Message from child component!");
    };


    return (
        <div className="backgroundOompaLoompa"><h1 className="oompaLoompa">{orders}</h1>
            <button onClick={sendMessageToParent}>Send Message to Parent</button>
            <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
        </div>
    );
};