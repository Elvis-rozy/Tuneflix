const audioData = [
  {
    song_name: "Faded",
    artist_name: "Alan Walker",
    song_id: 0,
    artist_id: 1,
    song_image: "images/covers/music/alan-walker.jpg",
    active_image: "images/background/alan-walker.jpg",
    artist_image: "images/artists/omah_lay.jpg",
    song_group: "recommendations",
    song_info: "Alan Walker - Faded",
    audio_src: "music/Alan_Walker-Faded.mp3"
  },
  {
    song_name: "Promises",
    artist_name: "Calvin Harris ft Sam Smith",
    song_id: 1,
    artist_id: 2,
    song_image: "images/covers/music/calvin-smith.jpg",
    artist_image: "images/artists/smith1.jpg",
    song_group: "recommendations",
    song_info: "Calvin Harris ft Sam Smith - Promises",
    audio_src: "music/Calvin_Harris_ft_Sam_Smith-Promises.mp3"
  },
  {
    song_name: "Bad Habits",
    artist_name: "Ed Sheeran",
    song_id: 2,
    artist_id: 3,
    song_image: "images/covers/music/sheeran.jpg",
    artist_image: "images/artists/beyonce1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Bad Habits",
    audio_src: "music/Ed_Sheeran-Bad_Habits.mp3"
  },
  {
    song_name: "Reason",
    artist_name: "Omah Lay",
    song_id: 3,
    artist_id: 4,
    song_image: "images/covers/music/omah_lay.jpg",
    artist_image: "images/artists/beiber1.jpg",
    song_group: "recommendations",
    song_info: "Omah Lay - Reason",
    audio_src: "music/Omah_lay-Reason.mp3"
  },
  {
    song_name: "Shivers",
    artist_name: "Ed Sheeran",
    song_id: 4,
    artist_id: 5,
    song_image: "images/covers/music/sheeran2.jpg",
    artist_image: "images/artists/rema1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Shivers",
    audio_src: "music/Ed_Sheeran-Shivers.mp3"
  },
  {
    song_name: "Charm",
    artist_name: "Rema",
    song_id: 5,
    artist_id: 6,
    song_image: "images/covers/music/rema.jpg",
    artist_image: "images/artists/sheeran1.jpg",
    song_group: "recommendations",
    song_info: "Rema - Charm",
    audio_src: "music/Rema-Charm.mp3"
  },
  {
    song_name: "Man I Am",
    artist_name: "Sam Smith",
    song_id: 6,
    artist_id: 7,
    song_image: "images/covers/music/smith.jpg",
    artist_image: "images/artists/victony1.jpg",
    song_group: "recommendations",
    song_info: "Sam Smith - Man I Am",
    audio_src: "music/Sam_Smith-Man_I_Am.mp3"
  },
  {
    song_name: "Soweto",
    artist_name: "Victony",
    song_id: 7,
    artist_id: 8,
    song_image: "images/covers/music/victony.jpg",
    artist_image: "images/artists/stormzy1.jpg",
    song_group: "recommendations",
    song_info: "Victony Soweto remix",
    audio_src: "music/Soweto.mp3"
  },
  {
    song_name: "Mara",
    artist_name: "Rema",
    song_id: 8,
    artist_id: 9,
    song_image: "images/covers/music/rema2.jpg",
    artist_image: "images/artists/burna1.jpg",
    song_group: "recommendations",
    song_info: "Rema - Mara",
    audio_src: "music/Rema-Mara.mp3"
  },
  {
    song_name: "Own It",
    artist_name: "Stormzy ft Ed Sheeran and Burna Boy",
    song_id: 9,
    artist_id: 10,
    song_image: "images/covers/music/stormzy.jpg",
    artist_image: "images/artists/rihanna1.jpg",
    song_group: "recommendations",
    song_info: "Stormzy ft Ed Sheeran and Burna Boy Own It",
    audio_src: "music/Stormzy_ft_Ed_Sheeran_and_Burna_Boy-Own_It.mp3"
  },
  {
    song_name: "Dangerously",
    artist_name: "Ed Sheeran",
    song_id: 10,
    artist_id: 11,
    song_image: "images/covers/music/sheeran3.jpg",
    artist_image: "images/artists/selena1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Dangerously",
    audio_src: "music/Ed_Sheeran-Dangerously.mp3"
  }
];

