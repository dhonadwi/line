const nasgor = document.querySelector('.nasgor');
nasgor.addEventListener('click', ()=>{
  item = {
    'id' :1,
    'nama' : 'nasgor',
    'jumlah' : 1,
    'src' : 'assets/images/nasi-goreng.jpg'
  }
  favorite(item);
});
// miegoreng
// capcay
const kwetiau = document.querySelector('.kwetiaw');
kwetiau.addEventListener('click',()=>{
  item ={
    'id' : 4,
    'nama' : 'Kwetiau',
    'jumlah' : 1,
    'src' : 'assets/images/kwetiaw.jpg'
  };
  favorite(item);
});

const miegoreng = document.querySelector('.miegoreng');
miegoreng.addEventListener('click', ()=>{
  item ={
    'id' : 2,
    'nama' : 'Mie Goreng',
    'jumlah' : 1,
    'src' : 'assets/images/mie-goreng.jpg'
  };
  favorite(item);
});

const capcay = document.querySelector('.capcay');
capcay.addEventListener('click',()=>{
  item ={  
    'id' : 3,
    'nama' : 'Capcay',
    'jumlah' : 1,
    'src' : 'assets/images/capcay.jpg'
  };
  favorite(item);
});