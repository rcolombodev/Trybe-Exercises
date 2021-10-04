// import { createClient } from 'pexels';

// const client = createClient('563492ad6f91700001000001027cc3dc0f3a464f97e078540f759dc5');

const clientId = "563492ad6f91700001000001027cc3dc0f3a464f97e078540f759dc5";

// const clientId = '563492ad6f91700001000001589b1507039c4013b47046533ca21639'

const photosColumn = document.querySelector(".photos-column");

const baseUrl = 'https://api.pexels.com/'

const allData = [];

const createColumnsPhotos = (dataBase) => {
  dataBase.photos.forEach((photo) => {
    const img = document.createElement("img");
    img.src = photo.src.portrait;
    allData.push(img);
  });
}

const createColumnsVideos = (dataBase) => {
  dataBase.videos.forEach((video) => {
    const videos = document.createElement('video');
    videos.classList.add('video')
    videos.src = video.video_files[0].link;
    videos.setAttribute('type','video/mp4');
    videos.setAttribute('autoplay', 'autoplay');
    videos.muted = true;
    videos.loop = true;
    allData.push(videos);
  });
}

const fetchAPI_photo = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: clientId,
    },
  });
  const data = await response.json();
  createColumnsPhotos(data)
}
const createRandomData = async () => {

  const randomData = allData.sort(() => Math.random()- 0.5);
  // console.log(randomData)
  randomData.forEach((data) => {
    photosColumn.appendChild(data)
  })
}

const fetchAPI_video = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: clientId,
    },
  });
  const data = await response.json();
  createColumnsVideos(data)
}


const getImage = async () => {
  let url = `${baseUrl}v1/curated?page=3&per_page=10`
  await fetchAPI_photo(url)
};

const getVideosSearch = async () => {
  let inputValue = document.querySelector(".hero-input-search").value;

  let url_search_videos = `${baseUrl}videos/search?locale=pt-BR&locale=en-US&query=${inputValue}&per_page=10`;

  photosColumn.innerHTML = "";
  await fetchAPI_video(url_search_videos)
}

const getVideos = async () => {
  let url_popular_videos = `${baseUrl}videos/popular`
  await fetchAPI_video(url_popular_videos)
};

//https://api.pexels.com/videos/search?query=nature&per_page=1
const getImageFromSearch = async () => {
  let inputValue = document.querySelector(".hero-input-search").value;
  console.log(inputValue)

  let url_search = `${baseUrl}v1/search/?locale=pt-BR&locale=en-US&page=1&per_page=40&query=${inputValue}`;

  photosColumn.innerHTML = "";
  await fetchAPI_photo(url_search)
};

const createEventScroll = () => {
  const mainNavBar = document.querySelector(".main-nav-bar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 250) {
      mainNavBar.classList.add("main-nav-bar-scroll");
    } else {
      mainNavBar.classList.remove("main-nav-bar-scroll");
    }
  });
};

const eventsListeners = async () => {
  const inputButton = document.querySelector('.hero__search-button');
  const inputSearch = document.querySelector('.hero-input-search')
  
  inputButton.addEventListener('click', () => {
    getImageFromSearch();
  });
  
  inputSearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      createRandomData();
    }
  });
}

window.onload = async () => {
  createEventScroll();
  await getImage();
  await getVideos();
  await createRandomData();
  await eventsListeners();
};
