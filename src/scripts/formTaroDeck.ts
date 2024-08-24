import Card from "../classes/Card";
import CardDeck from "../classes/Deck";

import back             from"../assets/TarotDeck/reverse-side.jpg"

import fool             from "../assets/TarotDeck/TheMajorArcana/0-the-Fool.jpg";
import magician         from "../assets/TarotDeck/TheMajorArcana/1-the-magician.jpg";
import high_priestess   from "../assets/TarotDeck/TheMajorArcana/2-the-high-priestess.jpg";
import empress          from "../assets/TarotDeck/TheMajorArcana/3-the-empress.jpg";
import emperor          from "../assets/TarotDeck/TheMajorArcana/4-the-emperor.jpg";
import heirophant       from "../assets/TarotDeck/TheMajorArcana/5-the-heirophant.jpg";
import lovers           from "../assets/TarotDeck/TheMajorArcana/6-the-lovers.jpg";
import chariot          from "../assets/TarotDeck/TheMajorArcana/7-the-chariot.jpg";
import strength         from "../assets/TarotDeck/TheMajorArcana/8-strength.jpg";
import hermit           from "../assets/TarotDeck/TheMajorArcana/9-the-hermit.jpg";
import wheel            from "../assets/TarotDeck/TheMajorArcana/10-wheel-of-fortune.jpg";
import justice          from "../assets/TarotDeck/TheMajorArcana/11-justice.jpg";
import hanged           from "../assets/TarotDeck/TheMajorArcana/12-the-hanged-man.jpg";
import death            from "../assets/TarotDeck/TheMajorArcana/13-death.jpg";
import temperance       from "../assets/TarotDeck/TheMajorArcana/14-temperance.jpg";
import devil            from "../assets/TarotDeck/TheMajorArcana/15-the-devil.jpg";
import tower            from "../assets/TarotDeck/TheMajorArcana/16-the-tower.jpg";
import star             from "../assets/TarotDeck/TheMajorArcana/17-the-star.jpg";
import moon             from "../assets/TarotDeck/TheMajorArcana/18-the-moon.jpg";
import sun              from "../assets/TarotDeck/TheMajorArcana/19-the-sun.jpg";
import judgement        from "../assets/TarotDeck/TheMajorArcana/20-judgement.jpg";
import world            from "../assets/TarotDeck/TheMajorArcana/21-the-world.jpg";



export default function FormTaroDeck() : CardDeck {
    let cards : Card[] = [
      new Card("Блазень",         fool ),
      new Card("Чарівник",        magician),
      new Card("Верховна Жриця",  high_priestess),
      new Card("Імператриця",     empress),
      new Card("Імператор",       emperor),
      new Card("Верховний Жрець", heirophant),
      new Card("Закохані",        lovers),
      new Card("Колісниця",       chariot),
      new Card("Сила",            strength),
      new Card("Путівник",        hermit),
      new Card("Колесо Фортуни",  wheel),
      new Card("Справедливість",  justice),
      new Card("Повішений",       hanged),
      new Card("Смерть",          death),
      new Card("Помірність",      temperance),
      new Card("Диявол",          devil),
      new Card("Вежа",            tower),
      new Card("Зірка",           star),
      new Card("Місяць",          moon),
      new Card("Сонце",           sun),
      new Card("Суд",             judgement),
      new Card("Світ",            world),
  
  
    ] 
     
     let deck = new CardDeck(cards);
  
     return deck.setCommonReverseSide(back);
  }
  