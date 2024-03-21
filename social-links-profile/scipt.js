// const github = document.getElementById("github");
// const likedin = document.getElementById("likedin");
// const frontendMentor = document.getElementById("frontend-mentor");
// const twitter = document.getElementById("twitter");
// const instagram = document.getElementById("instagram");

// github.addEventListener("click", function () {
//   window.location.href = "https://github.com/msboffl";
// });

// likedin.addEventListener("click", () => {
//   window.location.href = "https://linkedin.com/in/msb-offl";
// });

// frontendMentor.addEventListener("click", () => {
//   window.location.href = "https://www.frontendmentor.io/profile/msboffl";
// });

// twitter.addEventListener("click", function () {
//   window.location.href = "https://www.twitter.com/msboffl";
// });

// twitter.addEventListener("click", function () {
//   window.location.href = "https://www.instagram.com/msboffl";
// });

// Another Approach
const buttons = [
  { id: "github", url: "https://github.com/msboffl" },
  { id: "linkedin", url: "https://linkedin.com/in/msb-offl" },
  {
    id: "frontend-mentor",
    url: "https://www.frontendmentor.io/profile/msboffl",
  },
  { id: "twitter", url: "https://www.twitter.com/msboffl" },
  { id: "instagram", url: "https://www.instagram.com/msboffl" },
];

buttons.forEach((button) => {
  const btnElement = document.getElementById(button.id);
  btnElement.addEventListener("click", () => {
    window.location.href = button.url;
  });
});
