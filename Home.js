let network_error = document.getElementById("network_error");
let Home_sec=document.getElementById("Home_sec")
let showall = document.getElementsByClassName("showall");
let showall2 = document.getElementsByClassName("showall2");
let showall3 = document.getElementsByClassName("showall3");
let Artist_sec1 = document.getElementById("Artistsec1");
let Artist_sec2 = document.getElementById("Artistsec2");
let Artist_sec3 = document.getElementById("Artistsec3");
let space = document.getElementById("space_col");
let space2 = document.getElementById("space_col2");
let space3 = document.getElementById("space_col3");
let space4 = document.getElementById("space_col4");
let space5 = document.getElementById("space_col5");
let Album_Sec1 = document.getElementById("Album_Sec1");
let Album_Sec2 = document.getElementById("Album_Sec2");
let Album_Sec3 = document.getElementById("Album_Sec3");
let Editor_Sec = document.getElementById("Editor_Sec");
let Charts_Sec = document.getElementById("Charts_Sec");
let Radio_Sec1 = document.getElementById("Radio_Sec1");
let Radio_Sec2 = document.getElementById("Radio_Sec2");
let Radio_Sec3 = document.getElementById("Radio_Sec3");
let main_sec = document.getElementById("main_sec");
let AllCond = document.getElementById("AllCond");
let Signup_btn = document.getElementById("Signup_btn");
let Login_btn = document.getElementById("Login_btn");
let home_icon = document.getElementById("home_icon");
let Search_icon = document.getElementById("Search_icon");
let Mic_icon = document.getElementById("Mic_icon");
let Browse_sec = document.getElementById("Browse_sec");
let Side_section = document.getElementById("Side_section");
let side_sec = document.getElementById("side_sec");
let poster = document.getElementById("poster");
let song = document.getElementById("song");
let song_Sec = document.getElementById("song_Sec");
let ArtistName = document.getElementById("Artist");
let albumName = document.getElementById("albumName");
let SongName = document.getElementById("SongName");
let progress = document.getElementById("progress");
let Ctrlicon = document.getElementById("Ctrlicon");
let Music_controls = document.getElementById("Music_controls");
let suggestionsList = document.getElementById("suggestions");
let dark = document.getElementById("dark");
//   let USER=document.getElementById("USER")
let Pritam = document.getElementById("Pritam");
let Arjit = document.getElementById("Arjit");
let Sachin = document.getElementById("Sachin");
let ARRahaman = document.getElementById("ARRahaman");
let Vishal = document.getElementById("Vishal");
let Atif = document.getElementById("Atif");
let Anirudh = document.getElementById("Anirudh");
let PritamMusic = document.getElementById("PritamMusic");
let ArjitMusic = document.getElementById("ArjitMusic");
let SachinMusic = document.getElementById("SachinMusic");
let ArRahamanMusic = document.getElementById("ArRahamanMusic");
let VishalMusic = document.getElementById("VishalMusic");
let AtifMusic = document.getElementById("AtifMusic");
let AnirudhMusic = document.getElementById("AnirudhMusic");
let Artist_1 = document.getElementById("Artist_1");
let Artist_2 = document.getElementById("Artist_2");
let Artist_3 = document.getElementById("Artist_3");
let Artist_4 = document.getElementById("Artist_4");
let Artist_5 = document.getElementById("Artist_5");
let Artist_6 = document.getElementById("Artist_6");
let Artist_7 = document.getElementById("Artist_7");
let h3Elements = document.querySelectorAll("h3");
let songAudio = document.getElementById("songAudio");
let Addtolist = document.getElementById("Addtolist");
let songList = document.getElementById("songList");
let Navabar=document.getElementById("Navabar")
let playlist_btn = document.getElementById("playlist_btn");
let sign_free_btn = document.getElementById("sign_free_btn");
playlist_btn.addEventListener("click", () => {
  document.getElementById("songList").style.display = "block";

  Artist_sec1.style.display = "none";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Album_Sec1.style.display = "none";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec1.style.display = "none";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  space.style.display = "none";
  space2.style.display = "none";
  space3.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
  Browse_sec.style.display = "none";
});

