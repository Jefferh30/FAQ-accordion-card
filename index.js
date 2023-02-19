
const questionHeadings = document.querySelectorAll('.question-heading');

questionHeadings.forEach((heading) => {
  heading.addEventListener('click', () => {
    //toggle the display of all other elements to none
    questionHeadings.forEach(element => {
      //toggle the display of all other elements to none
      element.nextElementSibling.style.display = "none";

      //set all arrows to default position
      element.children[1].style.transform = "none";
    });

    // get the content element for this question heading
    const content = heading.nextElementSibling;

    //get the arrow and rotate it
    const arrow = heading.children[1];
    arrow.style.transform = "rotate(180deg)";
    
    // toggle the display property of the content element
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

