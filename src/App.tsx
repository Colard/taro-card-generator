import CardComponent from "./components/Card/Card"
import './styles/global.scss'
import './styles/reset.scss'
import FormTaroDeck from './scripts/formTaroDeck';
import Deck from "./components/Deck/Deck";


function App() {
  
  let deck = FormTaroDeck();
  //for(let swipeInfo of deck.slowShuffle()) {
  //  console.log(swipeInfo);
  // }

  return (
    <>
      <Deck deck = {deck}/>
    </>
  )
}

export default App
