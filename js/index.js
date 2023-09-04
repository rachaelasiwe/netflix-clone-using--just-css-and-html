const faqs = document.querySelectorAll('.Faqs');

faqs.forEach(Faqs => {
    Faqs.addEventListener('click', () => {
        Faqs.classList.toggle('active');
    });
})

const validateEmail = (e) => {
    e.preventDefault();
    let form = document.forms['form'];
    let email = form['email'].value;

    if (email || email != '') {
        let matchUser = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g);
        if(!matchUser)
        alert("Enter valid Email")
    }
    else {
        alert("Email required")
    }

}