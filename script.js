onst customName = document.getElementById('customname');
const randomize = document.getElementById('randomize');
const story = document.querySelector('.story');

const storyText = 'It was a hot day, so :insertx: went for a walk. When they got to :inserty:, they were shocked by what they saw — :insertz:.';
const insertX = ['Donald Duck', 'SpongeBob', 'a giant chicken'];
const insertY = ['the beach', 'the moon', 'a haunted house'];
const insertZ = ['a dancing banana', 'a robot doing yoga', 'a talking tree'];

function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

randomize.addEventListener('click', () => {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('they', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
});
