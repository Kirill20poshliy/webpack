import { states } from "../config/config";

class Background {
    private backgroundElement: HTMLElement;

    constructor() {
        this.backgroundElement = document.getElementById("background");
        this.backgroundElement.style.backgroundImage = `url('${states.summer}')`;
    }

    get currentBackground() {
        return this.backgroundElement.style.backgroundImage;
    }

    public setBackground(source: string) {
        this.backgroundElement.style.backgroundImage = `url('${source}')`
    }
}

export default new Background()