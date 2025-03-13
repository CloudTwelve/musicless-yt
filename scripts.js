document.addEventListener('DOMContentLoaded', () => {
    let donationLink = document.querySelector("#donation-link");
    let num = Math.floor(Math.random() * placesToDonateTo.length);
    let message = placesToDonateTo[num][1];
    donationLink.textContent = message;
    donationLink.href = placesToDonateTo[num][0];
});

document.addEventListener('DOMContentLoaded', () => {
  let shouldRemove = chrome.localStorage.get('musicless');
  if (window.location.hostname === "www.youtube.com" && shouldRemove) {
    removeMusic();
  }
});

const removeMusic = () => {
  let video = document.querySelector("#video");
  let audioContext = new AudioContext();

  const audioNode = audioContext.createMediaElementSource(video);
  audioNode.connect(audioContext.destination);

  let biquadFilter = audioContext.createBiquadFilter();
  biquadFilter.type = "highpass";
  biquadFilter.frequency.value = 1000;

  audioNode.connect(biquadFilter);
  biquadFilter.connect(audioContext.destination);

}
