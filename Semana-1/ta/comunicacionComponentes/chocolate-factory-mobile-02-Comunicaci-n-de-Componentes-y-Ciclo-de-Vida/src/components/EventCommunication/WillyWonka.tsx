import { FC, useState } from 'react';
import { OompaLoompaEvent} from "./OompaLoompa.tsx";
import './WillyWonka.css';

// WillyWonka is the parent component that passes the event handler to the OompaLoompa component via props
export const WillyWonkaEvent: FC = () => {
    const [orders, setOrders] = useState<string>("Make more chocolates🍫🍫🍫!");
    const [childMessage, setChildMessage] = useState<string>("");

    const changeOrders = (): void => {
        setOrders("Make more candies 🍭🍭🍭!");
    };
    const handleChildMessage = (message: string): void => {
    
       // console.log("Message from child:", message);
       setChildMessage(message);
    };


    return (
        <div className='background'>
            <h1>Willy Wonka 🔊:</h1>
            <OompaLoompaEvent orders={orders} onOrderChange={changeOrders} onChildMessage={handleChildMessage}/>
            <h1>Child Message: {childMessage}</h1>
            {/*<OompaLoompaEvent orders={orders} onOrderChange={() => setOrders("Make more candies 🍭🍭🍭!")}/>*/}
        </div>
    );
}

    // let orders = "Make more chocolates 🍫🍫🍫!";
    //
    // const changeOrders = (): void => {
    //     orders = "Make more candies 🍭🍭🍭!";
    // };