const latestUploadsData = [
  {
    video_name: "Dungeons vs dragons",
    video_image: "images/covers/video/dungeons.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "9.5",
    video_info: "Dungeons vs dragons: final battle scene",
    video_src: "https://www.youtube.com/embed/l_Kr_oyZ1p8?si=oln2zIa0eyG0v_fP"
  },
  {
    video_name: "Blue beetle: first transformation",
    video_image: "images/covers/video/beetle.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "26min",
    video_id: 2,
    video_rating: "7.2",
    video_info: "Blue beetle: alien beetle first merge with host",
    video_src: "https://www.youtube.com/embed/g0x2kurmDlA?si=I4c6Df7r6VrTsAnz"
  },
  {
    video_name: "Supergirl vs zod",
    video_image: "images/covers/video/supergirl.jpeg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "16min",
    video_id: 3,
    video_rating: "7.7",
    video_info: "Supergirl vs zod: rage battle for earth",
    video_src: "https://www.youtube.com/embed/DTUcaDb-2r0?si=Pb_GUuyIXiUCxUld"
  },
  {
    video_name: "Urameshi yusuke vs toguro",
    video_image: "https://lh3.googleusercontent.com/blogger_img_proxy/AEn0k_s7gPE2AlyzDO9wRnykMa0a9YeS_yQFd8_SVH5e1wWGc4MiARr-pkdGIoqvGsYRmgnDu09KbM1Zs_Xnu3KU4Ab2ofxIA2E8jGPyfNV7srStg-de4uFJuc50KC8Bc5ArQb4StZ90twFH8u0u93U=w919-h516-p-k-no-nu",
    video_year: "2023",
    video_group: "HD",
    video_duration: "21min",
    video_id: 4,
    video_rating: "8.5",
    video_info: "Urameshi yusuke vs toguro awesome fight scene",
    video_src: "https://www.youtube.com/embed/M-ueftd5aJU?si=9MT2QJg6Kcndd4Ph"
  },
  {
    video_name: "Dracula untold: vlads vampires",
    video_image: "images/covers/video/dracula.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "31min",
    video_id: 5,
    video_rating: "8.5",
    video_info: "Dracula untold: vlads vampires vs the persian army",
    video_src: "https://www.youtube.com/embed/jtXEOk5DeQI?si=DAdUYN2E6jdaQpet"
  },
  {
    video_name: "Immortals: gods vs titans",
    video_image: "images/covers/video/immortals.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 6,
    video_rating: "7.9",
    video_info: "Immortals: epic battle, gods vs titans",
    video_src: "https://www.youtube.com/embed/kJvc-eDdEw8?si=g6e4WyIB9IyKiCyN"
  },
  {
    video_name: "Monster hunter",
    video_image: "images/covers/video/monsters.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 7,
    video_rating: "7.9",
    video_info: "Monster hunter: hunters vs diablos",
    video_src: "https://www.youtube.com/embed/uT5RGuglLbM?si=5SpoJ_GAX4CTr0hd"
  },
  {
    video_name: "Nezha vs Ao bing",
    video_image: "images/covers/video/nezha1.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 8,
    video_rating: "7.9",
    video_info: "Nezha vs Ao bing: epic battle",
    video_src: "https://www.youtube.com/embed/eGL2JdkbXT8?si=QDtHdQGomVawyLRj"
  },
  {
    video_name: "The witcher: battle scene",
    video_image: "images/covers/video/witcher.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 9,
    video_rating: "7.9",
    video_info: "The witcher: vesemir vs leshen",
    video_src: "https://www.youtube.com/embed/1MZC765U38Q?si=L2ukJ-cNKpSOnirJ"
  },
  {
    video_name: "Nezha vs Dragon son",
    video_image: "images/covers/video/nezha2.jpeg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 10,
    video_rating: "7.9",
    video_info: "Nezha vs Ao bing: nezha reborn",
    video_src: "https://www.youtube.com/embed/qFF6g4Q0H3g?si=P3K5p-nAKBVuPCTL"
  },
];
const mostWatchedVideoData = [
  {
    video_name: "Eternals vs kro the deviant",
    video_image: "images/covers/video/eternals.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "9.5",
    video_info: "Eternals vs kro the deviant",
    video_src: "https://www.youtube.com/embed/lR7nxIMgTy4?si=MYl5jG3uO4DXPBNp"
  },
  {
    video_name: "Undisputed Boyka Redemption",
    video_image: "images/covers/video/boyka.jpeg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "26min",
    video_id: 2,
    video_rating: "7.2",
    video_info: "Undisputed boyka battle scenes",
    video_src: "https://www.youtube.com/embed/U1gH6XekL_c?si=UOeDk2YTqu2ORjI1"
  },
  {
    video_name: "Moon knight scenes",
    video_image: "images/covers/video/moon.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "29min",
    video_id: 3,
    video_rating: "8.9",
    video_info: "Moon knight battle scenes compilation",
    video_src: "https://www.youtube.com/embed/p2rsb2alw_E?si=KcRLY87xuxclmxk0"
  },
  {
    video_name: "Gabimaru vs tensen",
    video_image: "images/covers/video/gabimaru.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "10min",
    video_id: 4,
    video_rating: "9.2",
    video_info: "Awesome anime battle scene",
    video_src: "https://www.youtube.com/embed/VD2CpPSWSWY?si=LvvU_yLinv6kS7P6"
  },
  {
    video_name: "Monster army vs knights",
    video_image: "images/covers/video/knights.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "16min",
    video_id: 5,
    video_rating: "7.7",
    video_info: "Monster army vs knights: battle for power",
    video_src: "https://www.youtube.com/embed/EBFGO9wbBS4?si=aRxok6bJ-GRFLdmS"
  },
  {
    video_name: "Warcraft: Durotan vs Gul' dan",
    video_image: "images/covers/video/warcraft.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "21min",
    video_id: 6,
    video_rating: "8.5",
    video_info: "Warcraft: War for control of the horde",
    video_src: "https://www.youtube.com/embed/7Ejd0CMgqIQ?si=oSsL_fA7-WlNZbAV"
  },
  {
    video_name: "Legolas vs Bolg",
    video_image: "images/covers/video/lotr.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "13min",
    video_id: 7,
    video_rating: "7.7",
    video_info: "Lord of the rings",
    video_src: "https://www.youtube.com/embed/VWG6N7G22Uc?si=9li2o-IinfsS_gbC"
  },
  {
    video_name: "The great wall: first battle",
    video_image: "images/covers/video/greatWall.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "17min",
    video_id: 8,
    video_rating: "8.6",
    video_info: "The great wall: first battle",
    video_src: "https://www.youtube.com/embed/qidtdvpzNao?si=UXeBsND0sSaf8s6y"
  },
  {
    video_name: "Stranger things: prison fight scene",
    video_image: "images/covers/video/stranger.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "31min",
    video_id: 9,
    video_rating: "8.5",
    video_info: "Stranger things: prison fight scene",
    video_src: "https://www.youtube.com/embed/StrWcKbZLYQ?si=CTlVnlgs9jlo7fJP"
  },
  {
    video_name: "Underworld: Lycans vs vampire",
    video_image: "images/covers/video/underworld.jpg",
    video_year: "2023",
    video_group: "4K",
    video_duration: "17min",
    video_id: 10,
    video_rating: "7.9",
    video_info: "Underworld: Lycans vs vampire",
    video_src: "https://www.youtube.com/embed/1CkC1-_8FzA?si=6VI7wU2BIGARCPTk"
    }
];

