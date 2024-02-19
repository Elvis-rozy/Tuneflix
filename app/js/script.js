const audioData = [
  {
    song_name: "Faded",
    artist_name: "Alan Walker",
    song_id: 0,
    artist_id: 1,
    song_image: "images/covers/alan-walker.jpg",
    active_image: "images/background/alan-walker.jpg",
    artist_image: "images/artists/omah_lay.jpg",
    song_group: "recommendations",
    song_info: "Alan Walker - Faded",
    audio_src: ""
  },
  {
    song_name: "Promises",
    artist_name: "Calvin Harris ft Sam Smith",
    song_id: 1,
    artist_id: 2,
    song_image: "images/covers/calvin-smith.jpg",
    artist_image: "images/artists/smith1.jpg",
    song_group: "recommendations",
    song_info: "Calvin Harris ft Sam Smith - Promises",
    audio_src: ""
  },
  {
    song_name: "Bad Habits",
    artist_name: "Ed Sheeran",
    song_id: 2,
    artist_id: 3,
    song_image: "images/covers/sheeran.jpg",
    artist_image: "images/artists/beyonce1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Bad Habits",
    audio_src: ""
  },
  {
    song_name: "Reason",
    artist_name: "Omah Lay",
    song_id: 3,
    artist_id: 4,
    song_image: "images/covers/omah_lay.jpg",
    artist_image: "images/artists/beiber1.jpg",
    song_group: "recommendations",
    song_info: "Omah Lay - Reason",
    audio_src: ""
  },
  {
    song_name: "Shivers",
    artist_name: "Ed Sheeran",
    song_id: 4,
    artist_id: 5,
    song_image: "images/covers/sheeran2.jpg",
    artist_image: "images/artists/rema1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Shivers",
    audio_src: ""
  },
  {
    song_name: "Charm",
    artist_name: "Rema",
    song_id: 5,
    artist_id: 6,
    song_image: "images/covers/rema.jpg",
    artist_image: "images/artists/sheeran1.jpg",
    song_group: "recommendations",
    song_info: "Rema - Charm",
    audio_src: ""
  },
  {
    song_name: "Man I Am",
    artist_name: "Sam Smith",
    song_id: 6,
    artist_id: 7,
    song_image: "images/covers/smith.jpg",
    artist_image: "images/artists/victony1.jpg",
    song_group: "recommendations",
    song_info: "Sam Smith - Man I Am",
    audio_src: ""
  },
  {
    song_name: "Soweto",
    artist_name: "Victony",
    song_id: 7,
    artist_id: 8,
    song_image: "images/covers/victony.jpg",
    artist_image: "images/artists/stormzy1.jpg",
    song_group: "recommendations",
    song_info: "Victony Soweto remix",
    audio_src: ""
  },
  {
    song_name: "Mara",
    artist_name: "Rema",
    song_id: 8,
    artist_id: 9,
    song_image: "images/covers/rema2.jpg",
    artist_image: "images/artists/burna1.jpg",
    song_group: "recommendations",
    song_info: "Rema - Mara",
    audio_src: ""
  },
  {
    song_name: "Own It",
    artist_name: "Stormzy ft Ed Sheeran and Burna Boy",
    song_id: 9,
    artist_id: 10,
    song_image: "images/covers/stormzy.jpg",
    artist_image: "images/artists/rihanna1.jpg",
    song_group: "recommendations",
    song_info: "Stormzy ft Ed Sheeran and Burna Boy Own It",
    audio_src: ""
  },
  {
    song_name: "Dangerously",
    artist_name: "Ed Sheeran",
    song_id: 10,
    artist_id: 11,
    song_image: "images/covers/sheeran3.jpg",
    artist_image: "images/artists/selena1.jpg",
    song_group: "recommendations",
    song_info: "Ed Sheeran - Dangerously",
    audio_src: ""
  }
];

