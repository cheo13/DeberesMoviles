import  { FC } from 'react';
import {OompaLoompa} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes orders to the OompaLoompas via props
export const WillyWonka: FC = () => {
    const orders: string = "Make more chocolates 🍫🍫!";
    let childMessage: string = "";
    const handleChildMessage = (message: string) => {
        
        console.log("Arrived message:", message);
        childMessage = message;
    };


    return (
        <div className='background'>
        <h1>Willy Wonka 🔊:</h1>
        <OompaLoompa orders={orders} onChildMessage={handleChildMessage} />
        
        <h1>{childMessage && <p>Message from Child:{childMessage}</p>}</h1>
        </div>
    );
};

