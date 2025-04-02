import summerImg from '../assets/summer-bg.jpg';
import rainyImg from '../assets/rainy-bg.jpg';
import winterImg from '../assets/winter-bg.jpg';
import summerIcon from '../assets/icons/sun.svg';
import rainIcon from '../assets/icons/cloud-rain.svg';
import snowIcon from '../assets/icons/cloud-snow.svg';
import pauseIcon from '../assets/icons/pause.svg';
import summerAudio from '../assets/sounds/summer.mp3';
import rainyAudio from '../assets/sounds/rain.mp3';
import winterAudio from '../assets/sounds/winter.mp3';

export const states = {
    summer: summerImg as string,
    rainy: rainyImg as string,
    winter: winterImg as string,
}

export const icons = {
    summer: summerIcon as string,
    rainy: rainIcon as string,
    winter: snowIcon as string,
    pause: pauseIcon as string,
}

export const media = {
    summer: summerAudio as string,
    rainy: rainyAudio as string,
    winter: winterAudio as string,
}