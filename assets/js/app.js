function getSavedArticles() {
  getAll().then(function(articles) {
    console.log(articles);
    // Menyusun komponen card artikel secara dinamis
    var articlesHTML = "";
    articles.forEach(function(article) {
      var description = article.harga;
      articlesHTML += `
                  <div class="card">
                    <a href="./article.html?id=${article.id}">
                      <div class="card-image waves-effect waves-block waves-light">
                        <img src="${article.src}" />
                      </div>
                    </a>
                    <div class="card-content">
                      <span class="card-title truncate">${article.nama}</span>
                      Jumlah :
                      <div class="input-field inline">
                        <input id="email_inline" type="number" class="validate" value="${article.jumlah}">
                      </div>
                      <button onclick="deleteFav(${article.id})">Hapus</button>
                    </div>
                  </div>
                `;
    });
    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("pesanan").innerHTML = articlesHTML;
  });
}

getSavedArticles();


                  

// document.addEventListener('DOMContentLoaded',()=>{
//   const tombol = document.querySelectorAll('.btn');
//   tombol.forEach(pencet => {
//     pencet.addEventListener('click',()=>{
//       alert('haha');
//     });

//   });
// });

const tombol = document.querySelectorAll('.tambah');
tombol.forEach(pencet => {
  pencet.addEventListener('click',()=>{
    alert('haha');
  });
});

document.querySelector('#banyaka').addEventListener('change',()=>{
  alert('haha');
})