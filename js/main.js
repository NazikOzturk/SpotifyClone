// uı classının örneğini al

import { UI } from "./ui.js";

// api classını import et

import { API } from "./api.js";

//uı classının örneğini al
const ui = new UI();

//api classının örneğini al
const api = new API();

// sayfa yüklendiği anı izle

document.addEventListener("DOMContentLoaded", async () => {
  // loaderı render et

  ui.renderLoader();

  // api'a istek at ve apidan gelen veri ile arayüzü renderla

  api
    .getPopular()
    .then((data) => ui.renderCards(data))
    .catch((err) => {
      console.log(err);
    });
});

// form gönderildiğinde bunu izle ve fonk calıstır

ui.form.addEventListener("submit", (e) => {
  //sayfa yenilemeyi engelle

  e.preventDefault();

  // form gönderildiğinde input içindeki değeri al

  const query = e.target[0].value;

  // aratılan kelimenin basında ve sonundaki boslukları kaldır ve eger değer girilmemişse uyarı ver

  if (!query.trim()) {
    return alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz");
  }

  //loaderı render et
  ui.renderLoader();

  // titleı güncelle
  ui.updateTitle(query + " için sonuçlar");

  // kelime aratıldığı anda apiye istek at sonrasında gelen veriyle cartları ekrana render et
  api
    .searchMusic(query)
    .then((data) => {
      ui.renderCards(data);
    })
    .catch((err) => alert(err));
});

// Liste kısmındaki play iconuna tıklayınca arayüzü bu şarkı verisine göre renderlayacak fonksiyon

ui.list.addEventListener("click", (e) => {
  // list içerisinde tıklanılan elemanın play butonu olup olmadığını kontrol et

  if (e.target.className == "play") {
    // play butonunun kapsayıcısına eriş

    const card = e.target.closest(".card");

    // kapsayıcıya verilen dataset özelliklerini al (title, image, mp3)

    const data = card.dataset;

    // player kısmını render et

    ui.renderPlayer(data);
  }
});
