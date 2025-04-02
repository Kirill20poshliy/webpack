class Player {
    private audioElement: HTMLAudioElement;

    constructor() {
        this.audioElement = document.getElementById("audio") as HTMLAudioElement;
    }

    get currentAudio() {
        return this.audioElement.src;
    }

    get currentVolume() {
        return this.audioElement.volume;
    }

    public setAudio(source: string) {
        this.audioElement.src = source;
    }

    public setVolume(value: string) {
        this.audioElement.volume = parseFloat(value);
    }

    public play() {
        this.audioElement.play();
    }

    public pause() {
        this.audioElement.pause();
    }

    public stop() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
    }

    public addEndedEvent(callback: () => void) {
        this.audioElement.addEventListener('ended', () => callback())
    }
}

export default new Player();