//All the html elements assigned to variables
/* eslint-disable no-unused-vars */
const button = document.querySelectorAll(".button"),
video = document.querySelector(".video"),
music_cards = document.querySelector(".music-arr"),
movie_cards = document.querySelector(".movie-arr"),
nav = document.querySelector(".nav-bar"),
top_movie_cards = document.querySelector(".top-movies-arr"),
artist_cards = document.querySelector(".artist-arr");

const movieSection = document.querySelector(".video-sect"),
topMovieSection = document.querySelector(".top-video-sect"),
video_links = document.querySelector(".video-links"),
aboutUs = document.querySelector(".aboutUs");

const music = document.querySelector(".music"),
songs = document.querySelector(".songs"),
top_image= document.querySelector(".playing"),
master_play= document.querySelector(".master-play");

const side_bar= document.querySelector(".side-bar");
const discover= document.querySelector(".discover");

const activeSongName= document.querySelector(".activeSongName"),
activeSongDesc= document.querySelector(".activeSongDesc");

const musicSection = document.querySelector(".new"),
searchResultSection = document.querySelector(".results"),
searchSection = document.querySelector(".search"),
textNote = document.querySelector(".text"),
artistSection = document.querySelector(".grid-col-small"),
sideBarSection = document.querySelector(".songs"),
videoSection = document.querySelector(".active-video"),
overlay = document.querySelector(".overlay"),
artist_details = document.querySelector(".artiste-details"),
artist_songs_section = document.querySelector(".artistOnlySongs"),
section = document.querySelectorAll(".sect"),
sectionB = document.querySelectorAll(".links li");

const discoverBtn = document.querySelector(".discovr"),
aboutBtn = document.querySelectorAll(".about"),
aboutSection = document.querySelector(".about-section"),
categories = document.querySelector(".categories");

const  waves = document.querySelector(".wave"),
details = document.querySelector(".details"),
icons = document.querySelector(".icons"),
bar = document.querySelector(".bar"),
volume = document.querySelector(".vol");

const artistInfoSection = document.querySelector(".artist-id"),
artistImage = document.querySelector(".artist-img"),
artistName = document.querySelector(".artistName"),
artistInfo = document.querySelector(".artistInfo");

const paragraph1 = document.querySelector(".parag"),
paragraph2 = document.querySelector(".paragh"),
paragraph3 = document.querySelector(".paragraph"),
team_heading = document.querySelector(".team-heading"),
norm_heading = document.querySelector(".norm-heading");

//All the html elements assigned to variables
let title = document.querySelector("#title"),
artist = document.querySelector("#artist"),
track_image = document.querySelector("#track_image"),
active_image = document.querySelector(".active-img"),
exit_icon = document.querySelector(".exit-icon"),
exit_con = document.querySelector(".exit-con");

let index = 0,
track = document.createElement("audio"),
playbtn = document.getElementById("play"),
icon = document.getElementById("icon"),
playico = document.getElementById("playico"),
prev = document.getElementById("prev"),
next = document.getElementById("next"),
wave = document.getElementsByClassName("wave")[0];

