import ICard from "./interfaces/ICard";

export default class Card implements ICard {

    constructor(
        private name : string, 
        private imageUrl : string,
        private reverseSideUrl? : string,
    ) {}

    getName() {
        return this.name;
    }

    setName(name : string) {
        this.name = name;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    setImageUrl(image : string) {
        this.imageUrl = image;
    }

    getReverseSideUrl() : string | undefined {
        return this.reverseSideUrl;
    }

    setReverseSideUrl(imageUrl: string) {
        this.reverseSideUrl = imageUrl;
    }

}