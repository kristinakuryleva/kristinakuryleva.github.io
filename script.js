// Данные картин
const paintings = [
    {
        id: 1,
        title: "死んだ男",
        category: "Paintings",
        image: "https://i.pinimg.com/1200x/f3/7a/a3/f37aa33fdc51670a096f6e752d85cb74.jpg",
        description: "私は子供たちがゴミを恐れないようにしたい",
        size: "60×80 см"
    },
    {
        id: 2,
        title: "Eyes",
        category: "Paintings",
        image: "https://i.pinimg.com/736x/0a/38/ec/0a38ecf6aeef470b0b287970f0c4c304.jpg",
        description: "時々静かにしておくことは忍耐強いことを意味しません。",
        size: "50×70 см"
    },
    {
        id: 3,
        title: "目のあるシャツ",
        category: "Customclothing",
        image: "https://i.pinimg.com/736x/f0/46/94/f0469460c787a90c68eba2a4a4079968.jpg",
        description: "彼らは私が吹き飛ばされていると言いますが、私は振動し続けます。",
        size: "S-M"
    },
    {
        id: 4,
        title: "Moth",
        category: "Customdolls",
        image: "https://i.pinimg.com/1200x/c6/0a/28/c60a28a3a1283a38c93351cdd1a09e96.jpg",
        description: "私はむしろ死ぬだろう、私はむしろ死ぬだろう、私はむしろ死ぬだろう、私はむしろ死ぬだろう",
        size: "15×40 см"
    },
    {
        id: 5,
        title: "People..",
        category: "Paintings",
        image: "https://i.pinimg.com/736x/3e/31/51/3e3151a5ec123b58bae0f8c083240132.jpg",
        description: "多分それはあなたの目の前で人生が飛ぶ方法ですか？",
        size: "60×90 см"
    },
    {
        id: 6,
        title: "悪霊",
        category: "Customclothing",
        image: "https://i.pinimg.com/736x/a1/c8/c9/a1c8c9121ff168bcb0f3c4b34895d69f.jpg",
        description: "こんにちは、生命が目の前には、このfilmstrip",
        size: "S-M"
    }
];

// Инициализация галереи
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    paintings.forEach(painting => {
        const paintingElement = document.createElement('div');
        paintingElement.className = `gallery-item ${painting.category}`;
        paintingElement.innerHTML = `
            <img src="${painting.image}" alt="${painting.title}">
            <div class="gallery-item-info">
                <h3>${painting.title}</h3>
                <p>${painting.description}</p>
            </div>
        `;
        paintingElement.addEventListener('click', () => openModal(painting));
        galleryGrid.appendChild(paintingElement);
    });
}

// Фильтрация картин
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Убираем активный класс у всех кнопок
            filterBtns.forEach(b => b.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            filterPaintings(filter);
        });
    });
}

// Фильтрация картин по категории
function filterPaintings(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Модальное окно
function openModal(painting) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalSize = document.getElementById('modalSize');
    
    modalImage.src = painting.image;
    modalTitle.textContent = painting.title;
    modalDescription.textContent = painting.description;
    modalSize.textContent = `Размер: ${painting.size}`;
    
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Прокрутка к галерее
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({
        behavior: 'smooth'
    });
}

// Плавная прокрутка для навигации
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initGallery();
    initFilters();
    initSmoothScroll();
    
    // Закрытие модального окна
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    
    // Отправка формы
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
        this.reset();
    });
});