let currentStart = document.getElementById("current-start"),
currentEnd = document.getElementById("current-end"),
seek = document.getElementById("seek"),
bar2 = document.getElementById("bar2"),
dot = document.getElementsByClassName("dot")[0];

let vol_icon = document.getElementById("vol-icon"),
vol = document.getElementById("vol"),
vol_dot = document.getElementById("vol-dot"),
vol_bar= document.getElementsByClassName("vol-bar")[0];

let disc = document.getElementById("vid");

//DISCOVER link action controls
discoverBtn.onclick = ()=> {
  aboutSection.classList.remove("in-view");
  aboutSection.classList.add("reg-heit");
  discover.style.background = "#010812";
  side_bar.style.background = "#0b101c";

  master_play.style.display = "flex";
  waves.style.display = "flex";
  track_image.style.display = "block";
  details.style.display = "block";
  icons.style.display = "block";
  currentStart.style.display = "block";
  bar.style.display = "block";
  currentEnd.style.display = "block";
  volume.style.display = "block";

  categories.style.visibility = "visible";
  sideBarSection.style.visibility = "visible";
  top_image.style.visibility = "visible";
  music_cards.style.visibility = "visible";
  artist_cards.style.visibility = "visible";

  music_cards.style.filter = "blur(0)";
  movie_cards.style.filter = "blur(0)";
  top_movie_cards.style.filter = "blur(0)";
  artist_cards.style.filter = "blur(0)";
};

const contactSection = document.querySelector(".contact-sect"),
contactBtn = document.querySelector(".contact");

//ABOUT link action controls
aboutBtn.forEach((btn) => {
  btn.onclick = () => {
    aboutSection.classList.remove("reg-heit");
    contactSection.style.display = "none";

    aboutSection.classList.add("in-view");
    discover.style.background = "#0f0114";
    side_bar.style.background = "#000";

    master_play.style.display = "none";
    music_cards.style.filter = "blur("+6+"px)";
    artist_cards.style.filter = "blur("+6+"px)";

    movie_cards.style.filter = "blur("+6+"px)";
    top_movie_cards.style.filter = "blur("+6+"px)";

    waves.style.display = "none";
    track_image.style.display = "none";
    details.style.display = "none";
    icons.style.display = "none";
    currentStart.style.display = "none";
    bar.style.display = "none";
    currentEnd.style.display = "none";
    volume.style.display = "none";

    //categories.style.visibility = "hidden";
    sideBarSection.style.visibility = "hidden";
    top_image.style.visibility = "hidden";
  };
});

section.forEach((sect) => {
  sect.addEventListener("click", function () {
    section.forEach(sect => sect.classList.remove("active"));
    this.classList.add("active");
  });
});

sectionB.forEach((sect) => {
  sect.addEventListener("click", function () {
    sectionB.forEach(sect => sect.classList.remove("on"));
    this.classList.add("on");
  });
});

//Showing only Music related interface data
music.onclick=() =>{
  aboutSection.classList.remove("in-view");
  aboutSection.classList.add("reg-heit");
  discover.style.background = "#010812";
  side_bar.style.background = "#0b101c";

  master_play.style.display = "flex";
  waves.style.display = "flex";
  track_image.style.display = "block";
  details.style.display = "block";
  icons.style.display = "block";
  currentStart.style.display = "block";
  bar.style.display = "block";
  currentEnd.style.display = "block";
  volume.style.display = "block";

  categories.style.visibility = "visible";
  sideBarSection.style.visibility = "visible";
  top_image.style.visibility = "visible";
  music_cards.style.visibility = "visible";
  artist_cards.style.visibility = "visible";

  music_cards.style.display = "block";
  artist_cards.style.display = "block";
  master_play.style.display = "flex";
  top_image.style.display = "block";
  songs.style.display = "block";
  nav.style.display = "flex";

  //hiding all interface data relating to the video section and others
  music_cards.style.filter = "blur(0)";
  movie_cards.style.filter = "blur(0)";
  top_movie_cards.style.filter = "blur(0)";
  artist_cards.style.filter = "blur(0)";

  top_movie_cards.style.display = "none";
  movie_cards.style.display = "none";
  video_links.style.display = "none";
  aboutUs.style.display = "none";

  //adjusting height to contain all music data
  side_bar.classList.add("height-music");
  discover.classList.add("height-music");
};

