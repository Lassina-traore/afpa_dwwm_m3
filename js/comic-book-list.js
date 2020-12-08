$(document).ready(function () {
        albums.forEach(album => {
            let serie = series.get(album.idSerie);
            let author = authors.get(album.idAuthor);
            let nomImg = serie.nom + "-" + album.numero + "-" + album.titre + ".jpg";
            const containerCard = document.getElementById("row-card");
            const content = `
            <div class="col">
                <div class="card border-dar mt-5" style="width: 20rem;">
                    <img src="./img/albums/${nomImg}" class="card-img-top" alt="" data-toggle="collapse" data-target="#myCard">
                    <div class="collapse" id="myCard">
                        <div class="card-body">
                            <h5 class="card-title text-center">${album.titre}</h5>
                            <p class="card-text">
                                Numéro: ${album.numero}<br>
                                Série: ${serie.nom}<br>
                                Auteur: ${author.nom}<br>
                            </p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <p class="card-text position-absolute mx-auto pt-2">
                            Prix: ${album.prix}&euro;
                        <p>
                        <a href="#" class="btn btn-primary float-right">Ajouter au panier</a>
                    </div>
                </div>
            </div>
            `;
            containerCard.innerHTML += content;
        });
    });