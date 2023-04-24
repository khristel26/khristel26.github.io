function playAnimal(animalSound) {
  console.log('Playing animal sound:', animalSound);
  var sound = new Howl({
    src: [`https://raw.githubusercontent.com/khristel26/khristel26.github.io/master/howler_xc/media/${animalSound}.mp3`, `https://raw.githubusercontent.com/khristel26/khristel26.github.io/master/howler_xc/media/${animalSound}.webm`],
    sprite: {
      Cow: [0, 3000],
      Duck: [0, 3000],
      Horse: [0, 3000],
      Fox: [37500, 7000],
    }
  });
  sound.play(animalSound);
}

document.addEventListener('DOMContentLoaded', () => {
  const animalTitles = document.getElementsByClassName('animalTitle');
  console.log('Number of animalTitle elements:', animalTitles.length);

  const animalTitlesObj = {};
  for (const title of animalTitles) {
    animalTitlesObj[title.innerText] = title.innerText;
  }

  const howlerImages = document.getElementsByClassName('howlerImage');

  for (const img of howlerImages) {
    img.addEventListener('click', () => {
      const animalTitle = img.previousElementSibling.innerText;
      playAnimal(animalTitlesObj[animalTitle]);
    });

    img.addEventListener('mouseover', () => {
      img.style.border = '3px solid red';
    });

    img.addEventListener('mouseout', () => {
      img.style.border = '0px';
    });
  }
});