//The function that displays video section
video.addEventListener("click", () => {
  track.pause();
  playbtn.src = "images/icons/play-fill.svg";
  wave.classList.remove("active2");

  //calling the display and play functions for the top videos
  displayMostWatchedVideoItem (mostWatchedVideoData);
  playMostWatchedVideo(mostWatchedVideoData);

  //calling the display and play functions for the videos
  displayLatestUploadsItem(latestUploadsData);
  playLatestUploadsVideo(latestUploadsData);

  aboutSection.classList.remove("in-view");
  aboutSection.classList.add("reg-heit");
  discover.style.background = "#010812";
  side_bar.style.background = "#0b101c";

  categories.style.visibility = "visible";
  sideBarSection.style.visibility = "visible";

  //hiding all interface data relating to the video section and others
  music_cards.style.filter = "blur(0)";
  movie_cards.style.filter = "blur(0)";
  top_movie_cards.style.filter = "blur(0)";
  artist_cards.style.filter = "blur(0)";

  music_cards.style.display = "none";
  artist_cards.style.display = "none";
  master_play.style.display = "none";
  top_image.style.display = "none";
  songs.style.display = "none";
  nav.style.display = "none";

  //displaying video related interface data
  top_movie_cards.style.display = "block";
  movie_cards.style.display = "block";
  video_links.style.display = "flex";
  aboutUs.style.display = "block";

  //adjusting height to contain all video data
  side_bar.classList.remove("height-music");
  discover.classList.remove("height-music");
});

//The function that displays TOPVIDEO SECTION
function displayMostWatchedVideoItem (videoitems) {
  let displayVideos = videoitems.map((item) => {
    return `<article id="${item.video_id}" class="release-cover rectgle video-height">
        <img id="${item.video_id}" class="topvidplay" onclick="playTopVideo()" src="images/icons/video-play.svg" alt="play icon">
        <img class="video-size" src=${item.video_image}  alt="">
        <div class="top">
          <h5 id="${item.video_id}">${item.video_name}</h5>
          <h5>${item.video_year}</h5>
        </div>
        <p class="item-text abs">${item.video_group}</p>
        <div class="bottom">
          <p class="item-text">${item.video_duration}</p>
          <p class="item-text">${item.video_rating}</p>
        </div>
      </article>`;
  });
  displayVideos = displayVideos.join("");
  topMovieSection.innerHTML = displayVideos;
}

//The function that plays  video from TOP VIDEOS Section
function playMostWatchedVideo (vid) {
  let indz = 0;
  Array.from(document.getElementsByClassName("topvidplay")).forEach((elem)=>{
    elem.addEventListener("click", (e) => {
      indz = e.target.id;
      videoSection.style.display = "flex";
      overlay.style.display = "flex";
      exit_con.style.display = "flex";
      indz -= 1;
      mainVideo.src = vid[indz].video_src;
    });
  });
}

//The function that displays NEW RELEASES section
function displayLatestUploadsItem (videoitems) {
  let displayVideos = videoitems.map((item) => {
    return `<article id="${item.video_id}" class="release-cover rectgle video-height">
        <img id="${item.video_id}" class="vidplay" onclick="playVideo()" src="images/icons/video-play.svg" alt="play icon">
        <img class="video-size" src="${item.video_image}" alt="">
        <div class="top">
          <h5 id="${item.video_id}">${item.video_name}</h5>
          <h5>${item.video_year}</h5>
        </div>
        <p class="item-text abs">${item.video_group}</p>
        <div class="bottom">
          <p class="item-text">${item.video_duration}</p>
          <p class="item-text">${item.video_rating}</p>
        </div>
      </article>`;
  });
  displayVideos = displayVideos.join("");
  movieSection.innerHTML = displayVideos;
}

//The function that plays  video from POPULAR VIDEOS Section
function playLatestUploadsVideo (vid) {
  let indz = 0;
  Array.from(document.getElementsByClassName("vidplay")).forEach((elem)=>{
    elem.addEventListener("click", (e) => {
      indz = e.target.id;
      indz -= 1;
      videoSection.style.display = "flex";
      overlay.style.display = "flex";
      exit_con.style.display = "flex";
      mainVideo.src = vid[indz].video_src;
    });
  });
}

//function that displays music search results
function displaySearchItem(songItems) {
  let displaySongs = songItems.map((item) => {
    return `<article id="${item.song_id}" class="release-cover rectgle">
        <img id="${item.song_id}" class="ico" src="images/icons/video-play.svg" alt="play icon">
        <img class="cover-img" src=${item.song_image}  alt="">
        <h5  class="h5"  id="${item.song_name}">${item.song_name}</h5>
        <p class="item-text">${item.song_info}</p>
      </article>`;
  });
  displaySongs = displaySongs.join("");
  searchSection.innerHTML = displaySongs;
}

//The function that displays NEW RELEASES section
function displayNewReleasesItem(newsongItems) {
  let displaySongs = newsongItems.map((item) => {
    return `<article id="${item.song_id}" class="release-cover rectgle">
        <img id="${item.song_id}" class="icon" src="images/icons/video-play.svg" alt="play icon">
        <img class="cover-img" src=${item.song_image}  alt="">
        <h5  class="h5"  id="${item.song_name}">${item.song_name}</h5>
        <p class="item-text">${item.song_info}</p>
      </article>`;
  });
  //After returning the html article,
  //it joins it to the next item on the array to be displayed.
  //If no next item, it stops.
  displaySongs = displaySongs.join("");
  //renders the array in the html file section "musicSection"
  musicSection.innerHTML = displaySongs;
}

