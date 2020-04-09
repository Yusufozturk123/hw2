var i = 0;
//var m=1;
function ulolusturma() {
    var ulolustur = document.createElement('ul');
    ulolustur.setAttribute('id', 'ul');
    document.getElementById('flex-box-alan-2').appendChild(ulolustur);
    i++;
    if (i > 0) {
        document.getElementById('yenile').remove();
    }
}
function ekle() {
    var yaz = document.giris.giris.value;
    var liolustur = document.createElement('li');
    var yazi = document.createTextNode(yaz);
    liolustur.appendChild(yazi);
    liolustur.setAttribute('id', 'listesira');
    document.getElementById('ul').appendChild(liolustur);
}
function sil() {
    document.getElementById('ul').remove();
    ulolusturma();
}

/*function keyKontrol(key){
    var keyKod;
    keyKod = key.which;
    if(keyKod == 13){
        
            var yaz=document.giris.listegir.value;
            var liolustur =document.createElement('li');
            var yazi=document.createTextNode(yaz);
            liolustur.appendChild(yazi);
            liolustur.setAttribute('id','listesira');
            document.getElementById('ul').appendChild(liolustur);
    }
} */