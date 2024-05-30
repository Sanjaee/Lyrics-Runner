document.addEventListener("DOMContentLoaded", (event) => {
  const playBtn = document.querySelector(".play-btn");
  const body = document.querySelector(".body");
  const lyricsContainer = document.getElementById("lyrics");

  const lyrics = [
    { text: "I met my dream girl,", delay: 0.05 },
    { text: "oh sweet Johanna,", delay: 0.05 },
    { text: "She's all over all over my mind,", delay: 0.05 },
    { text: "My little diva,", delay: 0.05 },
    { text: "I'll pull you under,", delay: 0.05 },
    { text: "Make your body surrender to mine.", delay: 0.04 },
    { text: "A la la la la long long", delay: 0.03 },
    { text: "A la la la la long long", delay: 0.03 },
    { text: "The way you wine your body", delay: 0.04 },
    { text: "Oh you are so naughty", delay: 0.04 },
    { text: "A la la la la long long", delay: 0.03 },
    { text: "A la la la la la long long", delay: 0.03 },
    { text: "I'll give you love give my love everyday", delay: 0.05 },

    { text: "My name is Joanna-oanna-oanna", delay: 0.07 },
    { text: "Nana nana nana", delay: 0.07 },
    { text: "Nana nana nana", delay: 0.06 },
    { text: "And I wanna, wanna, wanna", delay: 0.07 },
    { text: "Nana nana na-nana na-nana nana", delay: 0.07 },

    { text: "My name is Joanna-oanna-oanna", delay: 0.07 },
    { text: "Nana nana nana", delay: 0.07 },
    { text: "Nana nana nana", delay: 0.06 },
    { text: "And I wanna, wanna, wanna", delay: 0.07 },
    { text: "Nana nana na-nana na-nana nana", delay: 0.07 },
  ];

  const delays = [
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
    0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
  ];

  async function displayLyrics() {
    for (let i = 0; i < lyrics.length; i++) {
      let line = lyrics[i].text;
      let charDelay = lyrics[i].delay;
      for (let char of line) {
        lyricsContainer.innerHTML += char;
        await new Promise((resolve) => setTimeout(resolve, charDelay * 1000));
      }
      await new Promise((resolve) => setTimeout(resolve, delays[i] * 1000));
      lyricsContainer.innerHTML += "\n";
      lyricsContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
  }

  playBtn.addEventListener("click", () => {
    playBtn.style.display = "none";

    const backgroundFade = document.createElement("div");
    backgroundFade.className = "background-fade";

    body.appendChild(backgroundFade);

    displayLyrics();
  });
});
