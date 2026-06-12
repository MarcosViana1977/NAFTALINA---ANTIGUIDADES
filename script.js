document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    let currentIndex = 0;

    function showImage(index) {
        // Remove a classe ativa da imagem atual
        items[currentIndex].classList.remove('active');
        
        // Atualiza o index de forma infinita (roda o carrossel)
        currentIndex = (index + items.length) % items.length;
        
        // Adiciona a classe ativa na nova imagem
        items[currentIndex].classList.add('active');
    }

    // Eventos de clique nos botões
    nextBtn.addEventListener('click', () => {
        showImage(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showImage(currentIndex - 1);
    });

    // Atalho: Mudar imagem usando as setas do teclado se estiver na galeria
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            showImage(currentIndex + 1);
        } else if (e.key === 'ArrowLeft') {
            showImage(currentIndex - 1);
        }
    });
});
