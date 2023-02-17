const questionHeadings = document.getElementsByClassName('question-heading');
const questionHeadingsArray = Array.from(questionHeadings); // convert to array

const questionContainers = document.querySelectorAll('.question p');

for (let i = 0; i < questionHeadings.length; i++){
     
    questionHeadings[i].addEventListener('click', () => {
    // get the content element for this question heading
    console.log('working');
    const content = heading.nextElementSibling;
    
    // toggle the display property of the content element
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}