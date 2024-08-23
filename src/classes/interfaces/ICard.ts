export default interface ICard {
    getName() : string;
    setName(name : string) : void;

    getImageUrl() : string;
    setImageUrl(imageUrl : string) : void;

    getReverseSideUrl() : string | undefined;
    setReverseSideUrl(imageUrl : string) : void;
}