if(navigator.onLine)
{
  network_error.style.display="none"
}
else
{
  network_error.style.display="inline"
  Home_sec.style.display="none"
  Navabar.style.display="none"
  document.getElementById("Free_Time").style.display="none"
  // Artist_sec1.style.display = "none";
  // Artist_sec2.style.display = "none";
  // Artist_sec3.style.display = "none";
  // Album_Sec1.style.display = "none";
  // Album_Sec2.style.display = "none";
  // Album_Sec3.style.display = "none";
  // Radio_Sec1.style.display = "none";
  // Radio_Sec2.style.display = "none";
  // Radio_Sec3.style.display = "none";
  // Charts_Sec.style.display = "none";
  // Editor_Sec.style.display = "none";
  // space.style.display = "none";
  // space2.style.display = "none";
  // space3.style.display = "none";
  // space4.style.display = "none";
  // space5.style.display = "none";
  // Browse_sec.style.display = "none";
  // main_sec.style.display="none"

}








showall[0].addEventListener("click", () => {
  Artist_sec2.style.display = "flex";
  Artist_sec3.style.display = "flex";
  Album_Sec1.style.display = "none";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec1.style.display = "none";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  space2.style.display = "none";
  space3.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
  // main_sec.style.height = "60%";
  Side_section.style.height = "58%";
  // AllCond.style.display="flex"
});
showall2[0].addEventListener("click", () => {
  Album_Sec2.style.display = "flex";
  Album_Sec3.style.display = "flex";
  Artist_sec1.style.display = "none";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Radio_Sec1.style.display = "none";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  space.style.display = "none";
  space3.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  // main_sec.style.height = "55%";
  Side_section.style.height = "52%";
});
showall3[0].addEventListener("click", () => {
  Artist_sec1.style.display = "none";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Album_Sec1.style.display = "none";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec2.style.display = "flex";
  Radio_Sec3.style.display = "flex";
  space.style.display = "none";
  space2.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  // main_sec.style.height = "60%";
  Side_section.style.height = "56%";
});
// Login_btn.addEventListener("click", () => {
//   window.open("./index4.html","_self");
// });
// Signup_btn.addEventListener("click", () => {
//   window.open("./index5.html","_self");
  
// });
Signup_btn.addEventListener("click", () => {
  // Replace the current history entry so that the user cannot go back
  window.history.replaceState(null, null, './index5.html');

  // Navigate to index5.html
  window.location.href = "./index5.html";
});

Login_btn.addEventListener("click", () => {
  // Replace the current history entry so the user can't go back
  window.history.replaceState(null, null, './index4.html');

  // Navigate to index4.html
  window.location.href = "./index4.html";
});


home_icon.addEventListener("click", () => {
  Artist_sec1.style.display = "flex";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Album_Sec1.style.display = "flex";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec1.style.display = "flex";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  Charts_Sec.style.display = "flex";
  Editor_Sec.style.display = "flex";
  space.style.display = "flex";
  space2.style.display = "flex";
  space3.style.display = "flex";
  space4.style.display = "flex";
  space5.style.display = "flex";
  Browse_sec.style.display = "none";
  Pritam.style.display = "block";
  AnirudhMusic.style.display = "none";
  PritamMusic.style.display = "none";
  AtifMusic.style.display = "none";
  VishalMusic.style.display = "none";
  ArRahamanMusic.style.display = "none";
  SachinMusic.style.display = "none";
  ArjitMusic.style.display = "none";
});

Search_icon.addEventListener("click", () => {
  Browse_sec.style.display = "grid";
  Artist_sec1.style.display = "none";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Album_Sec1.style.display = "none";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec1.style.display = "none";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  space.style.display = "none";
  space2.style.display = "none";
  space3.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
});

//------------------------------------------------LOGIN PERSON------------------------------------------------

let songs = [];
let currentSongIndex = 0;
let isLooping = false;
let isShuffling = false;
let freeAccess = false; // Tracks whether free access is enabled
let skipCount = 0;
const maxSkips = 3; // Maximum allowed skips without completing a song

// // Fetch and load song data
async function fetchSongs() {
  const response = await fetch("https://vybbii-api-iu8p.onrender.com/songs");
  const data = await response.json();
  songs = data;
  loadSong(currentSongIndex); // Load the first song
}

// Load a song by index
function loadSong(index) {
  const song = songs[index];
  songAudio.src = song.audiourl;
  poster.src = song.img;
  document.getElementById("SongName").textContent = `Song: ${song.title}`;
  document.getElementById("Artist").innerText = `Artist: ${song.artist}`;
  document.getElementById("albumName").textContent = `Album: ${song.album}`;

  songAudio.onloadedmetadata = function () {
    progress.max = songAudio.duration;
    updateDurationTime(songAudio.duration);
  };

  songAudio.ontimeupdate = function () {
    progress.value = songAudio.currentTime;
    updateTimeDisplay(songAudio.currentTime);
  };
}

