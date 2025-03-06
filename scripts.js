let placesToDonateTo = [
    ["https://irusa.org/middle-east/palestine/", "Palestine"],
    ["https://www.launchgood.com/communitypage/syria_1#!/community/syria_1/", "Syria"],
    ["https://sapa-usa.org/", "Sudan"],
    ["https://www.launchgood.com/v4/campaign/empowering_rohingya_children_through_education?", "Rohingyan Children"],
    ["https://www.launchgood.com/v4/campaign/mercy_bakery_yemen_5?src=internal_comm_page_support", "Yemen"],
    ["https://www.launchgood.com/v4/campaign/los_angeles_wildfires_emergency_2025?src=internal_comm_page", "Los Angeles Wildfire Relief"],
    ["https://www.launchgood.com/v4/campaign/fuel_your_health_building_a_free_clinic_in_uganda?src=", "a Ugandan Clinic"],
    ["https://www.launchgood.com/v4/campaign/palestine_mothers_and_babies?src=internal_discover", "Palestinian Mothers and Babies"]
  ];


  const removeMusic = () => {
    let video = document.querySelector("#video");
    let audioContext = new AudioContext();
  
    const audioNode = audioContext.createMediaElementSource(video);
    audioNode.connect(audioContext.destination);
  }
   
document.addEventListener('DOMContentLoaded', () => {
    let donationLink = document.querySelector("#donation-link");
    let num = Math.floor(Math.random() * placesToDonateTo.length);
    let message = placesToDonateTo[num][1];
    donationLink.textContent = message;
    donationLink.href = placesToDonateTo[num][0];
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hostname === "www.youtube.com") {
    removeMusic();
  }
});