//The function that displays ARTIST section
function displayArtistItem(artistItems) {
  let displayArtists = artistItems.map((item) => {
    return `<article class="release-cover circle">
      <img id="${item.artist_id}"  class="artist-img" src="${item.artist_image}" alt="">
    </article>`;
  });
  //After returning the html article,
  //it joins it to the next item on the array to be displayed.
  //If no next item, it stops.
  displayArtists = displayArtists.join("");
  //renders the array in the html file section "artistSection"
  artistSection.innerHTML = displayArtists;
}

//function that displays SideBar section
function displaySidebarSongs(sideItems) {
  let displaySideSongs = sideItems.map((item) => {
    return `<li class="songListItem" id="${item.song_id}">
      <span>${item.artist_id}</span>
      <img src="${item.song_image}" alt="cover image">
      <div class="song-details">
        <h5>${item.song_name}</h5>
        <p>${item.artist_name}</p>
      </div>
    </li>`;
  });
  //After returning the html article,
  //it joins it to the next item on the array to be displayed.
  //If no next item, it stops.
  displaySideSongs = displaySideSongs.join("");
  //renders the array in the html file section "sideBarSection"
  sideBarSection.innerHTML = displaySideSongs;
}

//function that displays Artist songs section
function displayArtistSongs(sideItems) {
  let displaySideSongs = sideItems.map((item) => {
    return `<li class="son songListItem" id="${item.song_id}">
      <img src="${item.artist_image}" alt="cover image">
      <div class="song-details">
        <h5>${item.song_name}</h5>
        <p>${item.artist_name}</p>
      </div>
    </li>`;
  });
  //After returning the html article,
  //it joins it to the next item on the array to be displayed.
  //If no next item, it stops.
  displaySideSongs = displaySideSongs.join("");
  //renders the array in the html file section "artistSongsSection"
  artist_songs_section.innerHTML = displaySideSongs;
}

