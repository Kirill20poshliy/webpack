import './index.scss';
import player from './utils/player';
import { SwitchButton } from './utils/switchButton';

// Управление уровнем звука
const volumeRange = document.getElementById("volume");

const onChangeVolume = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    player.setVolume(value);
} 

volumeRange.addEventListener('input', onChangeVolume);

// Управление воспроизведением
const summerBtn = new SwitchButton("summer");
const rainyBtn = new SwitchButton("rainy");
const winterBtn = new SwitchButton("winter");

const buttons = [summerBtn, rainyBtn, winterBtn]

const clickAction = (state: string) => {
    buttons.forEach(btn => {
        if (btn.buttonId !== state) {
            btn.deactivate()
        }
    })
}

summerBtn.addClickEvent(() => clickAction(summerBtn.buttonId))
rainyBtn.addClickEvent(() => clickAction(rainyBtn.buttonId))
winterBtn.addClickEvent(() => clickAction(winterBtn.buttonId))

const onAudioEnd = () => {
    buttons.forEach(btn => {
        if (btn.curStateAudio === player.currentAudio) {
            btn.deactivate()
        }
    })
}

player.addEndedEvent(() => onAudioEnd())