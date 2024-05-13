import './App.css'
import {WillyWonka} from "./components/PropsComunication/WillyWonka.tsx";
import {WillyWonkaState} from "./components/StateComunication/WillyWonkaState.tsx";
import {WillyWonkaEvent} from "./components/EventCommunication/WillyWonka.tsx";

function App() {

  return (
      <>
          <h1>Props Communication</h1>
          <WillyWonka/>

          {/*<h1>State Communication</h1>
          <WillyWonkaState/>
          
          {/*<h1>Event Communication</h1>
          <WillyWonkaEvent/>*/}
      </>
  )
}

export default App