//Listening on page load to create music page elements
window.addEventListener("DOMContentLoaded", () => {
  //Hiding all other inteface that is not part of the home page(music section)
  searchResultSection.style.display = "none";
  movie_cards.style.display = "none";
  top_movie_cards.style.display = "none";
  video_links.style.display = "none";
  videoSection.style.display = "none";
  overlay.style.display = "none";
  artist_details.style.display = "none";
  aboutUs.style.display = "none";

  function load_track (index) {
    track.src =  audioData[index].audio_src;
    title.innerHTML = audioData[index].song_name;
    artist.innerHTML = audioData[index].artist_name;
    track_image.src = audioData[index].song_image;
  }
  load_track(index);

  next.onclick = function () {
    index++;
    load_track(index);
    track.play();
    playbtn.src = "images/icons/pause-fill.svg";
  };

  //Previous button setup
  prev.onclick = function () {
    index--;
    load_track(index);
    track.play();
    playbtn.src = "images/icons/pause-fill.svg";
  };

  //Play button setup
  playbtn.onclick = function play () {
    if (track.paused || track.currentTime <= 0) {
      track.play();
      playbtn.src = "images/icons/pause-fill.svg";
      wave.classList.add("active2");
    } else {
      track.pause();
      playbtn.src = "images/icons/play-fill.svg";
      wave.classList.remove("active2");
    }
  };

  //Side-bar Songs section
  displaySidebarSongs(audioData);
  //Individual music play button setup (Songs section) - Mobile and Tablet setup
  let point = 0;
  Array.from(document.getElementsByClassName("songListItem")).forEach((element)=>{
    element.addEventListener("click", (e) => {
      point = e.target.id;
      playbtn.src = "images/icons/pause-fill.svg";
      track.src = audioData[point].audio_src;
      track.play();
      wave.classList.add("active2");
      track_image.src = audioData[point].song_image;
      active_image.src = audioData[point].song_image;
      activeSongName.textContent = audioData[point].artist_name + "  - " + audioData[point].song_name;
      artist.innerHTML = audioData[point].artist_name;
      title.innerHTML = audioData[point].song_name;
    });
  });

  //Search bar Function
  const categories = [ ...new Set(audioData.map((item)=> { return item; })) ];
  document.getElementById("search-bar").addEventListener("input", (e)=> {
    searchResultSection.style.display = "block";
    music_cards.style.display = "none";
    artist_cards.style.display = "none";
    top_image.style.display = "none";

    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item)=> {
      if (item.song_name.toLocaleLowerCase().includes(searchData)) {
        return (item.song_name.toLocaleLowerCase().includes(searchData));
      } else if (item.artist_name.toLocaleLowerCase().includes(searchData)) {
        return (item.artist_name.toLocaleLowerCase().includes(searchData));
      }
    });
    if (searchData.length >= 1){
      displaySearchItem(filterData);
    } else if (searchData.length <= 0) {
      music_cards.style.display = "block";
      searchResultSection.style.display = "none";
      artist_cards.style.display = "block";
      top_image.style.display = "block";
    }
  });

  //Individual music play button setup (Search result section)
  let ind = 0;
  let curr_playing = false;
  Array.from(document.getElementsByClassName("ico")).forEach((element)=>{
    element.addEventListener("click", (e) => {
      if (curr_playing == false) {
        ind = e.target.id;
        e.target.src = "images/icons/pause-fill.svg";
        playbtn.src = "images/icons/pause-fill.svg";
        curr_playing = true;
        track.src = audioData[ind].audio_src;
        track.play();
        wave.classList.add("active2");
        track_image.src = audioData[ind].song_image;
        active_image.src = audioData[ind].song_image;
        artist.innerHTML = audioData[ind].artist_name;
        title.innerHTML = audioData[ind].song_name;
      } else {
        e.target.src = "images/icons/play-circle-fill.svg";
        playbtn.src = "images/icons/play-fill.svg";
        track.src = audioData[ind].audio_src;
        curr_playing = false;
        track.pause();
        wave.classList.remove("active2");
      }
    });
  });

  // New releases Section
  displayNewReleasesItem(audioData);
  //Individual music play button setup (New releases section)
  let indix = 0;
  let now_playing = false;
  Array.from(document.getElementsByClassName("icon")).forEach((elem)=>{
    elem.addEventListener("click", (e) => {
      if (now_playing == false) {
        indix = e.target.id;
        e.target.src = "images/icons/pause-fill.svg";
        playbtn.src = "images/icons/pause-fill.svg";
        now_playing = true;
        track.src = audioData[indix].audio_src;
        track.play();
        wave.classList.add("active2");
        track_image.src = audioData[indix].song_image;
        artist.innerHTML = audioData[indix].artist_name;
        title.innerHTML = audioData[indix].song_name;
      } else {
        e.target.src = "images/icons/video-play.svg";
        playbtn.src = "images/icons/play-fill.svg";
        track.src = audioData[indix].audio_src;
        now_playing = false;
        track.pause();
        wave.classList.remove("active2");
      }
    });
  });

  //Artist display section
  displayArtistItem(audioData);
  //Individual artist display (Popular Artist Selection setup)
  let inx = 0;
  Array.from(document.getElementsByClassName("circle")).forEach((element)=>{
    element.addEventListener("click", (e) => {
      inx = e.target.id;
      artistImage.src = audioData[inx-1].artist_image;
      artistName.innerHTML = audioData[inx-1].artist_name;
      discover.style.display = "none";
      artist_details.style.display = "block";
      displayArtistSongs(audioData);

      //Individual music play button setup (Artist selected music section)
      let inix = 0;
      Array.from(document.getElementsByClassName("son")).forEach((elem)=>{
        elem.addEventListener("click", (e) => {
          inix = e.target.id;
          playbtn.src = "images/icons/pause-fill.svg";
          track.src = audioData[inix].audio_src;
          track.play();
          wave.classList.add("active2");
          track_image.src = audioData[inix].song_image;
          artist.innerHTML = audioData[inix].artist_name;
          title.innerHTML = audioData[inix].song_name;
        });
      });
    });
  });
});

//Popular Artist exit button setup
exit_icon.addEventListener("click", ()=>{
  discover.style.display = "flex";
  artist_details.style.display = "none";
});

exit_con.addEventListener("click", ()=>{
  //mainVideo.pause();
  //fullScreenBtn.src = "/images/icons/fullscreen.svg";
  videoSection.style.display = "none";
  overlay.style.display = "none";
  exit_con.style.display = "none";
  mainVideo.src = "";
  //return document.exitFullscreen();
});

/*==================================
Seek Controls Setup (Music duration Controls)
===================================*/
track.addEventListener("timeupdate", () => {
  let music_curr = track.currentTime;
  let music_dur = track.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  currentEnd.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentStart.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((track.currentTime/track.duration) * 100);
  seek.value = progressbar;
  let seekbar = seek.value;
  bar2.style.width = `${seekbar}%`;
  dot.style.left = `${seekbar}%`;
});

seek.addEventListener("change", () => {
  track.currentTime = seek.value * track.duration/100;
});

track.addEventListener("ended", () => {
  playbtn.src = "images/icons/play-fill.svg";
  wave.classList.remove("active2");
});

/*==================================
Music volume Controls Setup
===================================*/
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.src = "images/icons/volume-mute-fill.svg";
  }
  if (vol.value > 0) {
    vol_icon.src = "images/icons/volume-down.svg";
  }
  if (vol.value > 50) {
    vol_icon.src = "images/icons/volume-up-fill.svg";
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  track.volume = vol_a/100;
});

/*=====================================
Mobile menu setup
=====================================*/
const Bttn = document.querySelector("#menu"),
navBar = document.querySelector(".mobile-menu"),
linK = document.querySelector(".lnk");

