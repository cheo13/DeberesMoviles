import  { FC } from 'react';
import {OompaLoompa} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes orders to the OompaLoompas via props
export const WillyWonka: FC = () => {
    const orders: string = "Make more chocolates 🍫🍫!";
    return <div className='background'>
        <h1>Willy Wonka 🔊:</h1>
        <OompaLoompa orders={orders} />
        </div>
        ;
};

