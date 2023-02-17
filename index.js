const questionHeadings = document.querySelectorAll('.question-heading');

const questionContainers = document.querySelectorAll('.question p');

questionHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    // get the content element for this question heading
    const content = heading.nextElementSibling;
    
    // toggle the display property of the content element
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});