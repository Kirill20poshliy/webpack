import "./index.scss";
import React, { FC, useState } from "react";
import summerBg from "./assets/summer-bg.jpg";
import rainyBg from "./assets/rainy-bg.jpg";
import winterBg from "./assets/winter-bg.jpg";
import cloudRainIcon from "./assets/icons/cloud-rain.svg";
import cloudSnowIcon from "./assets/icons/cloud-snow.svg";
import sunIcon from "./assets/icons/sun.svg";
import AudioButton from "./components/AudioButton";
import summerAudio from "./assets/sounds/summer.mp3"
import rainAudio from "./assets/sounds/rain.mp3"
import winterAudio from "./assets/sounds/winter.mp3"

const App: FC = () => {
    const [bg, setBg] = useState<string>(summerBg)
    const [volume, setVolume] = useState<string>("0.5")
    const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>()

    const audioHandler = (curPic: string, curAudioRef: HTMLAudioElement): void => {
        if (currentAudio && (curAudioRef.src !== currentAudio.src)) {
            currentAudio.pause()
            currentAudio.currentTime  = 0
            setBg(curPic)
        }
        setCurrentAudio(curAudioRef)
    }

    return (
        <main className="background" style={{backgroundImage: `url('${bg}')`}}>
            <div className="content">
                <h1>Weather sounds</h1>
                <div className="buttons">
                    <AudioButton 
                        bg={summerBg} 
                        icon={sunIcon}
                        resource={summerAudio} 
                        volume={volume}
                        currentTrack={currentAudio}
                        onClick={(value: HTMLAudioElement) => audioHandler(
                            summerBg,
                            value
                        )}/>
                    <AudioButton 
                        bg={rainyBg} 
                        icon={cloudRainIcon} 
                        resource={rainAudio}
                        volume={volume}
                        currentTrack={currentAudio}
                        onClick={(value: HTMLAudioElement) => audioHandler(
                            rainyBg,
                            value
                        )}/>
                    <AudioButton 
                        bg={winterBg} 
                        icon={cloudSnowIcon} 
                        resource={winterAudio}
                        volume={volume}
                        currentTrack={currentAudio}
                        onClick={(value: HTMLAudioElement) => audioHandler(
                            winterBg,
                            value
                        )}/>
                </div>
                <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    defaultValue={`${volume}`} 
                    onChange={(e) => setVolume(e.currentTarget.value)}/>
            </div>
        </main>
    )
}

export default App
