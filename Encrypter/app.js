let siono = 0;
let arrayEncrip = ['a', 'e', 'i', 'o', 'u'];
let arrayDecrip = ['ai', 'enter', 'imes', 'ober', 'ufat'];
let text = '';

function encriptText() {
    text = '';
    let str = document.getElementById('input').value;
    if (str === '') {
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
        if (str === '') {
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
            console.log("Text copied to clipboard...")
        })
            .catch(err => {
            console.log('Something went wrong', err);
        })
    }
    else {return;}
}
