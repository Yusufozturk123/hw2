var alfabe = [];
var kelimeler = [];
var secilenKelime = "";
var denemeSayisi = 0;
var countOfFound = 0;
var hak = 7;
var sonuc = null;
var alan = null;


function oto() {
    sonuc = document.getElementById("sonuc");
    alan = document.getElementById("current-status");
    alfabe = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U','V','Y', 'Z'];
    kelimeler = ["ANKARA", "ADANA", "ORDU", "BOLU", "ARDAHAN", "KARAMAN", "ANTALYA"];

    var sayiuret = rastgeleSayi(0, kelimeler.length);
    secilenKelime = kelimeler[sayiuret].toUpperCase();

    for (var i = 0; i < secilenKelime.length; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.readOnly = true;
        document.getElementById("inputs").appendChild(input);
    }

    for (var i = 0; i < alfabe.length; i++) {
        var btnolustur = document.createElement("button");
        btnolustur.innerHTML = alfabe[i];
        btnolustur.onclick = kontrol;
        document.getElementById("buttons").appendChild(btnolustur);
    }
}

function kontrol() {
    var normalDeger = this.innerHTML,
        bul = true;

    for (var i = 0; i < secilenKelime.length; i++) {
        if (secilenKelime[i] == normalDeger) {
            document.getElementsByTagName("input")[i].value = normalDeger;
            bul = false;
            countOfFound++;
        }
    }

    if (countOfFound == secilenKelime.length) {
        sonuc.innerHTML = "Congratulations !!!";
        return;
    }

    this.disabled = true;

    if (bul) {
        denemeSayisi++;
        alan.src = "img/adam_" + denemeSayisi + ".gif";

        sonuc.innerHTML = "Try it " + denemeSayisi + " times.";
        sonuc.innerHTML += "<br />";
        sonuc.innerHTML += "You have " + (hak - denemeSayisi) + " remaining.";

        if (denemeSayisi == hak) {
            var butonlar = document.getElementsByTagName("button");

            for (var i = 0; i < butonlar.length; i++) {
                butonlar[i].disabled = true;
            }
        }

    }

}

function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

window.onload = oto;