// Update current time display
function updateTimeDisplay(currentTime) {
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  document.getElementById("currentTime").innerText = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Update total song duration
function updateDurationTime(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);
  document.getElementById("durationTime").innerText = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Play or pause the song
function playpause() {
  if (Ctrlicon.classList.contains("fa-pause")) {
    songAudio.pause();
    Ctrlicon.classList.remove("fa-pause");
    Ctrlicon.classList.add("fa-play");
    alert("Song Paused !");
  } else {
    songAudio.play();
    Ctrlicon.classList.add("fa-pause");
    Ctrlicon.classList.remove("fa-play");
    alert("Song Playing !");
  }
}

// Handle progress bar input change
progress.addEventListener("input", function () {
  songAudio.currentTime = progress.value;
});

// Go to the previous song
function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  songAudio.play();
  alert(`Playing Previous song :${songs[currentSongIndex].title}`);
}

// Go to the next song (shuffle if enabled)
function nextSong() {
  if (songAudio.currentTime < songAudio.duration / 2) {
    // If the song is skipped before halfway
    skipCount++;
    if (skipCount > maxSkips) {
      alert(
        `You've reached the maximum number of skips (${maxSkips}). Please complete a song before skipping.`
      );
      return; // Block the skip action
    } else {
      alert(`Skips remaining: ${maxSkips - skipCount}`);
    }
  } else {
    skipCount = 0; // Reset skip count if the song is completed
  }

  if (isShuffling) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(currentSongIndex);
  songAudio.play();
  alert(`Playing next song: ${songs[currentSongIndex].title}`);
}

// Toggle the loop functionality
function toggleLoop() {
  isLooping = !isLooping;
  songAudio.loop = isLooping;
  document.getElementById("Loop").classList.toggle("active", isLooping);
  alert(`Loop is now ${isLooping ? "enabled" : "disabled"}.`);
}

// Toggle shuffle mode
function toggleShuffle() {
  isShuffling = !isShuffling;
  document.getElementById("shuffle").classList.toggle("active", isShuffling);
  alert(`Shuffle is now ${isShuffling ? "enabled" : "disabled"}.`);
}

// Song ends - handle next song or loop
songAudio.onended = function () {
  skipCount = 0; // Reset skip count when a song finishes naturally
  if (isLooping) {
    songAudio.play(); // Replay the same song if loop is on
  } else {
    nextSong(); // Go to the next song when the current song ends
  }
};

// Fetch song suggestions based on the query
async function getSuggestions() {
  const query = searchInput.value.trim().toLowerCase();
  if (query.length === 0) {
    suggestionsList.innerHTML = ""; // Clear suggestions if search is empty
    return;
  }

  // Filter songs based on the query
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query) ||
      song.artist.toLowerCase().includes(query) ||
      song.album.toLowerCase().includes(query)
  );

  suggestionsList.innerHTML = ""; // Clear previous suggestions

  if (filteredSongs.length > 0) {
    filteredSongs.forEach((song) => {
      const li = document.createElement("li");
      li.innerHTML = `
                        <img src="${song.img}" alt="${song.title}">
                        <span>${song.title}</span> - <span>${song.artist}</span> - <span>${song.album}</span>
                    `;
      li.onclick = () =>
        playSong(song.audiourl, song.img, song.title, song.artist, song.album); // Play song when clicked
      suggestionsList.appendChild(li);
    });
  } else {
    suggestionsList.innerHTML = `<li>No results found</li>`;
  }
}