const latestUploadsData = [
  {
    video_name: "Antman",
    video_image: "images/video/antman.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "8.5",
    video_info: "Demon hunters anime",
    video_src: ""
  },
  {
    "video_name": "One Punch man",
    "video_image": "images/video/one-punch.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "26min",
    "video_id": 2,
    "video_rating": "7.2",
    "video_info": "I challenged our teacher in combat",
    "video_src": "https://www.youtube.com/embed/FIXm4R5_BJ0?si=uDf1VzKjZMtmjStJ"
  },
  {
    "video_name": "Legendary Anime Hand Combats",
    "video_image": "images/video/genos.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "29min",
    "video_id": 3,
    "video_rating": "7.9",
    "video_info": "Anime Hand Combats",
    "video_src": "https://www.youtube.com/embed/c4FLtqbYU8s?si=4z0xCbUtWlyUePc8"
  },
  {
    "video_name": "Legendary Anime Battles",
    "video_image": "images/video/battles.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "10min",
    "video_id": 4,
    "video_rating": "9.2",
    "video_info": "You can't escape your past",
    "video_src": "https://www.youtube.com/embed/O_saBlPL4d8?si=dUCArk7TIG26_9Do"
  },
  {
    "video_name": "Anime rage moments",
    "video_image": "images/video/rage.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "16min",
    "video_id": 5,
    "video_rating": "9.7",
    "video_info": "Honor vs power",
    "video_src": "https://www.youtube.com/embed/zsWUp6zp-no?si=AhImtm0ESU-Kn59g"
  },
  {
    "video_name": "Best action anime",
    "video_image": "images/video/action.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "21min",
    "video_id": 6,
    "video_rating": "8.5",
    "video_info": "Awesome action animes",
    "video_src": "https://www.youtube.com/embed/G6Cnoyyhu3o?si=aJ4CB2pF_sJIq_8C"
  },
  {
    "video_name": "Overpowered anime characters",
    "video_image": "images/video/over.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "13min",
    "video_id": 7,
    "video_rating": "7.7",
    "video_info": "Overpowered anime characters snap",
    "video_src": "https://www.youtube.com/embed/8R9wntOoFOE?si=tlvJ6q8eqndfs3rb"
  },
  {
    "video_name": "Baki vs Yujiro",
    "video_image": "images/video/baki.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "17min",
    "video_id": 8,
    "video_rating": "8.6",
    "video_info": "Most epic battle",
    "video_src": "https://www.youtube.com/embed/48POqJsCC2M?si=lXsDyPFepY4kpsOj"
  },
  {
    "video_name": "Stunning Anime fights",
    "video_image": "images/video/stunning.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "31min",
    "video_id": 9,
    "video_rating": "8.5",
    "video_info": "Stunning Anime fights",
    "video_src": "https://www.youtube.com/embed/n5GO0ZiE7rU?si=Jg_kU4husriTLBRt"
  },
  {
    "video_name": "Over powered mc anime",
    "video_image": "images/video/overp.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "17min",
    "video_id": 10,
    "video_rating": "7.9",
    "video_info": "powerful anime mcs",
    "video_src": "https://www.youtube.com/embed/m64t7eaKHLw?si=bQUa6VpbrvFPUdUI"
    },
  {
    "video_name": "Over powered mc anime characters",
    "video_image": "images/video/overpp.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "27min",
    "video_id": 11,
    "video_rating": "7.9",
    "video_info": "random",
    "video_src": "https://www.youtube.com/embed/7ec2Puf1tcY?si=6h2fZ7lS9SAFK9FZ"
    },
  {
    "video_name": "Demon Slayer mugen",
    "video_image": "images/video/dm.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "15min",
    "video_id": 12,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/GCJnG6DYEeg?si=QMWKMLqUQAItY0BI"
    },
  {
    "video_name": "Anime battle",
    "video_image": "images/video/an.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "27min",
    "video_id": 13,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/O_saBlPL4d8?si=dUCArk7TIG26_9Do"
    },
  {
    "video_name": "Footbal moments",
    "video_image": "images/video/foot.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "29min",
    "video_id": 14,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/HsSJT-lGa9s?si=aPmK-6t8oDOiTfyd"
    },
  {
    "video_name": "Karma in football",
    "video_image": "images/video/karm.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "17min",
    "video_id": 15,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/eHv8H_PR4xQ?si=M5BUA3zorpZyO5O2"
    },
  {
    "video_name": "Real madrid vs manchester city",
    "video_image": "images/video/madcity.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "37min",
    "video_id": 16,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/U8YOR4_IeTI?si=DHn_zIR8zn0N9vqJ"
    },
  {
    "video_name": "Master Figma variants",
    "video_image": "images/video/figma.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "14min",
    "video_id": 17,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/sU-xp2V7-_A?si=76pQa0my0L2Vxc6W"
    },
  {
    "video_name": "Figma auto layouts",
    "video_image": "images/video/layouts.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "13min",
    "video_id": 18,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/HwiHqfax7Uk?si=L0Mf5m6GjOJPOrVs"
    }
];
const mostWatchedVideoData = [
  {
    video_name: "Antman",
    video_image: "images/video/antman.jpg",
    video_year: "2023",
    video_group: "HD",
    video_duration: "22min",
    video_id: 1,
    video_rating: "8.5",
    video_info: "Demon hunters anime",
    video_src: "https://www.youtube.com/embed/GCJnG6DYEeg?si=QMWKMLqUQAItY0BI"
  },
  {
    "video_name": "One Punch man",
    "video_image": "images/video/one-punch.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "26min",
    "video_id": 2,
    "video_rating": "7.2",
    "video_info": "I challenged our teacher in combat",
    "video_src": "https://www.youtube.com/embed/FIXm4R5_BJ0?si=uDf1VzKjZMtmjStJ"
  },
  {
    "video_name": "Legendary Anime Hand Combats",
    "video_image": "images/video/genos.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "29min",
    "video_id": 3,
    "video_rating": "7.9",
    "video_info": "Anime Hand Combats",
    "video_src": "https://www.youtube.com/embed/c4FLtqbYU8s?si=4z0xCbUtWlyUePc8"
  },
  {
    "video_name": "Legendary Anime Battles",
    "video_image": "images/video/battles.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "10min",
    "video_id": 4,
    "video_rating": "9.2",
    "video_info": "You can't escape your past",
    "video_src": "https://www.youtube.com/embed/O_saBlPL4d8?si=dUCArk7TIG26_9Do"
  },
  {
    "video_name": "Anime rage moments",
    "video_image": "images/video/rage.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "16min",
    "video_id": 5,
    "video_rating": "9.7",
    "video_info": "Honor vs power",
    "video_src": "https://www.youtube.com/embed/zsWUp6zp-no?si=AhImtm0ESU-Kn59g"
  },
  {
    "video_name": "Best action anime",
    "video_image": "images/video/action.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "21min",
    "video_id": 6,
    "video_rating": "8.5",
    "video_info": "Awesome action animes",
    "video_src": "https://www.youtube.com/embed/G6Cnoyyhu3o?si=aJ4CB2pF_sJIq_8C"
  },
  {
    "video_name": "Overpowered anime characters",
    "video_image": "images/video/over.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "13min",
    "video_id": 7,
    "video_rating": "7.7",
    "video_info": "Overpowered anime characters snap",
    "video_src": "https://www.youtube.com/embed/8R9wntOoFOE?si=tlvJ6q8eqndfs3rb"
  },
  {
    "video_name": "Baki vs Yujiro",
    "video_image": "images/video/baki.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "17min",
    "video_id": 8,
    "video_rating": "8.6",
    "video_info": "Most epic battle",
    "video_src": "https://www.youtube.com/embed/48POqJsCC2M?si=lXsDyPFepY4kpsOj"
  },
  {
    "video_name": "Stunning Anime fights",
    "video_image": "images/video/stunning.jpg",
    "video_year": "2023",
    "video_group": "HD",
    "video_duration": "31min",
    "video_id": 9,
    "video_rating": "8.5",
    "video_info": "Stunning Anime fights",
    "video_src": "https://www.youtube.com/embed/n5GO0ZiE7rU?si=Jg_kU4husriTLBRt"
  },
  {
    "video_name": "Over powered mc anime",
    "video_image": "images/video/overp.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "17min",
    "video_id": 10,
    "video_rating": "7.9",
    "video_info": "powerful anime mcs",
    "video_src": "https://www.youtube.com/embed/m64t7eaKHLw?si=bQUa6VpbrvFPUdUI"
    },
  {
    "video_name": "Over powered mc anime characters",
    "video_image": "images/video/overpp.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "27min",
    "video_id": 11,
    "video_rating": "7.9",
    "video_info": "random",
    "video_src": "https://www.youtube.com/embed/7ec2Puf1tcY?si=6h2fZ7lS9SAFK9FZ"
    },
  {
    "video_name": "Demon Slayer mugen",
    "video_image": "images/video/dm.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "15min",
    "video_id": 12,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/GCJnG6DYEeg?si=QMWKMLqUQAItY0BI"
    },
  {
    "video_name": "Anime battle",
    "video_image": "images/video/an.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "27min",
    "video_id": 13,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/O_saBlPL4d8?si=dUCArk7TIG26_9Do"
    },
  {
    "video_name": "Footbal moments",
    "video_image": "images/video/foot.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "29min",
    "video_id": 14,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/HsSJT-lGa9s?si=aPmK-6t8oDOiTfyd"
    },
  {
    "video_name": "Karma in football",
    "video_image": "images/video/karm.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "17min",
    "video_id": 15,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/eHv8H_PR4xQ?si=M5BUA3zorpZyO5O2"
    },
  {
    "video_name": "Real madrid vs manchester city",
    "video_image": "images/video/madcity.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "37min",
    "video_id": 16,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/U8YOR4_IeTI?si=DHn_zIR8zn0N9vqJ"
    },
  {
    "video_name": "Master Figma variants",
    "video_image": "images/video/figma.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "14min",
    "video_id": 17,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/sU-xp2V7-_A?si=76pQa0my0L2Vxc6W"
    },
  {
    "video_name": "Figma auto layouts",
    "video_image": "images/video/layouts.jpg",
    "video_year": "2023",
    "video_group": "4K",
    "video_duration": "13min",
    "video_id": 18,
    "video_rating": "7.9",
    "video_info": "heroes and protectors vol 4",
    "video_src": "https://www.youtube.com/embed/HwiHqfax7Uk?si=L0Mf5m6GjOJPOrVs"
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
      indz -= 1;
      mainVideo.src = vid[indz].video_src;
      //mainVideo.play();
      //playPauseBtn.src = "/images/icons/pause-fill.svg";
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
      mainVideo.src = vid[indz].video_src;
      //mainVideo.play();
      //playPauseBtn.src = "/images/icons/pause-fill.svg";
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

/*
//Video-playing Section
const container = document.querySelector(".container"),
mainVideo = container.querySelector(".video"),
videoTimeline = container.querySelector(".video-timeline"),
progressBar = container.querySelector(".progress-bar"),
volumeBtn = container.querySelector(".volume"),
volumeSlider = container.querySelector(".left input"),
currentVidTime = container.querySelector(".current-time"),
videoDuration = container.querySelector(".video-duration"),
skipBackward = container.querySelector(".skip-backward"),
skipForward = container.querySelector(".skip-forward"),
playPauseBtn = container.querySelector(".play-pause"),
speedBtn = container.querySelector(".playback-speed"),
speedOptions = container.querySelector(".speed-options"),
pipBtn = container.querySelector(".pic-in-pic"),
fullScreenBtn = container.querySelector(".fullscreen");
let timer,
vol_ = document.getElementById("icon-btn"),
volu = document.getElementById("volu"),
vol_ball = document.getElementById("vol-ball"),
vol_br= document.getElementsByClassName("volume-bar")[0],
volum = document.querySelector(".volume"),
ball = document.getElementsByClassName("ball")[0];

const hideControls = () => {
  if(mainVideo.paused) return;
  timer = setTimeout(() => {
    container.classList.remove("show-controls");
  }, 3000);
};
hideControls();

container.addEventListener("mousemove", () => {
  container.classList.add("show-controls");
  clearTimeout(timer);
  hideControls();
});

const formatTime = time => {
  let seconds = Math.floor(time % 60),
  minutes = Math.floor(time / 60) % 60,
  hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;

  if(hours == 0) {
      return `${minutes}:${seconds}`;
  }
  return `${hours}:${minutes}:${seconds}`;
};

videoTimeline.addEventListener("mousemove", e => {
  let timelineWidth = videoTimeline.clientWidth;
  let offsetX = e.offsetX;
  let percent = Math.floor((offsetX / timelineWidth) * mainVideo.duration);
  const progressTime = videoTimeline.querySelector("span");
  offsetX = offsetX < 20 ? 20 : (offsetX > timelineWidth - 20) ? timelineWidth - 20 : offsetX;
  progressTime.style.left = `${offsetX}px`;
  progressTime.innerText = formatTime(percent);
});

videoTimeline.addEventListener("click", e => {
  let timelineWidth = videoTimeline.clientWidth;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
});

mainVideo.addEventListener("timeupdate", e => {
  let {currentTime, duration} = e.target;
  let percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  currentVidTime.innerText = formatTime(currentTime);
});

mainVideo.addEventListener("loadeddata", () => {
  videoDuration.innerText = formatTime(mainVideo.duration);
});

const draggableProgressBar = e => {
  let timelineWidth = videoTimeline.clientWidth;
  progressBar.style.width = `${e.offsetX}px`;
  mainVideo.currentTime = (e.offsetX / timelineWidth) * mainVideo.duration;
  currentVidTime.innerText = formatTime(mainVideo.currentTime);
};

/*==================================
Video volume Controls Setup
===================================
volu.addEventListener("change", () => {
  if (volu.value == 0) {
    vol_.src = "/images/icons/volume-mute-fill.svg";
  }
  if (volu.value > 0) {
    vol_.src = "/images/icons/volume-down.svg";
  }
  if (volu.value > 50) {
    vol_.src = "/images/icons/volume-up-fill.svg";
  }

  let vol_a = volu.value;
  vol_br.style.width = `${vol_a}%`;
  vol_ball.style.left = `${vol_a}%`;
  mainVideo.volume = vol_a/100;
});

fullScreenBtn.addEventListener("click", () => {
  container.classList.toggle("fullscreen");
  if(document.fullscreenElement) {
    fullScreenBtn.src = "/images/icons/fullscreen.svg";
    return document.exitFullscreen();
  }
  fullScreenBtn.src = "/images/icons/fullscreen-exit.svg";
  container.requestFullscreen();
});

speedOptions.querySelectorAll("li").forEach(option => {
  option.addEventListener("click", () => {
    console.log("cli");
    speedOptions.classList.add("hide");
    mainVideo.playbackRate = option.dataset.speed;
    speedOptions.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});

document.addEventListener("click", e => {
  if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
    //speedOptions.classList.add("hide");
  }
});

speedBtn.addEventListener("click", () => speedOptions.classList.toggle("hide"));
pipBtn.addEventListener("click", () => mainVideo.requestPictureInPicture());
skipBackward.addEventListener("click", () => mainVideo.currentTime -= 5);
skipForward.addEventListener("click", () => mainVideo.currentTime += 5);
mainVideo.addEventListener("play", () => playPauseBtn.classList.replace("fa-play", "fa-pause"));
mainVideo.addEventListener("pause", () => playPauseBtn.classList.replace("fa-pause", "fa-play"));
videoTimeline.addEventListener("mousedown", () => videoTimeline.addEventListener("mousemove", draggableProgressBar));
document.addEventListener("mouseup", () => videoTimeline.removeEventListener("mousemove", draggableProgressBar));
playPauseBtn.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
    playPauseBtn.src = "/images/icons/pause-fill.svg";
  } else {
    mainVideo.pause();
    playPauseBtn.src = "/images/icons/play-fill.svg";
  }
});
*/
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

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