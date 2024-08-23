import Card from './classes/Card';
import CardDeck from './classes/Deck'
import './styles/global.scss'
import './styles/reset.scss'

function FormTaroDeck() : CardDeck {
  let cards : Card[] = [
    new Card("Блазень",         "./assets/TarotDeck/TheMajorArcana/0-the-Fool.jpg"),
    new Card("Чарівник",        "./assets/TarotDeck/TheMajorArcana/1-the-magician.jpg"),
    new Card("Верховна Жриця",  "./assets/TarotDeck/TheMajorArcana/2-the-high-priestess.jpg"),
    new Card("Імператриця",     "./assets/TarotDeck/TheMajorArcana/3-the-empress.jpg"),
    new Card("Імператор",       "./assets/TarotDeck/TheMajorArcana/4-the-emperor.jpg"),
    new Card("Верховний Жрець", "./assets/TarotDeck/TheMajorArcana/5-the-heirophant.jpg"),
    new Card("Закохані",        "./assets/TarotDeck/TheMajorArcana/6-the-lovers.jpg"),
    new Card("Колісниця",       "./assets/TarotDeck/TheMajorArcana/7-the-chariot.jpg"),
    new Card("Сила",            "./assets/TarotDeck/TheMajorArcana/8-strength.jpg"),
    new Card("Путівник",        "./assets/TarotDeck/TheMajorArcana/9-the-hermit.jpg"),
    new Card("Колесо Фортуни",  "./assets/TarotDeck/TheMajorArcana/10-wheel-of-fortune.jpg"),
    new Card("Справедливість",  "./assets/TarotDeck/TheMajorArcana/11-justice.jpg"),
    new Card("Повішений",       "./assets/TarotDeck/TheMajorArcana/12-the-hanged-man.jpg"),
    new Card("Смерть",          "./assets/TarotDeck/TheMajorArcana/13-death.jpg"),
    new Card("Помірність",      "./assets/TarotDeck/TheMajorArcana/14-temperance.jpg"),
    new Card("Диявол",          "./assets/TarotDeck/TheMajorArcana/15-the-devil.jpg"),
    new Card("Вежа",            "./assets/TarotDeck/TheMajorArcana/16-the-tower.jpg"),
    new Card("Зірка",           "./assets/TarotDeck/TheMajorArcana/17-the-star.jpg"),
    new Card("Місяць",          "./assets/TarotDeck/TheMajorArcana/18-the-moon.jpg"),
    new Card("Сонце",           "./assets/TarotDeck/TheMajorArcana/19-the-sun.jpg"),
    new Card("Суд",             "./assets/TarotDeck/TheMajorArcana/20-judgement.jpg"),
    new Card("Світ",            "./assets/TarotDeck/TheMajorArcana/21-the-world.jpg"),


  ] 
   
   let deck = new CardDeck(cards);

   return deck.setCommonReverseSide("./assets/TarotDeck/reverse-side.jpg");
}

function App() {
  
  let deck = FormTaroDeck();
  for(let swipeInfo of deck.slowShuffle()) {
    console.log(swipeInfo);
  }

  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