// Function to play the song from the clicked suggestion
function playSong(audiourl, img, title, artist, album) {
  // Hide suggestions and show the song section
  suggestionsList.style.display = "none";
  Artist_sec1.style.display = "none";
  Artist_sec2.style.display = "none";
  Artist_sec3.style.display = "none";
  Album_Sec1.style.display = "none";
  Album_Sec2.style.display = "none";
  Album_Sec3.style.display = "none";
  Radio_Sec1.style.display = "none";
  Radio_Sec2.style.display = "none";
  Radio_Sec3.style.display = "none";
  Charts_Sec.style.display = "none";
  Editor_Sec.style.display = "none";
  space.style.display = "none";
  space2.style.display = "none";
  space3.style.display = "none";
  space4.style.display = "none";
  space5.style.display = "none";
  Browse_sec.style.display = "none";
  song_Sec.style.display = "block";
  Music_controls.style.display = "flex";
  poster.style.display = "block";
  document.getElementById("song_Sec").style.display = "block";

  // Update song information
  songAudio.src = audiourl; // Set the audio URL
  poster.src = img; // Set the album image
  document.getElementById("SongName").textContent = `Song: ${title}`;
  document.getElementById("Artist").innerText = `Artist: ${artist}`;
  document.getElementById("albumName").textContent = `Album: ${album}`;

  // Play the song
  songAudio.play();

  // Change the control icon to pause
  Ctrlicon.classList.remove("fa-play");
  Ctrlicon.classList.add("fa-pause");

  // Initialize the progress bar
  songAudio.onloadedmetadata = function () {
    progress.max = songAudio.duration;
    updateDurationTime(songAudio.duration);
  };

  // Update the progress bar
  songAudio.ontimeupdate = function () {
    progress.value = songAudio.currentTime;
    updateTimeDisplay(songAudio.currentTime);
  };
}

// Initialize the app by fetching the song data
fetchSongs();

