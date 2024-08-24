import ICard from "../../classes/interfaces/ICard";
import style from "./card.module.scss"

interface CardProps extends React.ComponentPropsWithoutRef<"article"> {
    card : ICard;
    isActive : boolean;
    className? : string;
}

let Card : React.FC<CardProps> = ({card, className, isActive = false, ...rest}) => {
    return (
        <article className = {style["card"] +(isActive ? " " + style["card_active"] : "") + " " + (className || "")} {...rest}>
            <div className={style["card__inner"]}>
            <div className = {style["card__front"]}>
                <img className = {style["card__front-image"]} src = {card.getImageUrl()} alt={"Карта " + card.getName()}></img>
            </div>
            <div className = {style["card__back"]}>
                <img className = {style["card__back-image"]} src = {card.getReverseSideUrl()} alt={"Карта " + card.getName() + " задня сторона"}></img>
            </div>
            </div>
        </article>
    )
}

export default Card;