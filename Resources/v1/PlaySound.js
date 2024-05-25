import { Audio } from "expo-av";

const playSound = (soundObject) => {
  soundObject
    .playAsync()
    .then(async () => {
      setTimeout(() => {
        soundObject.unloadAsync();
      }, 5000);
    })
    .catch((error) => {
    });
};

const playAudio = (file, duration) => {
  setTimeout(function () {
    const soundObject = new Audio.Sound();
    try {
      soundObject.loadAsync(file, {
        shouldPlay: true,
      });        
      playSound(soundObject);
    } catch (error) {
    }
  }, duration);
};

export { playAudio };
