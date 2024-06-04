let slike = ['images/slika1.jpg', 'images/slika2.jpg', 'images/slika3.jpg', 'images/slika4.jpg', 'images/slika5.jpg', 'images/slika6.jpg', 'images/slika7.jpg', 'images/slika8.jpg', 'images/slika9'];
let slika = document.querySelector('#slika');
function prikaz(i) {
    slika.src = slike[i-1];
}