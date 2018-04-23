function fetchCat() {
    var url =
        "https://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories";

    // O fetch é parecido com o $.ajax, mas usa o Promise nativo
    // em vez de um objecto específico do jQuery
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })
            .catch(function (erro) {
                console.error(erro);
                alert("Lamentamos, mas ocorreu um erro...");
            })
    );
}
function fetchDrivers(id) {
    var url = 'http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/categories/' + id + '/drivers';
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })
            .then(function (result) {
                getDrivers(result);
            })
            .catch(function (erro) {
                console.error(erro);
                alert("Lamentamos, mas ocorreu um erro...");
            })
    );
}

function fetchDriversDetails(id) {
    var url = 'http://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers/'+id;
    return (
        fetch(url, { headers: { Accept: "application/json" } })
            .then(function (respostaServidor) {
                // Converter a resposta do servidor em JSON
                return respostaServidor.json();
            })
            .then(function (result) {
                getDriversDetails(result);
            })
            .catch(function (erro) {
                console.error(erro);
                alert("Lamentamos, mas ocorreu um erro...");
            })
    );



}


