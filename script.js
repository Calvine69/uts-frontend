const games = [
  { id: 'g1', name: 'Congklak', region: 'barat', excerpt: 'Permainan papan dengan biji-bijian tradisional.', desc: 'Congklak dimainkan dengan papan kayu berlubang dan biji-bijian. Tujuannya mengumpulkan biji terbanyak.', rules: ['2 pemain', 'Ambil biji dari lubang', 'Giliran berjalan searah jarum jam'] },
  { id: 'g4', name: 'Bentengan', region: 'barat', excerpt: 'Permainan dua kelompok untuk merebut benteng lawan.', desc: 'Masing-masing tim memiliki benteng. Pemain harus menyentuh benteng lawan tanpa tertangkap.', rules: ['2 kelompok', 'Ada benteng masing-masing', 'Pemain tertangkap jadi tawanan'] },
  { id: 'g7', name: 'Bekel', region: 'barat', excerpt: 'Permainan bola kecil dan biji-bijian.', desc: 'Bekel dimainkan dengan melempar bola karet kecil dan mengambil biji bekel sebelum bola jatuh.', rules: ['Gunakan bola kecil', 'Ambil biji sesuai urutan', 'Tidak boleh gagal tangkap bola'] },
  { id: 'g8', name: 'Petak Umpet', region: 'barat', excerpt: 'Permainan sembunyi-sembunyian yang seru.', desc: 'Satu anak jadi pencari, yang lain bersembunyi. Pencari harus menemukan semua temannya.', rules: ['1 pencari', 'Yang lain bersembunyi', 'Pencari harus menemukan semua pemain'] },
  { id: 'g2', name: 'Gobak Sodor', region: 'tengah', excerpt: 'Permainan kelompok dengan strategi menghadang lawan.', desc: 'Gobak Sodor dimainkan oleh dua tim. Satu tim menjaga garis, tim lain mencoba melewati.', rules: ['Minimal 6 pemain', 'Dua kelompok', 'Tidak boleh keluar garis'] },
  { id: 'g5', name: 'Jamuran', region: 'tengah', excerpt: 'Permainan dengan nyanyian dan gerakan.', desc: 'Anak-anak membentuk lingkaran sambil bernyanyi, lalu mengikuti instruksi pemimpin.', rules: ['Bernyanyi bersama', 'Ikuti perintah pemimpin', 'Tidak boleh salah gerakan'] },
  { id: 'g6', name: 'Cublak-Cublak Suweng', region: 'tengah', excerpt: 'Permainan tebak tangan sambil bernyanyi.', desc: 'Satu anak tidur tengkurap, pemain lain menyembunyikan batu kecil di tangan sambil bernyanyi.', rules: ['Minimal 4 anak', '1 jadi penebak', 'Sembunyikan batu di tangan'] },
  { id: 'g9', name: 'Engklek', region: 'tengah', excerpt: 'Permainan lompat kotak dengan satu kaki.', desc: 'Engklek dimainkan dengan menggambar kotak di tanah dan melompat dengan satu kaki.', rules: ['Gambar kotak di tanah', 'Lempar gaco ke kotak', 'Lompat sesuai aturan'] },
  { id: 'g3', name: 'Egrang', region: 'timur', excerpt: 'Permainan dengan berjalan di atas bambu.', desc: 'Egrang melatih keseimbangan dengan bambu panjang yang diberi pijakan.', rules: ['2 batang bambu', 'Latihan keseimbangan', 'Lomba siapa tercepat'] },
  { id: 'g10', name: 'Lompat Tali', region: 'timur', excerpt: 'Permainan melompati tali dari karet.', desc: 'Dua pemain memegang tali dari karet, pemain lain melompatinya. Tinggi tali makin lama makin naik.', rules: ['Gunakan karet dirangkai', '2 orang pegang tali', 'Pemain lain bergiliran lompat'] },
  { id: 'g13', name: 'Boy-boyan', region: 'timur', excerpt: 'Permainan dengan bola kecil untuk merobohkan tumpukan pecahan genteng.', desc: 'Satu tim menyusun pecahan genteng, tim lain melempar bola untuk merobohkannya lalu mencoba menyusun kembali.', rules: ['2 kelompok', 'Gunakan bola kecil', 'Lempar & susun kembali'] }
];

const cardsEl = document.getElementById('cards');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalRules = document.getElementById('modalRules');
const closeBtn = document.getElementById('closeBtn');

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function renderCards(data) {
  cardsEl.innerHTML = '';
  if (data.length === 0) {
    cardsEl.innerHTML = '<p>Tidak ada permainan ditemukan.</p>';
    return;
  }
  data.forEach(game => {
    const isFav = favorites.includes(game.id);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="https://picsum.photos/seed/${game.id}/300/200" alt="${game.name}">
      <div class="title">${game.name}</div>
      <div class="region">Jawa ${game.region.charAt(0).toUpperCase() + game.region.slice(1)}</div>
      <p class="excerpt">${game.excerpt}</p>
      <div class="actions">
        <button class="button" data-id="${game.id}">Detail</button>
        <button class="button favorite" data-fav="${game.id}">${isFav ? 'Hapus Favorit' : '❤ Favorit'}</button>
      </div>
    `;
    cardsEl.appendChild(card);
  });
}

function filterRegion(region) {
  let filtered;
  if (region === 'favorite') filtered = games.filter(g => favorites.includes(g.id));
  else filtered = games.filter(g => g.region === region);
  renderCards(filtered);
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    link.classList.add('active');
    filterRegion(link.dataset.region);
  });
});

searchInput.addEventListener('input', () => {
  const val = searchInput.value.toLowerCase();
  const activeRegion = document.querySelector('nav a.active').dataset.region;
  let filtered = games.filter(g => g.name.toLowerCase().includes(val));
  if (activeRegion !== 'all' && activeRegion !== 'favorite') {
    filtered = filtered.filter(g => g.region === activeRegion);
  } else if (activeRegion === 'favorite') {
    filtered = filtered.filter(g => favorites.includes(g.id));
  }
  renderCards(filtered);
});

cardsEl.addEventListener('click', e => {
  const id = e.target.dataset.id;
  const favId = e.target.dataset.fav;
  if (id) {
    const game = games.find(g => g.id === id);
    modalTitle.textContent = game.name;
    modalDesc.textContent = game.desc;
    modalRules.innerHTML = game.rules.map(r => `<li>${r}</li>`).join('');
    modal.classList.remove('hidden');
  }
  if (favId) {
    if (!favorites.includes(favId)) favorites.push(favId);
    else favorites = favorites.filter(f => f !== favId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    const activeRegion = document.querySelector('nav a.active').dataset.region;
    filterRegion(activeRegion);
  }
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
window.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.querySelector('nav a[data-region="barat"]').classList.add('active');
  filterRegion('barat');
});
