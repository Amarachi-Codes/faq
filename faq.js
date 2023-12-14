document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const toggleIcon = this.querySelector('.toggleIcon');

            if (answer.style.display === 'none') {
                answer.style.display = 'block'
                toggleIcon.textContent = "-"
            }else{
                answer.style.display = 'none'
            toggleIcon.textContent = '+';
            }
        })
    })

})
