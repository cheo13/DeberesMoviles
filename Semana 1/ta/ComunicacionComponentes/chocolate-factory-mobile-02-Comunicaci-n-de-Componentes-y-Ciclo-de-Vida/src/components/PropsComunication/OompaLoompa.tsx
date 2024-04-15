// OompaLoompa.tsx
import {FC} from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
}

export const OompaLoompa: FC<OompaLoompaProps> = ({ orders }) => {
    return <div className="backgroundOompaLoompa"><h1 className="oompaLoompa">{orders}</h1>
    <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
    </div>;
};