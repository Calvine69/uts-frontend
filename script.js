const games = [

  {
    id: 'g1',
    name: 'Congklak',
    region: 'barat',
    excerpt: 'Permainan papan dengan biji-bijian tradisional.',
    desc: 'Congklak dimainkan dengan papan dan biji. Tujuannya mengumpulkan biji terbanyak.',
    rules: ['Dua pemain', 'Giliran memindahkan biji', 'Kumpulkan di lumbung sendiri'],
    image: 'images/congklak.jpg'
  },
  {
    id: 'g2',
    name: 'Sondah',
    region: 'barat',
    excerpt: 'Mirip engklek, melompat kotak dengan satu kaki.',
    desc: 'Sondah populer di Jawa Barat, dimainkan dengan menggambar kotak di tanah lalu melompatinya.',
    rules: ['Gambar kotak di tanah', 'Lempar gaco', 'Lompat dengan satu kaki'],
    image: 'images/sondah.jpg'
  },
  {
    id: 'g3',
    name: 'Oray-orayan',
    region: 'barat',
    excerpt: 'Permainan berkelompok seperti ular berjalan.',
    desc: 'Anak-anak berbaris panjang, saling berpegangan sambil bernyanyi lagu oray-orayan.',
    rules: ['Anak-anak berbaris', 'Pegang pundak teman', 'Ikuti gerakan kepala'],
    image: 'images/orayorayan.jpg'
  },
  {
    id: 'g4',
    name: 'Galasin',
    region: 'barat',
    excerpt: 'Permainan beregu menghadang lawan.',
    desc: 'Galasin dimainkan dengan membuat garis di tanah, pemain menjaga garis agar lawan tidak lewat.',
    rules: ['Buat lapangan garis', 'Dibagi dua tim', 'Cegah lawan menembus garis'],
    image: 'images/galasin.jpg'
  },
  {
    id: 'g5',
    name: 'Kelereng',
    region: 'barat',
    excerpt: 'Bermain dengan bola kaca kecil.',
    desc: 'Kelereng dimainkan dengan cara menyentil kelereng ke kelereng lawan.',
    rules: ['Siapkan kelereng', 'Sentil kelereng untuk mengenai lawan', 'Yang kena, jadi milik pemain'],
    image: 'images/kelereng.jpg'
  },

  // Jawa Tengah
  {
    id: 'g6',
    name: 'Egrang',
    region: 'tengah',
    excerpt: 'Bermain dengan tongkat panjang untuk berjalan tinggi.',
    desc: 'Egrang melatih keseimbangan, biasanya dimainkan saat lomba.',
    rules: ['Gunakan 2 batang bambu', 'Naik dan berjalan', 'Siapa paling cepat dia menang'],
    image: 'images/egrang.jpg'
  },
  {
    id: 'g7',
    name: 'Dakon',
    region: 'tengah',
    excerpt: 'Permainan papan tradisional menggunakan biji-bijian.',
    desc: 'Dakon mirip congklak, tetapi punya variasi aturan di Jawa Tengah.',
    rules: ['Dua pemain', 'Memindahkan biji secara bergilir', 'Kumpulkan biji terbanyak'],
    image: 'images/dakon.jpg'
  },
  {
    id: 'g8',
    name: 'Cublak-cublak Suweng',
    region: 'tengah',
    excerpt: 'Permainan sambil bernyanyi dengan menebak benda.',
    desc: 'Anak-anak duduk melingkar sambil bernyanyi, satu anak menebak di mana biji/kerikil disembunyikan.',
    rules: ['Beberapa pemain duduk melingkar', 'Satu anak jadi penebak', 'Sembunyikan benda di telapak tangan'],
    image: 'images/cublak.jpg'
  },
  {
    id: 'g9',
    name: 'Engklek',
    region: 'tengah',
    excerpt: 'Melompat kotak dengan satu kaki, populer di desa.',
    desc: 'Engklek dimainkan dengan menggambar kotak di tanah, lalu melompatinya dengan satu kaki.',
    rules: ['Gambar kotak 6–8 petak', 'Gunakan gaco', 'Lompat hingga selesai rute'],
    image: 'images/engklek.jpg'
  },
  {
    id: 'g10',
    name: 'Petak Umpet',
    region: 'tengah',
    excerpt: 'Permainan bersembunyi dan mencari.',
    desc: 'Satu anak menjadi pencari, yang lain bersembunyi di sekitar area.',
    rules: ['Tentukan area bermain', 'Satu anak jadi penjaga', 'Yang tertangkap berganti jadi penjaga'],
    image: 'images/petakumpet.jpg'
  },

  // Jawa Timur
  {
    id: 'g11',
    name: 'Gobak Sodor',
    region: 'timur',
    excerpt: 'Permainan kelompok menghadang lawan melewati garis.',
    desc: 'Gobak Sodor dimainkan minimal 6 orang, bertujuan menghadang lawan melewati garis lapangan.',
    rules: ['2 tim saling berhadapan', 'Jaga garis masing-masing', 'Tim yang tembus menang'],
    image: 'images/gobaksodor.jpg'
  },
  {
    id: 'g12',
    name: 'Bentengan',
    region: 'timur',
    excerpt: 'Permainan tim untuk merebut benteng lawan.',
    desc: 'Dua tim memiliki markas. Pemain harus menyentuh benteng lawan tanpa tertangkap.',
    rules: ['Dibagi dua tim', 'Tiap tim punya markas', 'Sentuh benteng lawan untuk menang'],
    image: 'images/bentengan.jpg'
  },
  {
    id: 'g13',
    name: 'Jamuran',
    region: 'timur',
    excerpt: 'Permainan sambil bernyanyi lagu jamuran.',
    desc: 'Anak-anak membentuk lingkaran sambil bernyanyi, lalu mengikuti perintah sesuai syair.',
    rules: ['Bentuk lingkaran', 'Nyanyikan lagu jamuran', 'Ikuti instruksi sesuai syair'],
    image: 'images/jamuran.jpg'
  },
  {
    id: 'g14',
    name: 'Lompat Tali',
    region: 'timur',
    excerpt: 'Bermain dengan tali karet gelang yang dianyam panjang.',
    desc: 'Pemain melompat tali yang dipegang dua orang, semakin lama semakin tinggi.',
    rules: ['Dua anak pegang tali', 'Satu anak melompat', 'Tali semakin lama semakin tinggi'],
    image: 'images/lompattali.jpg'
  },
  {
    id: 'g15',
    name: 'Ular Naga',
    region: 'timur',
    excerpt: 'Permainan berkelompok dengan lagu ular naga panjang.',
    desc: 'Anak-anak membentuk barisan panjang, dua anak jadi pintu gerbang, lalu menangkap di akhir lagu.',
    rules: ['Bentuk barisan panjang', 'Bernyanyi sambil melewati pintu', 'Tangkap anak terakhir saat lagu berhenti'],
    image: 'images/ularnaga.jpg'
  }
];

