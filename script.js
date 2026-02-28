// ===== Data =====
const releasesData = [
    {
        title: 'Between',
        year: '2026',
        date: '2026年3月8日',
        image: 'img/Between.png',
        description: 'あと少しの勇気が、今と未来を繋いでいく　揺れる瞬間を3人のキャストが歌うミニアルバム',
        link: 'between.html'
    },
    {
        title: 'Trinity',
        year: '2025',
        date: '2025',
        image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=870x10000:format=png/path/s97f07215ba52dca5/image/i97b65b7247a3b4f6/version/1760262821/image.png',
        description: '民族調音楽とエレクトロサウンドの融合　3名のキャストのボイス、コーラスが響き合うアルバム',
        link: 'trinity.html'
    },
    {
        title: 'Tropical Ascension',
        year: '2025',
        date: '2025年4月27日',
        image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=574x10000:format=png/path/s97f07215ba52dca5/image/ic028354757f3116e/version/1745591142/image.png',
        description: '澄み渡る空、満点の星、常夏の恋　夏をイメージしたつづみ＆ささらが歌うミニアルバム',
        link: 'tropical-ascension.html'
    }
];

const worksData = [
    { title: 'Between', year: '2026', image: 'img/Between.png', description: 'あと少しの勇気が、今と未来を繋いでいく　揺れる瞬間を3人のキャストが歌うミニアルバム', link: 'between.html' },
    { title: 'Trinity', year: '2025', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=870x10000:format=png/path/s97f07215ba52dca5/image/i97b65b7247a3b4f6/version/1760262821/image.png', description: '民族調音楽とエレクトロサウンドの融合　3名のキャストのボイス、コーラスが響き合うアルバム', link: 'trinity.html' },
    { title: 'Tropical Ascension', year: '2025', image: 'https://image.jimcdn.com/app/cms/image/transf/dimension=574x10000:format=png/path/s97f07215ba52dca5/image/ic028354757f3116e/version/1745591142/image.png', description: '澄み渡る空、満点の星、常夏の恋　夏をイメージしつづみ＆ささらが歌うたミニアルバム', link: 'tropical-ascension.html' },
    { title: 'CV', year: '2023', image: 'img/cv.png', description: 'CeVIO と VoiSona を代表するキャスト2名を　フィーチャーしたアルバム。全8曲。', link: 'cv.html' },
    { title: 'Harmonious', year: '2022', image: 'img/harmonious.jpg', description: '世界中のキッズが待っていた　CeVIO AI & CeVIO、新旧さとうささらが歌う珠玉の全10曲', link: 'harmonious.html' },
    { title: 'Turn Up the Volume!', year: '2019', image: 'img/turn_up.jpg', description: '思わずボリュームを上げたくなる　EDM、ロックトラックを収録したミニアルバム', link: 'turn-up-the-volume.html' },
    { title: 'Nostalgie', year: '2018', image: 'img/nostalgie.png', description: '"この歌声、今でもキミにとどいてるかな"　懐かしい気持ちにさせるさとうささらのミニアルバム', link: 'nostalgie.html' },
    { title: 'Fruit Parfait', year: '2017', image: 'img/fruit_parfait.jpg', description: 'さとうささらが様々なジャンルの曲を歌うよ♪　chibi_fireが贈る2nd ミニアルバム', link: 'fruit-parfait.html' }
];

// ===== DOM Elements =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const header = document.getElementById('header');
const releasesGrid = document.getElementById('releasesGrid');
const worksGrid = document.getElementById('worksGrid');
const themeToggle = document.getElementById('themeToggle');

// ===== Mobile Menu Toggle =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Theme Toggle =====
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
}

// ===== Header Scroll Effect =====
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ===== Intersection Observer for Sections =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// ===== Render Releases =====
function renderReleases(limit = null) {
    const data = limit ? releasesData.slice(0, limit) : releasesData;
    releasesGrid.innerHTML = data.map(release => {
        const imageHtml = `<img src="${release.image}" alt="${release.title}" class="release-image" loading="lazy">`;
        const contentHtml = `
            <div class="release-content">
                <h3 class="release-title">${release.title}</h3>
                <p class="release-date">${release.date}</p>
                <p class="release-description">${release.description}</p>
            </div>
        `;

        if (release.link) {
            return `
                <div class="release-card">
                    <a href="${release.link}" class="release-link-wrapper">
                        ${imageHtml}
                    </a>
                    ${contentHtml}
                </div>
            `;
        } else {
            return `
                <div class="release-card">
                    ${imageHtml}
                    ${contentHtml}
                </div>
            `;
        }
    }).join('');
}

// ===== Render Works =====
function renderWorks() {
    worksGrid.innerHTML = worksData.map(work => {
        const content = `
            <img src="${work.image}" alt="${work.title}" class="work-image" loading="lazy">
            <div class="work-content">
                <h3 class="work-title">${work.title}</h3>
                <p class="work-year">${work.year}</p>
            </div>
        `;

        if (work.link) {
            return `
                <a href="${work.link}" class="work-card work-link-wrapper">
                    ${content}
                </a>
            `;
        } else {
            return `
                <div class="work-card">
                    ${content}
                </div>
            `;
        }
    }).join('');
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the home page (index.html or root) to limit releases
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const limit = isHome ? 2 : null;

    if (releasesGrid) renderReleases(limit);
    if (worksGrid) renderWorks();

    // Background Grid Animation
    const bgGrid = document.getElementById('background-grid');
    if (bgGrid && worksData.length > 0) {
        // Create rows
        const rowCount = Math.ceil(window.innerHeight / 300) + 1; // 300px is img height
        const screenWidth = window.innerWidth;
        // Need enough images to cover width + scroll buffer. 300px width.
        const itemsPerRow = Math.ceil(screenWidth / 300) + 2;

        let gridHTML = '';

        for (let r = 0; r < rowCount; r++) {
            gridHTML += '<div class="grid-row">';
            // Duplicate content for smooth marquee loop
            // We create 2 sets of items to ensure seamless loop
            for (let s = 0; s < 2; s++) {
                for (let i = 0; i < itemsPerRow; i++) {
                    const randomWork = worksData[Math.floor(Math.random() * worksData.length)];
                    gridHTML += `<img src="${randomWork.image}" class="grid-item" alt="" loading="lazy">`;
                }
            }
            gridHTML += '</div>';
        }
        bgGrid.innerHTML = gridHTML;
    }
});

// ===== Smooth Scroll Enhancement =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
