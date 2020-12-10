const dbPromised = idb.open("GowFud", 1, upgradeDb => {
  const articlesObjectStore = upgradeDb.createObjectStore("pesanan", {
    keyPath: "id"
  });
  articlesObjectStore.createIndex("id", "id", { unique: false });
});

// const saveForLater =() => {
//   dbPromised
//     .then(db => {
//       const tx = db.transaction("pesanan", "readwrite");
//       const store = tx.objectStore("pesanan");
//       store.add({
//         id : '5',
//         nama : 'kwetiyay',
//         banyak : 1,
//         harga : 400
//       });
//       return tx.complete;
//     })
//     .then(() => {
//       M.toast({ html: `Jadwal pertandingan berhasil di simpan.` });
//     })
//     .catch(() => {
//       M.toast({ html: `Jadwal sudah pernah disimpan` });
//     })
//     ;
// }

const deleteFav = key => {
  dbPromised.then(db => {
    var tx = db.transaction('pesanan', 'readwrite');
    var store = tx.objectStore('pesanan');
    store.delete(key);
    return tx.complete;
  }).then(() => {
    console.log('Item deleted');
    // window.location = "index.html";
    getSavedOrder();
  });
}


const getAll = () => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("pesanan", "readonly");
        const store = tx.objectStore("pesanan");
        return store.getAll();
      })
      .then(pesanan => {
        resolve(pesanan);
      });
  });
}

const favorite = (item) => {
  dbPromised
    .then(db => {
      const tx = db.transaction("pesanan", "readwrite");
      const store = tx.objectStore("pesanan");
      store.put(item);
      return tx.complete;
    })
    .then(() => {
      M.toast({ html: `Pesanan berhasil di simpan di keranjang.` });
      getSavedOrder();
    })
    .catch(() => {
      M.toast({ html: `Pesanan sudah pernah disimpan` });
    })
    ;
}