let searchedSong;
Addtolist.addEventListener("click", function () {
  // Get the current or searched song
  const currentSong = searchedSong || songs[currentSongIndex];

  // Check if the song is already in the list to prevent duplicates
  const existingSong = Array.from(songList.children).find(
    (item) => item.dataset.songId === currentSong.id.toString() // Use a unique ID for the song
  );

  if (existingSong) {
    alert("This song is already in your playlist!");
    return;
  }

  // Create a container for the song
  const songContainer = document.createElement("div");
  songContainer.classList.add("song-item");
  songContainer.dataset.songId = currentSong.id; // Add a unique identifier for the song

  // Create an image element for the song
  const img = document.createElement("img");
  img.src = currentSong.img;
  img.alt = currentSong.title;
  img.style.width = "50px";
  img.style.height = "50px";

  // Create a title element for the song
  const title = document.createElement("span");
  title.textContent = currentSong.title;
  title.style.marginLeft = "10px";

  // Append the image and title to the container
  songContainer.appendChild(img);
  songContainer.appendChild(title);

  // Append the container to the song list
  songList.appendChild(songContainer);

  alert(`${currentSong.title} has been added to your playlist!`);
  
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "en-US"; // Set language for recognition
recognition.interimResults = false; // Finalize results
recognition.maxAlternatives = 1;

Mic_icon.addEventListener("click", () => {
  recognition.start(); // Start voice recognition

  recognition.addEventListener("result", async (event) => {
    const speechToText = event.results[0][0].transcript.toLowerCase().trim();
    alert(`You said: "${speechToText}"`);

    await fetchSongs();

    const matchedSongs = songs.filter(
      (song) =>
        song.title.toLowerCase().includes(speechToText) ||
        (song.album && song.album.toLowerCase().includes(speechToText)) ||
        (song.artist && song.artist.toLowerCase().includes(speechToText))
    );

    if (matchedSongs.length > 0) {
      if (matchedSongs.length === 1) {
        // Play the only matched song
        playSong(matchedSongs[0].audiourl, matchedSongs[0]);
      } else {
        // Handle multiple matches
        let songList = matchedSongs
          .map((song, index) => `${index + 1}. ${song.title}`)
          .join("\n");
        let choice = parseInt(
          prompt(
            `Multiple songs found:\n${songList}\nEnter the number to play:`
          ),
          10
        );

        if (!isNaN(choice) && choice > 0 && choice <= matchedSongs.length) {
          const selectedSong = matchedSongs[choice - 1];
          playSong(selectedSong.audiourl, selectedSong);
        } else {
          alert("Invalid choice. No song played.");
        }
      }
    } else {
      alert(
        `No matching song or album found for "${speechToText}". Try again.`
      );
    }
  });

  recognition.addEventListener("error", (event) => {
    alert(`Error occurred: ${event.error}`);
  });

  // Fetch songs from the API
  async function fetchSongs() {
    try {
      const response = await fetch(
        "https://vybbii-api-iu8p.onrender.com/songs"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      songs = await response.json();
    } catch (error) {
      console.error("Error fetching songs:", error);
      alert("Error fetching songs from the API.");
    }
  }

  // Play the selected song and update UI
  function playSong(audiourl, songDetails) {
    songAudio.src = audiourl;
    songAudio.load();
    songAudio.play();
    alert(`Playing: ${songDetails.title}`);

    // Hide sections and update details
    hideSections();
    updateSongDetails(songDetails);
  }

  // Function to hide sections
  function hideSections() {
    Artist_sec1.style.display = "none";
    Artist_sec2.style.display = "none";
    Artist_sec3.style.display = "none";
    Album_Sec1.style.display = "none";
    Album_Sec2.style.display = "none";
    Album_Sec3.style.display = "none";
    Radio_Sec1.style.display = "none";
    Radio_Sec2.style.display = "none";
    Radio_Sec3.style.display = "none";
    Charts_Sec.style.display = "none";
    Editor_Sec.style.display = "none";
    space.style.display = "none";
    space2.style.display = "none";
    space3.style.display = "none";
    space4.style.display = "none";
    space5.style.display = "none";
    poster.style.display = "block";
    song_Sec.style.display = "block";
    Music_controls.style.display = "flex";
    progress.style.display = "block";
  }

  // Function to update song details on UI
  function updateSongDetails(songDetails) {
    const { artist, album, title, img } = songDetails;

    // Update UI elements
    ArtistName.textContent = artist || "Unknown Artist";
    albumName.textContent = album || "Unknown Album";
    SongName.textContent = title || "Unknown Song";
    poster.src = img || "default_image_path.jpg"; // Provide a default image path if `img` is undefined
  }
});


// Guest-specific variables
let songsPlayed = 0; // Tracks the number of songs played by the guest
const maxGuestSongs = 3; // Maximum allowed songs for guest users
const isGuest = true; // Set this flag to `true` for guest users, `false` for logged-in users

// Fetch and load song data
async function Guestsongs() {
  try {
    const response = await fetch("https://vybbii-api-iu8p.onrender.com/songs");
    const data = await response.json();
    songs = data;
    loadSong(currentSongIndex); // Load the first song
  } catch (error) {
    console.error("Failed to fetch songs:", error);
  }
}

// Load a song by index
function loadSong(index) {
  if (isGuest && songsPlayed >= maxGuestSongs) {
    alert(
      "As a guest, you can only play up to 2 songs. Please sign up to continue."
    );
    window.location.href = "index5.html"; // Redirect to the signup page
    return; // Prevent further playback
  }

  const song = songs[index];
  songAudio.src = song.audiourl;
  poster.src = song.img;
  document.getElementById("SongName").textContent = `Song: ${song.title}`;
  document.getElementById("Artist").innerText = `Artist: ${song.artist}`;
  document.getElementById("albumName").textContent = `Album: ${song.album}`;

  // Ensure metadata is loaded for duration updates
  songAudio.onloadedmetadata = function () {
    progress.max = songAudio.duration;
    updateDurationTime(songAudio.duration);
  };

  // Update progress bar during playback
  songAudio.ontimeupdate = function () {
    progress.value = songAudio.currentTime;
    updateTimeDisplay(songAudio.currentTime);
  };

  // Increment the songsPlayed counter for guests
  if (isGuest) {
    songsPlayed++;
  }
}

// Update current time display
function updateTimeDisplay(currentTime) {
  let minutes = Math.floor(currentTime / 60);
  let seconds = Math.floor(currentTime % 60);
  document.getElementById("currentTime").innerText = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Update total song duration
function updateDurationTime(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);
  document.getElementById("durationTime").innerText = `${minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}

// Play or pause the song
function playpause() {
  if (Ctrlicon.classList.contains("fa-pause")) {
    songAudio.pause();
    Ctrlicon.classList.remove("fa-pause");
    Ctrlicon.classList.add("fa-play");
  } else {
    songAudio.play();
    Ctrlicon.classList.add("fa-pause");
    Ctrlicon.classList.remove("fa-play");
  }
}

// Handle progress bar input change
progress.addEventListener("input", function () {
  songAudio.currentTime = progress.value;
});

// Go to the previous song
function previousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  songAudio.play();
}

// Go to the next song (shuffle if enabled)
function nextSong() {
  if (songAudio.currentTime < songAudio.duration / 2) {
    // If the song is skipped before halfway
    skipCount++;
    if (skipCount > maxSkips) {
      alert(
        `You've reached the maximum number of skips (${maxSkips}). Please complete a song before skipping.`
      );
      return; // Block the skip action
    } else {
      alert(`Skips remaining: ${maxSkips - skipCount}`);
    }
  } else {
    skipCount = 0; // Reset skip count if the song is completed
  }

  if (isShuffling) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(currentSongIndex);
  songAudio.play();
}

