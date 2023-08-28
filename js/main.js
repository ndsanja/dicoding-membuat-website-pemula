let showcaseData = [
  {
    title: 'Showcase 1',
    img: 'showcase1.png',
    stacks: [
      {
        title: 'Javascript',
        url: 'https://google.com',
      },
    ],
    links: [
      {
        title: 'preview',
        url: 'https://google.com',
      },
      {
        title: 'github',
        url: 'https://github.com',
      },
    ],
  },
  {
    title: 'Showcase 1',
    img: 'showcase1.png',
    stacks: [
      {
        title: 'Javascript',
        url: 'https://google.com',
      },
    ],
    links: [
      {
        title: 'preview',
        url: 'https://google.com',
      },
      {
        title: 'github',
        url: 'https://github.com',
      },
    ],
  },
  {
    title: 'Showcase 1',
    img: 'showcase1.png',
    stacks: [
      {
        title: 'Javascript',
        url: 'https://google.com',
      },
    ],
    links: [
      {
        title: 'preview',
        url: 'https://google.com',
      },
      {
        title: 'github',
        url: 'https://github.com',
      },
    ],
  },
];

let skillsData = [
  {
    title: 'Belajar Dasar Git dengan GitHub',
    img: 'skills/Belajar Dasar Git dengan GitHub.png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Belajar Dasar Google Cloud',
    img: 'skills/Belajar Dasar Google Cloud.png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Belajar Dasar Manajemen Proyek',
    img: 'skills/Belajar Dasar Manajemen Proyek.png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Belajar Dasar Visualisasi Data',
    img: 'skills/Belajar Dasar Visualisasi Data.png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    img: 'skills/Belajar Membuat Aplikasi Back-End untuk Pemula.png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    img: 'skills/Cloud Practitioner Essentials (Belajar Dasar AWS Cloud).png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
  {
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    img: 'skills/Pengenalan ke Logika Pemrograman (Programming Logic 101).png',
    url: 'https://www.dicoding.com/users/niladwisanja/academies',
  },
];

let showcase = document.getElementById('showcase');
let skill = document.getElementById('skills');
let burger = document.getElementById('burger');
let mobileMenuItem = document.querySelectorAll('.menu-item');
let mobileMenu = document.querySelector('.mobile');

//handle mobile mwnu

burger?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
});

mobileMenuItem?.forEach((e) => {
  e.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Mapping Shocase Card
showcase.insertAdjacentHTML(
  'beforeend',
  showcaseData
    .map(
      (e) => `
  <div class="showcase">
    <img src="assets/showcase1.jpg" alt="Showcase 1" />
      <h2>${e.title}</h2>
      <section class="stacks">
       ${e.stacks
         .map((stack) => `<a href="${stack.url}">${stack.title}</a>`)
         .join('')}
      </section>
      <section class="links">
      ${e.links
        .map(
          (link) => `
          <div class="link-list">
          ${
            link.title === 'preview'
              ? '<span><i class="fa-solid fa-eye"></i></span>'
              : '<span><i class="fa-brands fa-github"></i></span>'
          }
            <a href="${link.url}">${link.title}</a>
          </div>`
        )
        .join('')}
      </section>
  </div>
  `
    )
    .join('')
);

//Mapping Skills Card
skill.insertAdjacentHTML(
  'beforeend',
  skillsData
    .map(
      (e) => `
  <div class="skills">
    <img src="assets/${e.img}" alt="${e.title}" />
    <div class="content">
      <a href="${e.url}" target="_blank">${e.title}</a>
    </div>
  </div>
  `
    )
    .join('')
);
