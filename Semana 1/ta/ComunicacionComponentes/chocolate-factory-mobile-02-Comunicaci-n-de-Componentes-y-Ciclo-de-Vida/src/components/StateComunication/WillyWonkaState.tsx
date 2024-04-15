import  { FC, useState } from 'react';
import {OompaLoompaState} from "./OompaLoompa.tsx";

// WillyWonka is the parent component that manages the state of the orders
export const WillyWonkaState: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");

    return (
        <div className={
            'background'
        }>
            <h2>Willy Wonka</h2>
            <p>{orders}</p>
            <OompaLoompaState orders={orders}/>
        </div>
    );
};
