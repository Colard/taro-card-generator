import React from "react";
import CardDeck from "../../classes/Deck";
import Card from "../Card/Card";
import styles from "./Deck.module.scss"

interface DeckProps extends React.ComponentPropsWithoutRef<"div"> {
    deck: CardDeck;
}

let Deck : React.FC<DeckProps> = ({className, deck, ...rest}) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    return (
        <div 
        className={styles.deck + " " + (className || "")} 
        {...rest}
        >

            {deck.getDeck().map((el, index) => (
                <Card 
                    key={index}
                    className = {styles.deck__card} 
                    isActive = {hoveredIndex === index}
                    card={el}
                    style={{ zIndex: deck.size() - index }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                />
            ))}
            
        </div>
    )
}

export default Deck;