import ICard from "./interfaces/ICard";

type SwappedCards = {
    firstCardIndex : number,
    secondCardIndex : number,
    deck : ICard[]
}

interface ICardDeck {
    getDeck() : ICard[];
    size() : number;

    shuffle() : this;
    slowShuffle() : Generator<SwappedCards, void, unknown>;

    setCommonReverseSide(imageUrl : string) : this;
    getCard(number : number) : ICard | undefined;
}

export default class CardDeck implements ICardDeck {  
    constructor(
        private deck : ICard[],
    ) { }

    public getDeck() : ICard[] {
        return this.deck;
    }

    public size() : number {
        return this.deck.length;
    }
    
    public shuffle() : this {
        for (let i = this.deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }

        return this;
    }

    public * slowShuffle() : Generator<SwappedCards, void, unknown> {
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

    public setCommonReverseSide(imageUrl : string) : this {
        for(let card of this.deck) {
            card.setReverseSideUrl(imageUrl);
        }

        return this;
    }

    public getCard(number: number): ICard{
        if (number < 0 || number >= this.deck.length) {
            throw new RangeError(`The card number ${number} is out of range. Valid range is between 0 and ${this.deck.length - 1}.`);
        }

        return this.deck[number];
    }
}