function getSavedOrder() {
  getAll().then(orders => {
    console.log(orders);
    // Menyusun komponen card artikel secara dinamis
    let ordersHTML = "";
    if (parseInt(orders.length) >= 1) {
      document.querySelector('.btnpesan').style.visibility = 'visible';

      orders.forEach(function (order) {
        // var description = article.harga;
        ordersHTML += `
                  <div class="card">
                    <a href="./article.html?id=${order.id}">
                      <div class="card-image waves-effect waves-block waves-light">
                        <img height='100px' src="${order.src}" />
                      </div>
                    </a>
                    <div class="card-content">
                      <span class="card-title truncate">${order.nama}</span>
                      Jumlah :
                      <div class="input-field inline">
                        <input id="email_inline" type="number" class="validate" value="${order.jumlah}">
                      </div>
                      <button onclick="deleteFav(${order.id})">Hapus</button>
                    </div>
                  </div>
                `;
      });
    } else {
      document.querySelector('.btnpesan').style.visibility = 'hidden';
      ordersHTML += `
      <div class="card">
      <p class='red pe'>Masih Kosong</p>
      </div>
    `;
      console.log(orders.length);
    }
    // Sisipkan komponen card ke dalam elemen dengan id #body-content
    document.getElementById("pesanan").innerHTML = ordersHTML;
  });

}

getSavedOrder();

const order = () => {
  getAll().then(items => {
    items.forEach(item => {
      console.log(item.id)
      deleteFav(item.id);
    })
  })
}

const tombol = document.querySelectorAll('.tambah');
tombol.forEach(pencet => {
  pencet.addEventListener('click', () => {
    alert('haha');
  });
});

// document.querySelector('#banyaka').addEventListener('change',()=>{
//   alert('haha');
// })

document.querySelector('.btnpesan').addEventListener('click', () => {
  order();
  alert('Terimakasih Telah memesan makanan di GowFud')
})