/*============================================
Menu Icon Open and Close Function
============================================*/
Bttn.addEventListener("click", () => {
    //close menu
    if (Bttn.classList.contains("menu-open")) {
        Bttn.classList.remove("menu-open");
        navBar.classList.remove("nav-open");
    }//Open menu
    else {
        Bttn.classList.add("menu-open");
        navBar.classList.add("nav-open");
    }
});

const discoverLink = document.querySelector(".discowr");
discoverLink.onclick = () => {
  discover.classList.add("discover-section");
  side_bar.style.display = "none";
  nav.style.display = "none";
  top_image.style.height = 150+"px";

  movie_cards.style.display = "none";
  top_movie_cards.style.display = "none";
  music_cards.style.display = "block";
  artist_cards.style.display = "block";
  top_image.style.display = "block";

  //artist_details.style.display = "none";
  activeSongName.style.display = "none";
  activeSongDesc.style.display = "none";
};

const songsLink = document.querySelector(".songsLink");
songsLink.onclick = () => {
  Bttn.classList.remove("menu-open");
  navBar.classList.remove("nav-open");
  discoverLink.classList.remove("active");
  music.classList.add("active");

  songs.style.display = "flex";
  master_play.style.display = "flex";
  music.style.display = "flex";
  video.style.display = "none";

  discover.classList.remove("discover-section");

  //artist_details.style.display = "none";

  side_bar.style.display = "block";
  nav.style.display = "flex";

  activeSongName.style.display = "flex";
  activeSongDesc.style.display = "flex";
};

const video_menu_link = document.querySelector(".videoLink");
video_menu_link.addEventListener("click", () => {

  //calling the display and play functions for the top videos
  displayMostWatchedVideoItem(mostWatchedVideoData);
  playMostWatchedVideo(mostWatchedVideoData);

  //calling the display and play functions for the videos
  displayLatestUploadsItem(latestUploadsData);
  playLatestUploadsVideo(latestUploadsData);

  Bttn.classList.remove("menu-open");
  navBar.classList.remove("nav-open");

  discover.classList.add("discover-section");
  side_bar.style.display = "none";
  music_cards.style.display = "none";
  artist_cards.style.display = "none";
  master_play.style.display = "none";
  top_image.style.display = "none";
  nav.style.display = "none";

  top_movie_cards.style.display = "block";
  movie_cards.style.display = "block";
  video_links.style.display = "flex";
  aboutUs.style.display = "block";

  //adjusting height to contain all video data
  side_bar.classList.remove("height-music");
  discover.classList.remove("height-music");

  music.style.display = "none";
  video.style.display = "flex";
  video.classList.add("active");

  video_links.style.display = "none";
  aboutUs.style.display = "none";

  //side_bar.style.width = 100+"%";
  songs.style.display = "none";
  master_play.style.display = "none";
  discover.style.display = "flex";
});
const mainVideo = document.querySelector(".video-screen");
const first = document.querySelector(".first"), second = document.querySelector(".second"), third = document.querySelector(".third");

first.onclick = () => {
  first.classList.contains("half") ? first.classList.replace("half", "full") : first.classList.add("full");
  second.classList.contains("full") ? second.classList.replace("full", "half") : second.classList.add("half");
  third.classList.contains("full") ? third.classList.replace("full", "half") : third.classList.add("half");
  if (norm_heading.classList.contains("hiding") ) {
    norm_heading.classList.remove("hiding");
    team_heading.classList.add("hiding");
  }
  if (paragraph1.classList.contains("hiding")) {
    paragraph1.classList.remove("hiding");
    paragraph2.classList.add("hiding");
    paragraph3.classList.add("hiding");
  }
};
second.onclick = () => {
  second.classList.contains("half") ? second.classList.replace("half", "full") : second.classList.add("full");
  first.classList.contains("full") ? first.classList.replace("full", "half") : first.classList.add("half");
  third.classList.contains("full") ? third.classList.replace("full", "half") : third.classList.add("half");
  if (norm_heading.classList.contains("hiding") ) {
    norm_heading.classList.remove("hiding");
    team_heading.classList.add("hiding");
  }
  if (paragraph2.classList.contains("hiding")) {
    paragraph2.classList.remove("hiding");
    paragraph1.classList.add("hiding");
    paragraph3.classList.add("hiding");
  }
};
third.onclick = () => {
  third.classList.contains("half") ? third.classList.replace("half", "full") : third.classList.add("full");
  second.classList.contains("full") ? second.classList.replace("full", "half") : second.classList.add("half");
  first.classList.contains("full") ? first.classList.replace("full", "half") : first.classList.add("half");
  if (team_heading.classList.contains("hiding") ) {
    team_heading.classList.remove("hiding");
    norm_heading.classList.add("hiding");
  }
  if (paragraph3.classList.contains("hiding")) {
    paragraph3.classList.remove("hiding");
    paragraph1.classList.add("hiding");
    paragraph2.classList.add("hiding");
  }
};