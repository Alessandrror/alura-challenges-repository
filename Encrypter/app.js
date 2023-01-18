let siono = 0;
let arrayEncrip = ['a', 'e', 'i', 'o', 'u'];
let arrayDecrip = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let text = '';
let nope = 0;
const mayusytildes = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S',
                    'T','U','V','W','X','Y','Z','Á','É','Í','Ó','Ú','À','È','Ì','Ò','Ù','Á','É','Í',
                    'Ó','Ú','Ý','Â','Ê','Î','Ô','Û','Ã','Ẽ','Ĩ','Õ','Ũ','Ä','Ë','Ï','Ö','Ü','Ÿ','Ç'];
let show = document.getElementById('info');
let cuerpo = document.getElementById('body');
let modal = '<div class="bg-modal"></div><div class="modal-abs"><p>&#10004;</p><p>¡Copiado!</p><p>Su selección ha sido copiada en el portapapeles</p></div>';

function encriptText() {
    text = '';
    let str = document.getElementById('input').value;
    comprobarReglas(mayusytildes,str);
    if (str === '' || nope) {
        siono = 0;
        validar();
        return;
    }
    else {
        for(let i = 0; str.length > i; i++) {
            str[i] === 'a' ? text += 'ai' :
            str[i] === 'e' ? text += 'enter' :
            str[i] === 'i' ? text += 'imes' :
            str[i] === 'o' ? text += 'ober' :
            str[i] === 'u' ? text += 'ufat' : 
            text += str[i];
        }
        return showText(text);
    }
}

function decriptText() {
    if(siono){
        text = '';
        let text2 = '';
        let text3 = '';
        let text4 = '';
        let text5 = '';
        let str = document.getElementById('input').value;
        comprobarReglas(mayusytildes,str);
        if (str === '' || nope) {
            siono = 0;
            validar();
            return;
        }
        else {
            text5 += str.replaceAll('ai', 'a');
            text4 = text5.replaceAll('enter', 'e');
            text3 = text4.replaceAll('imes', 'i');
            text2 = text3.replaceAll('ober', 'o');
            text = text2.replaceAll('ufat', 'u');
            return showText(text);
        }    
    }
    else {
        return;
    }

}

function showText() {
    siono = 1;
    validar();
    if(document.getElementById('txt')) {
        return document.getElementById('txt').innerHTML=text;
    }
    else {
        document.getElementById('output').insertAdjacentHTML("beforeend",'<textarea readonly id="txt" >'+text+'</textarea>');
    }    
}


function validar() {
    if (siono) {   
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
                // console.log("Text copied to clipboard...");
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
            return nope = 1; 
        } else {
            nope = 0;
        }
    }
    return nope; 
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
    // cuerpo.innerHTML = `${modal}`;
    cuerpo.appendChild(`${modal}`);
    cuerpo.classList.add('modal-rel');
    setTimeout(quitCopyMessage, 1000);
}

function quitCopyMessage() {
    cuerpo.classList.remove('modal-rel')
    cuerpo.removeChild(`${modal}`);
}

