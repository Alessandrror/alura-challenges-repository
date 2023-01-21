let allow = 1;
let arrayEncrip = ['a', 'e', 'i', 'o', 'u'];
let arrayDecrip = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let text = '';
let rules = 0;
const mayusytildes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S',
                    'T','U','V','W','X','Y','Z','Á','É','Í','Ó','Ú','À','È','Ì','Ò','Ù','Á','É','Í',
                    'Ó','Ú','Ý','Â','Ê','Î','Ô','Û','Ã','Ẽ','Ĩ','Õ','Ũ','Ä','Ë','Ï','Ö','Ü','Ÿ','Ç','á','é','í','ó','ú'];
let show = document.getElementById('info');

function encriptText() {
    text = '';
    let str = document.getElementById('input').value;
    comprobarReglas(mayusytildes,str);
    if (str === '' || rules) {
        allow = 0;
        validar();
        return;
    }
    else {
        text = str.replaceAll('u', 'ufat').replaceAll('o', 'ober').replaceAll('i', 'imes').replaceAll('e', 'enter').replaceAll('a', 'ai');
        return showText(text);
    }
}

function decriptText() {
    text = '';
    let str = document.getElementById('input').value;
    comprobarReglas(mayusytildes,str);
    if (str === '' || rules) {
        allow = 0;
        validar();
        return;
    }
    else {
        text = str.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u');
        return showText(text);
    }
}

function showText() {
    allow = 1;
    validar();
    if(document.getElementById('txt')) {
        return document.getElementById('txt').innerHTML=text;
    }
    else {
        document.getElementById('output').insertAdjacentHTML("beforeend",'<textarea readonly id="txt" >'+text+'</textarea>');
    }    
}


function validar() {
    if (allow) {   
        document.getElementById('output').classList.add('text-encrypted', 'text-encrypted-yes');
        document.getElementById('output').classList.remove('text-encrypted-no');
        document.getElementById('ad').classList.add('deactive');
        document.getElementById('output').classList.remove('deactive');
        document.getElementById('btn').classList.remove('deactive');
        if (document.getElementById('txt')) {
            document.getElementById('txt').classList.remove('deactive');
        }
    }
    else {
        document.getElementById('output').classList.add('text-encrypted-no');
        document.getElementById('output').classList.remove('text-encrypted', 'text-encrypted-yes');
        document.getElementById('ad').classList.remove('deactive');
        document.getElementById('output').classList.add('deactive');
        document.getElementById('btn').classList.add('deactive');
        if(document.getElementById('txt')) {
            document.getElementById('txt').classList.add('deactive');
        }
    }
}

function copyToClipboard() {
    if(document.getElementById('txt')) {
        var content = document.getElementById('txt').innerHTML;
        navigator.clipboard.writeText(content)
            .then(() => {
                showCopyMessage();
                console.log("Text copied to clipboard...");
            })
            .catch(err => {
                console.log('Something went wrong', err);
            })
    }
    else {return;}
}

function comprobarReglas(arr,val) {
    for(let i = 0; i < val.length; i++) {
        if(arr.some((arrVal) => val[i] === arrVal)) {
            contarAdelante();
            return rules = 1; 
        } else {
            rules = 0;
        }
    }
    return rules; 
}

function contarAdelante() {
    setTimeout(mostrarMensaje, 1)
}

function contarAtras() {
    setTimeout(quitarMensaje, 1000)
}

function mostrarMensaje() {
    show.classList.add('enfocar');
    contarAtras();
}

function quitarMensaje() {
    show.classList.remove('enfocar');
}

function showCopyMessage() {
    document.getElementById('body-modal').insertAdjacentHTML("beforeend",'<div id="bgmodals-id" class="bg-modal"></div><div id="modalabs-id" class="modal-abs"><p>&#10004;</p><p>¡Copiado!</p><p>Su selección ha sido copiada en el portapapeles</p></div>');
    setTimeout(quitCopyMessage, 1000);
}

function quitCopyMessage() {
    document.getElementById('body-modal').classList.remove('modal-rel')
    document.getElementById('modalabs-id').remove();
    document.getElementById('bgmodals-id').remove();
}