function tocaSom(seletorAudio) {
    try {
        const Audio = document.querySelector(seletorAudio);
        Audio.play();
    } catch {
        console.log('Passe um seletor de audio válido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaTeclas.length; contador++) {
    
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => {
        tocaSom(idAudio);
    };

    tecla.onkeydown = (e) => {
        if(e.code === 'Enter' || e.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
}
