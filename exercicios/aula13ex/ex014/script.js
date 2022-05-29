function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'dia.png'
        document.body.style.background = '#6099d0'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#fd6300'
    }else {
        // BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#382d49'
    }
}
