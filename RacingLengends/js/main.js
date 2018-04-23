document.addEventListener("DOMContentLoaded", function (event) {

    fetchCat()
        .then(function (result) {
            mostraCat(result);
        })

}

);
home.addEventListener('click', function () {

});