// Toggle the loop functionality
function toggleLoop() {
  isLooping = !isLooping;
  songAudio.loop = isLooping;
  document.getElementById("Loop").classList.toggle("active", isLooping);
}

// Toggle shuffle mode
function toggleShuffle() {
  isShuffling = !isShuffling;
  document.getElementById("shuffle").classList.toggle("active", isShuffling);
}

// Song ends - handle next song or loop
songAudio.onended = function () {
  skipCount = 0; // Reset skip count when a song finishes naturally
  if (isLooping) {
    songAudio.play(); // Replay the same song if loop is on
  } else {
    nextSong(); // Go to the next song when the current song ends
  }
};

// Initialize the app by fetching the song data
Guestsongs();
//--------------------------------------------------Freetrail--------------------------------------------

// // Fetch and load song data


// async function TimeSongs() {
//   const response = await fetch("https://vybbii-api-iu8p.onrender.com/songs");
//   const data = await response.json();
//   songs = data;
//   loadSong(currentSongIndex); // Load the first song
// }

// // Load a song by index
// function loadSong(index) {
//   const song = songs[index];
//   songAudio.src = song.audiourl;
//   poster.src = song.img;
//   document.getElementById("SongName").textContent = `Song: ${song.title}`;
//   document.getElementById("Artist").innerText = `Artist: ${song.artist}`;
//   document.getElementById("albumName").textContent = `Album: ${song.album}`;

//   songAudio.onloadedmetadata = function () {
//     progress.max = songAudio.duration;
//     updateDurationTime(songAudio.duration);
//   };

//   songAudio.ontimeupdate = function () {
//     progress.value = songAudio.currentTime;
//     updateTimeDisplay(songAudio.currentTime);
//   };
// }

// // Update current time display
// function updateTimeDisplay(currentTime) {
//   let minutes = Math.floor(currentTime / 60);
//   let seconds = Math.floor(currentTime % 60);
//   document.getElementById("currentTime").innerText = `${minutes}:${
//     seconds < 10 ? "0" + seconds : seconds
//   }`;
// }

// // Update total song duration
// function updateDurationTime(duration) {
//   let minutes = Math.floor(duration / 60);
//   let seconds = Math.floor(duration % 60);
//   document.getElementById("durationTime").innerText = `${minutes}:${
//     seconds < 10 ? "0" + seconds : seconds
//   }`;
// }

// // Play or pause the song
// function playpause() {
//   if (Ctrlicon.classList.contains("fa-pause")) {
//     songAudio.pause();
//     Ctrlicon.classList.remove("fa-pause");
//     Ctrlicon.classList.add("fa-play");
//     alert("Song Paused !");
//   } else {
//     songAudio.play();
//     Ctrlicon.classList.add("fa-pause");
//     Ctrlicon.classList.remove("fa-play");
//     alert("Song Playing !");
//   }
// }

// // Handle progress bar input change
// progress.addEventListener("input", function () {
//   songAudio.currentTime = progress.value;
// });

// // Go to the previous song
// function previousSong() {
//   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//   loadSong(currentSongIndex);
//   songAudio.play();
//   alert(`Playing Previous song :${songs[currentSongIndex].title}`);
// }

// // Go to the next song (shuffle if enabled)
// function nextSong() {
//   if (!freeAccess && songAudio.currentTime < songAudio.duration / 2) {
//     // If the song is skipped before halfway
//     skipCount++;
//     if (skipCount > maxSkips) {
//       alert(
//         `You've reached the maximum number of skips (${maxSkips}). Please complete a song before skipping.`
//       );
//       return; // Block the skip action
//     } else {
//       alert(`Skips remaining: ${maxSkips - skipCount}`);
//     }
//   } else {
//     skipCount = 0; // Reset skip count if the song is completed
//   }

//   if (isShuffling) {
//     currentSongIndex = Math.floor(Math.random() * songs.length);
//   } else {
//     currentSongIndex = (currentSongIndex + 1) % songs.length;
//   }
//   loadSong(currentSongIndex);
//   songAudio.play();
//   alert(`Playing next song: ${songs[currentSongIndex].title}`);
// }

