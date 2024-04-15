import { FC, useState } from 'react';
import { OompaLoompaState } from "./OompaLoompa.tsx";

// WillyWonka is the parent component that manages the state of the orders
export const WillyWonkaState: FC = () => {

    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [childMessage, setChildMessage] = useState<string>("");

    const handleChildMessage = (message: string) => {

        setChildMessage(message);
    };
    return (
        <div className={'background'}>
            <h2>Willy Wonka</h2>
            <p>{orders}</p>
            <p>Child Message: {childMessage}</p>
            <OompaLoompaState orders={orders} onChildMessage={handleChildMessage} />
        </div>
    );
};
