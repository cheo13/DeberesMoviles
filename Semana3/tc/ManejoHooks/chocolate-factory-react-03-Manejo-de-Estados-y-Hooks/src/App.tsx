import './App.css'
import CandyCreator from "./components/CandyCreator.tsx";
import {Card} from "antd";

function App() {

  return (
    <>

        <Card title="Candy Creator" bordered={false} style={{ width: 300 }}>
            <CandyCreator />
        </Card>

    </>
  )
}

export default App

// Un contador para utilizar el Hook useState y useEffect con un 
// botón que permita al gerente aumentar la producción y ver como 
// aumenta la ganancia. 

