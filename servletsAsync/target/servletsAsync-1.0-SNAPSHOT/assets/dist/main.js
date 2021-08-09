function loadContent() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/servletsAsync_war_exploded/readGames',
    }).done(function(res){
        let games = res.listGames
        document.getElementById("content").innerHTML = "";
        for (let game of games) {
            if (game.status == 1) {
                document.getElementById("content").innerHTML +=
                    '<div class="card mb-3">' +
                    '<div class="row g-0">' +
                    '<div class="col-md-4">' +
                    '<img src="data:image/jpeg;base64,'+game.imgGame+'"' +
                    'class="img-fluid rounded-start">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">'+game.name+'</h5>' +
                    '<div class="row">' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Fecha de lanzamiento:</span>' +
                    '<p>'+game.date_premiere+'</p>' +
                    '</div>' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Categoría:</span>' +
                    '<p>'+game.category_idCategory.name+'</p>' +
                    '</div>' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Estado:</span>' +
                    '<p>' +
                    '<span class="badge bg-success">Activo</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '<button class="btn btn-primary">Actualizar datos</button>' +
                    '<button class="btn btn-danger">Eliminar juego</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else {
                document.getElementById("content").innerHTML +=
                    '<div class="card mb-3">' +
                    '<div class="row g-0">' +
                    '<div class="col-md-4">' +
                    '<img src="data:image/jpeg;base64,'+game.imgGame+'"' +
                    'class="img-fluid rounded-start">' +
                    '</div>' +
                    '<div class="col-md-8">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">'+game.name+'</h5>' +
                    '<div class="row">' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Fecha de lanzamiento:</span>' +
                    '<p>'+game.date_premiere+'</p>' +
                    '</div>' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Categoría:</span>' +
                    '<p>'+game.category_idCategory.name+'</p>' +
                    '</div>' +
                    '<div class="col-sm-6 col-xl-4">' +
                    '<span class="fw-bold">Estado:</span>' +
                    '<p>' +
                    '<span class="badge bg-secondary">Inactivo</span>' +
                    '</p>' +
                    '</div>' +
                    '</div>' +
                    '<button class="btn btn-primary">Actualizar datos</button>' +
                    '<button class="btn btn-danger">Eliminar juego</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
                //document.getElementById("contentTBody").innerHTML += '<tr><td><img src="data:image/jpeg;base64,'+game.imgGame+'"></td><td>'+game.name+'</td><td>'+game.date_premiere+'</td><td>'+game.category_idCategory.name+'</td><td><span class="badge bg-secondary">Inactivo</span></td></tr>';
            }
        }
    });
}