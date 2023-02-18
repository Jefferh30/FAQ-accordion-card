
const questionHeadings = document.querySelectorAll('.question-heading');

questionHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    questionHeadings.forEach(element => {
      element.nextElementSibling.style.display = "none";
    });
    // get the content element for this question heading
    const content = heading.nextElementSibling;

    // array of question headinds minus current one
    
    const arrow = content.lastChild;
    
    // toggle the display property of the content element
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

