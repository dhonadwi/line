const dbPromised = idb.open("PL-Info", 2, upgradeDb => {
  const articlesObjectStore = upgradeDb.createObjectStore("schedules", {
    keyPath: "id"
  });
  articlesObjectStore.createIndex("id", "id", { unique: false });
});

const saveForLater = article => {
  dbPromised
    .then(db => {
      const tx = db.transaction("schedules", "readwrite");
      const store = tx.objectStore("schedules");
      store.add(article.match);
      return tx.complete;
    })
    .then(() => {
      M.toast({ html: `Jadwal pertandingan berhasil di simpan.` });
    })
    .catch(() => {
      M.toast({ html: `Jadwal sudah pernah disimpan` });
    })
    ;
}

const getAll = () => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("schedules", "readonly");
        const store = tx.objectStore("schedules");
        return store.getAll();
      })
      .then(shcedules => {
        resolve(shcedules);
      });
  });
}

const getById = id => {
  return new Promise((resolve, reject) => {
    dbPromised
      .then(db => {
        const tx = db.transaction("schedules", "readonly");
        const store = tx.objectStore("schedules");
        return store.get(parseInt(id));
      })
      .then(schedule => {
        resolve(schedule);
      });
  });
}

const deleteById = id => {
  dbPromised.then(db => {
    const tx = db.transaction('schedules', 'readwrite');
    const store = tx.objectStore('schedules');
    store.delete(parseInt(id));
    return tx.complete;
  }).then(() => {
    M.toast({ html: `Jadwal sudah terhapus` });
  });
}