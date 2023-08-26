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
];

let showcase = document.getElementById('showcase');
let skill = document.getElementById('skills');

// Mapping Shocase Card
showcase.insertAdjacentHTML(
  'beforeend',
  showcaseData
    .map(
      (e) => `
  <article class="showcase">
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
  </article>
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
  <article class="skills">
    <img src="assets/${e.img}" alt="${e.title}" />
    <a href="${e.url}" target="_blank">${e.title}</a>
  </article>
  `
    )
    .join('')
);
