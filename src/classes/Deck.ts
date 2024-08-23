import ICard from "./interfaces/ICard";

type SwappedCards = {
    firstCardIndex : number,
    secondCardIndex : number,
    deck : ICard[]
}

interface ICardDeck {
    get getDeck() : ICard[];
    get size() : number;

    shuffle() : this;
    slowShuffle() : Generator<SwappedCards, void, unknown>;

    setCommonReverseSide(imageUrl : string) : this;
}

export default class CardDeck implements ICardDeck {  
    constructor(
        private deck : ICard[],
    ) { }

    get getDeck() : ICard[] {
        return this.deck;
    }

    get size() : number {
        return this.deck.length;
    }
    
    shuffle() : this {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }

        return this;
    }

    * slowShuffle() : Generator<SwappedCards, void, unknown> {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];

            yield {
                firstCardIndex : i,
                secondCardIndex : j,
                deck: this.deck,
            }
        }
    }

    setCommonReverseSide(imageUrl : string) : this {
        for(let card of this.deck) {
            card.setImageUrl(imageUrl);
        }

        return this;
    }
}