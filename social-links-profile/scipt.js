const github = document.getElementById("github");
const likedin = document.getElementById("likedin");
const frontendMentor = document.getElementById("frontend-mentor");
const twitter = document.getElementById("twitter");
const instagram = document.getElementById("instagram");

github.addEventListener("click", function () {
  window.location.href = "https://github.com/msboffl";
});

likedin.addEventListener("click", () => {
  window.location.href = "https://linkedin.com/in/msb-offl";
});

frontendMentor.addEventListener("click", () => {
  window.location.href = "https://www.frontendmentor.io/profile/msboffl";
});

twitter.addEventListener('click', function () {
    window.location.href = "https://www.twitter.com/msboffl"
})

twitter.addEventListener('click', function () {
    window.location.href = "https://www.instagram.com/msboffl"
})