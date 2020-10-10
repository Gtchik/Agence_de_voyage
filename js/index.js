slidr.create('slidr-div', {
  direction: 'horizontal',
  fade: false,
        speed: 1300,
  keyboard: true,

        parallax: true,
  overflow: true,
  pause: false,
  theme: '#222',
  timing: { 'cube': '0.5s ease-in' },
  touch: true,
  transition: 'cube',
  loop: true,
  autoplay: {
      delay: 10000
  },
  keyboard: {
    enabled: true,
  }

}).start();

var travels = [
  {
    'src_img':'./data/img/Villa.jpg',
    'title':'Villa Caraïbes',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/forêt.jpg',
    'title':'FORÊT',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/montagne.jpg',
    'title':'MONTAGNE',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/mer.jpg',
    'title':'LA MER',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/lune.jpg',
    'title':'LA LUNE',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/chateau.jpg',
    'title':'CHATEAU',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/cimetiere.jpg',
    'title':'CIMETIERE',
    'desc':'Lorem ipsum dolor sit amet.'
  },
  {
    'src_img':'./data/img/villa_mont.jpg',
    'title':'VILLA RETRAITE',
    'desc':'Lorem ipsum dolor sit amet.'
  }
];



for(var travel of travels)
{
  document.getElementsByClassName('alltravels')[0].innerHTML += `
<a href="./html/reservation.html?destination=`+travel.title+`" class="color-black">
  <div class="col-3">
      <div class="travel">
        <div class="travel-img">
          <img src="`+travel.src_img+`" alt="">
        </div>
        <div class="travel-description">
          <h2>`+travel.title+`</h2>
          <p>`+travel.desc+`</p>
        </div>
      </div>
    </div>
  </a>`;
    console.log('a');
}
