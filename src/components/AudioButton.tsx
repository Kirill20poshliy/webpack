import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import pauseIcon from "../assets/icons/pause.svg"

const AudioButton: FC<{
    bg: string, 
    icon: string,
    resource: string,
    volume: string,
    currentTrack?: HTMLAudioElement,
    onClick: (value: HTMLAudioElement) => void
}> = ({
    bg, 
    icon, 
    resource, 
    volume, 
    currentTrack, 
    onClick
}) => {
    const [isPlay, setIsPlay] =  useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (isPlay) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlay])

    useEffect(() => {
        if (currentTrack !== audioRef.current) {
            setIsPlay(false)
        }
    }, [currentTrack])

    useEffect(() => {
        audioRef.current.volume = Number(volume)
    }, [volume])

    return (
        <button 
            onClick={() => {
                onClick(audioRef.current)
                setIsPlay(!isPlay)
            }}  
            style={{backgroundImage: `url('${bg}')`}}
            className="btn">
                <audio ref={audioRef} src={resource}></audio>
                {!isPlay ? (
                    <img src={`${icon}`} />
                ) : (
                    <img src={`${pauseIcon}`} />
                )}
        </button>
    )
}

export default AudioButton