// Elemen
const cardsEl = document.getElementById('cards');
const navLinks = document.querySelectorAll('nav a');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRules = document.getElementById('modalRules');
const searchInput = document.getElementById('searchInput');

let currentRegion = 'all';

// Render card
// Render card
function renderCards(region = 'all', keyword = '') {
  cardsEl.innerHTML = '';
  let list = region === 'all' ? games : games.filter(g => g.region === region);
  
  if (keyword) {
    const lower = keyword.toLowerCase();
    list = list.filter(g => g.name.toLowerCase().includes(lower));
  }

  if (list.length === 0) {
    cardsEl.innerHTML = '<p>Tidak ada permainan ditemukan.</p>';
    return;
  }

  list.forEach(game => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${game.image}" alt="${game.name}" class="card-img">
      <div class="title">${game.name}</div>
      <div class="region">${regionLabel(game.region)}</div>
      <div class="excerpt">${game.excerpt}</div>
      <div class="actions">
        <button class="button" data-id="${game.id}">Detail</button>
        <button class="button primary" data-share="${game.id}">Bagikan</button>
      </div>
    `;
    cardsEl.appendChild(card);
  });
}


// Region label
function regionLabel(region) {
  if (region === 'barat') return 'Jawa Barat';
  if (region === 'tengah') return 'Jawa Tengah';
  if (region === 'timur') return 'Jawa Timur';
  return '';
}

// Modal
cardsEl.addEventListener('click', e => {
  if (e.target.dataset.id) {
    const game = games.find(g => g.id === e.target.dataset.id);
    modalTitle.textContent = game.name;
    modalDesc.textContent = game.desc;
    modalRules.innerHTML = game.rules.map(r => `<li>${r}</li>`).join('');
    modal.style.display = 'flex';
  }
  if (e.target.dataset.share) {
    const game = games.find(g => g.id === e.target.dataset.share);
    alert(`Bagikan permainan: ${game.name}`);
  }
});
closeBtn.addEventListener('click', () => (modal.style.display = 'none'));
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});

// Filter nav
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    currentRegion = link.dataset.region;
    renderCards(currentRegion, searchInput.value);
  });
});

// Search
searchInput.addEventListener('input', () => {
  renderCards(currentRegion, searchInput.value);
});

// Awal
renderCards();
