import { icons, states, media } from "../config/config";
import player from "./player";
import background from "./background";

export class SwitchButton {
    private button: HTMLButtonElement;
    private isActive: boolean;
    private stateIcon: string;
    private stateAudio: string;
    private stateBackground: string;

    constructor(private readonly id: string) {
        this.button = document.getElementById(id) as HTMLButtonElement;
        this.isActive = false;
        this.stateIcon = icons[id as keyof typeof icons];
        this.stateAudio = media[this.id as keyof typeof media];
        this.stateBackground = states[id as keyof typeof states]
        this.setIcon(this.stateIcon);
        this.setBackground(this.stateBackground)
    }

    get buttonId() {
        return this.id
    }

    get curStateAudio() {
        return this.stateAudio
    }

    protected setBackground(source: string) {
        this.button.style.backgroundImage = `url('${source}')`;
    }

    protected setIcon(source: string) {
        const iconNode = this.button.getElementsByTagName("img")[0]
        iconNode.src = source
    }

    public deactivate() {
        this.isActive = false;
        this.setIcon(this.stateIcon);
    }

    public addClickEvent(callback?: () => void) {
        this.button.addEventListener('click', () => {
            background.setBackground(this.stateBackground);
            if (callback) {
                callback()
            }
            if (!this.isActive) {
                if (player.currentAudio !== this.stateAudio) {
                    player.stop();
                    player.setAudio(this.stateAudio);
                }
                player.play();
                this.setIcon(icons.pause);
                this.isActive = true;
            } else {
                player.pause();
                this.setIcon(this.stateIcon);
                this.isActive = false;
            }
        })
    }
}