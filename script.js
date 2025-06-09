function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'meninoCrianca.jpg')
            } else if (idade < 21){
                //JOVEM
                img.setAttribute('src', 'homemJovem.jpg')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'homemVelho.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'homemVelho.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
             if(idade >= 0 && idade < 10){
                //CRIANÇA
            } else if (idade < 21){
                //JOVEM
            } else if (idade < 50){
                //ADULTO
            } else {
                //IDOSO
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}