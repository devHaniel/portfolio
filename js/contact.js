(function () {

    emailjs.init("_9nZBL8CThx1iitDq");

})();


const form = document.getElementById("contact-form");


form.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_4rz7m98",
        "template_x280l06",
        this
    )
    .then(() => {

        alert("Mensaje enviado correctamente");

        form.reset();

    })
    .catch((error) => {

    console.log(error);

    alert("Error enviando mensaje");

});


});