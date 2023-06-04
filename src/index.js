import sunAudio from "./assets/sounds/summer.mp3"
import rainAudio from "./assets/sounds/rain.mp3"
import snowAudio from "./assets/sounds/winter.mp3"
import "./index.scss"

const mainBackgroundImage = document.querySelector(".bg-image")

const sun = document.querySelector(".sun")
const rain = document.querySelector(".rain")
const snow = document.querySelector(".snow")

const AllIcons = document.querySelectorAll(".item-icon")

const sunIcon = document.querySelector(".item-icon.sun")
const rainIcon = document.querySelector(".item-icon.rain")
const snowIcon = document.querySelector(".item-icon.snow")

const audioSun = new Audio(sunAudio)
const audioRain = new Audio(rainAudio)
const audioSnow = new Audio(snowAudio)

const AllSound = [audioSun,audioRain,audioSnow]

const sliderSound = document.querySelector(".weather-slider")

console.log(sliderSound.value)

const playPauseAudio = (audio, icon) => {
    if (!icon.classList.contains("active")) {
        AllSound.forEach(element => element.pause())
        AllIcons.forEach(element => element.classList.remove("active")) 
        audio.play()
        icon.classList.add("active")
    } else {
        icon.classList.remove("active")
        audio.pause()
    } 
}

const changeBg = (string) => {
    mainBackgroundImage.classList.remove("sun","rain","snow")
    mainBackgroundImage.classList.add(string)
}

sun.onclick = () => {
    playPauseAudio(audioSun, sunIcon)
    changeBg("sun")
}
rain.onclick = () => {
    playPauseAudio(audioRain, rainIcon)
    changeBg("rain")
}
snow.onclick = () => {
    playPauseAudio(audioSnow, snowIcon)
    changeBg("snow")
}

sliderSound.onchange = () => {
    AllSound.forEach(element => element.volume = (sliderSound.value / 100))
}