// // Toggle the loop functionality
// function toggleLoop() {
//   isLooping = !isLooping;
//   songAudio.loop = isLooping;
//   document.getElementById("Loop").classList.toggle("active", isLooping);
//   alert(`Loop is now ${isLooping ? "enabled" : "disabled"}.`);
// }

// // Toggle shuffle mode
// function toggleShuffle() {
//   isShuffling = !isShuffling;
//   document.getElementById("shuffle").classList.toggle("active", isShuffling);
//   alert(`Shuffle is now ${isShuffling ? "enabled" : "disabled"}.`);
// }

// // Song ends - handle next song or loop
// songAudio.onended = function () {
//   skipCount = 0; // Reset skip count when a song finishes naturally
//   if (isLooping) {
//     songAudio.play(); // Replay the same song if loop is on
//   } else {
//     nextSong(); // Go to the next song when the current song ends
//   }
// }

//   TimeSongs();

// // // // Free access functionality
sign_free_btn.addEventListener("click", function () {
  freeAccess = true;
  alert("You have free access for 30 minutes!");
  
   
   setTimeout(() => {
     freeAccess = false;
     songAudio.pause(); // Pause the song
     alert("Free access has expired. Signup to continue!");
     window.location.href = "index5.html"; // Navigate to Signup page
   }, 60000); // 1 minute (60000 ms)
  window.open('./index3.html',"_self")
 });




// Initialize the app by fetching the song data


// Pritam.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   Music_controls.style.display="flex"
//   progress.style.display="inline"
//   PritamMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();


// });

// Arjit.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   ArjitMusic.style.display = "block";
//   space.style.display = "none";

//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });

// Sachin.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   // Arjit.style.display="none"
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   // Artist_2.style.display="none"
//   // Artist_2.style.display="none"
//   SachinMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });

// ARRahaman.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   // Arjit.style.display="none"
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   // Artist_2.style.display="none"
//   // Artist_2.style.display="none"
//   ArRahamanMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });

// Vishal.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   // Arjit.style.display="none"
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   // Artist_2.style.display="none"
//   // Artist_2.style.display="none"
//   VishalMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });

// Atif.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   // Arjit.style.display="none"
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   // Artist_2.style.display="none"
//   // Artist_2.style.display="none"
//   AtifMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });
// Anirudh.addEventListener("click", () => {
//   Artist_sec2.style.display = "none";
//   Artist_sec3.style.display = "none";
//   Album_Sec1.style.display = "none";
//   Album_Sec2.style.display = "none";
//   Album_Sec3.style.display = "none";
//   Radio_Sec1.style.display = "none";
//   Radio_Sec2.style.display = "none";
//   Radio_Sec3.style.display = "none";
//   Charts_Sec.style.display = "none";
//   Editor_Sec.style.display = "none";
//   space2.style.display = "none";
//   space3.style.display = "none";
//   space4.style.display = "none";
//   space5.style.display = "none";
//   // Arjit.style.display="none"
//   Artist_1.style.display = "none";
//   Artist_2.style.display = "none";
//   Artist_3.style.display = "none";
//   Artist_4.style.display = "none";
//   Artist_5.style.display = "none";
//   Artist_6.style.display = "none";
//   Artist_7.style.display = "none";
//   // Artist_2.style.display="none"
//   // Artist_2.style.display="none"
//   AnirudhMusic.style.display = "block";
//   space.style.display = "none";
//   async function Songs() {
//     try {
//       const response = await fetch(
//         "https://vybbii-api-iu8p.onrender.com/songs"
//       );
//       const songs = await response.json();

//       // Attach click event to each existing h3 element
//       // h3Elements.style.display="block"
//       // div.style.display="inline"
//       h3Elements.forEach((h3) => {
//         const matchingSong = songs.find(
//           (song) => song.title === h3.textContent.trim()
//         );

//         // If a matching song is found, bind it to the click event
//         if (matchingSong) {
//           h3.addEventListener("click", () => playSong(matchingSong.audiourl));
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching songs:", error);
//     }
//   }

//   function playSong(audiourl) {
//     songAudio.src = audiourl;
//     songAudio.load();
//     songAudio.play();
//   }

//   // Initialize by fetching songs and setting up events
//   Songs();
// });
