const projects = [
  {
    title: 'Adapteach: Adaptive Programming Learning Platform',
    img: 'assets/images/thesis-ai-system.svg',
    type: 'Thesis',
    year: '3rd Year',
    description: 'Research and prototype work around AI-supported learning workflows, responsible data use, and full-stack educational tooling. Included as the thesis project anchor for the portfolio.',
    link: '',
    lang: ['AI', 'ML', 'Full Stack', 'Research']
  },
  {
    title: 'SkillChain — Credential dApp',
    img: 'assets/images/proj-skillchain.png',
    type: 'Blockchain',
    year: 'Featured',
    description: 'A blockchain-based credential verification platform for secure digital certificate issuance, verification, Web3 integrations, and decentralized storage.',
    link: 'https://skillchains.vercel.app/',
    lang: ['Vue', 'Vite', 'Node.js', 'Solidity', 'Express.js', 'TSX']
  },
  {
    title: 'Tagum Marketplace POS + IMS',
    img: 'assets/images/activity-3.png',
    type: 'Full-Stack',
    year: 'Live App',
    description: 'A web-based point-of-sale and inventory management system designed to make sales tracking and stock management faster for Tagum Marketplace.',
    link: 'https://tagum-marketplace-production.up.railway.app/',
    lang: ['Vue', 'Vite', 'Node.js', 'TSX']
  },
  {
    title: 'Booking Management',
    img: 'assets/images/proj-booking.png',
    type: 'Course Project',
    year: 'OOP',
    description: 'A C# booking management system developed for the Object-Oriented Programming course, focused on structured data handling and user workflows.',
    link: 'https://github.com/NightAzure/BookingManagement',
    lang: ['C#']
  },
  {
    title: 'CurrencyX',
    img: 'assets/images/proj-currency.png',
    type: 'Course Project',
    year: 'Programming 2',
    description: 'A Java currency tool built for Computer Programming Concepts 2, emphasizing calculations, UI logic, and clean program structure.',
    link: 'https://github.com/NightAzure/CurrencyX',
    lang: ['Java']
  },
  {
    title: 'Sorting Monster',
    img: 'assets/images/proj-sorting.png',
    type: 'Game',
    year: 'Python',
    description: 'A Python game project created for Computer Programming Concepts 1 to visualize logic, sorting concepts, and interactive gameplay.',
    link: 'https://github.com/NightAzure/sorting-monster',
    lang: ['Python']
  },
  {
    title: 'DeadlineNotifier',
    img: 'assets/images/proj-dead.png',
    type: 'Systems',
    year: 'C++',
    description: 'A C++ deadline tracking utility developed for Introduction to Computer Systems, focused on reminders and simple productivity automation.',
    link: 'https://github.com/NightAzure/DeadlineNotifier',
    lang: ['C++']
  },
  {
    title: 'MiniArcades',
    img: 'assets/images/proj-mini.png',
    type: 'Plugin',
    year: 'Spigot',
    description: 'A Minecraft Spigot plugin with arcade machines and ModelEngine integration, including mini-game mechanics for server experiences.',
    link: 'https://www.spigotmc.org/resources/miniarcades-1-19-1-20-arcade-machines-flappy-creeper-aiming-game-familiar-block.111504/',
    lang: ['Java', 'YAML']
  },
  {
    title: 'Dodgebolt — Spigot Plugin',
    img: 'assets/images/proj-dodge.png',
    type: 'Plugin',
    year: 'Spigot',
    description: 'A dodgeball-inspired Minecraft minigame plugin built for Spigot servers, covering gameplay loops and server-side Java logic.',
    link: 'https://www.spigotmc.org/resources/dodgebolt-a-free-minigame-plugin-1-19-1-20.110720/',
    lang: ['Java', 'YAML']
  }
];

const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services Training and Certification',
    issued: 'Dec 2025',
    summary: 'Validated foundational knowledge of artificial intelligence, machine learning, generative AI concepts, and common AI use cases.',
    badge: 'AWS AI',
    link: ''
  },
  {
    title: 'IT Specialist — Data Analytics',
    issuer: 'Certiport, a Pearson VUE business',
    issued: 'Oct 2025',
    summary: 'Validated introductory data analytics skills, including data manipulation, analysis, visualization, communication, and responsible analytics practices.',
    badge: 'DATA',
    link: ''
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services Training and Certification',
    issued: 'Sep 2025',
    summary: 'Validated foundational understanding of AWS Cloud, cloud services, and core AWS terminology.',
    badge: 'AWS',
    link: ''
  },
  {
    title: 'Foundational C# with Microsoft',
    issuer: 'freeCodeCamp + Microsoft',
    issued: 'Jul 2024',
    summary: 'Completed a 35-hour curriculum covering C# programming fundamentals, syntax, logic, string formatting, mathematical operations, and conditional logic.',
    badge: 'C#',
    link: 'https://freecodecamp.org/certification/fcc3d51a3c5-61f8-4c3a-bdbe-1f9a0c2a8b88/foundational-c-sharp-with-microsoft'
  }
];

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function projectTemplate(project, index) {
  const image = `<div class="proj-img"><img src="${escapeHTML(project.img)}" alt="${escapeHTML(project.title)} preview" loading="lazy"></div>`;
  const body = `
    ${image}
    <div class="proj-desc">
      <div class="proj-meta"><span>${escapeHTML(project.type)}</span><span>${escapeHTML(project.year)}</span><span>#${String(index + 1).padStart(2, '0')}</span></div>
      <div class="proj-desc-title">${escapeHTML(project.title)}</div>
      <div class="proj-desc-info">${escapeHTML(project.description)}</div>
      <div class="proj-desc-lang">
        ${project.lang.map(lang => `<span class="proj-desc-lang-item">${escapeHTML(lang)}</span>`).join('')}
      </div>
    </div>
  `;

  if (project.link) {
    return `<a href="${escapeHTML(project.link)}" target="_blank" rel="noreferrer" class="proj-item">${body}</a>`;
  }

  return `<article class="project-card">${body}</article>`;
}

function certificationTemplate(cert) {
  const title = cert.link
    ? `<a target="_blank" rel="noreferrer" href="${escapeHTML(cert.link)}">${escapeHTML(cert.title)}</a>`
    : escapeHTML(cert.title);

  return `
    <article class="cert-item">
      <div class="cert-img" aria-hidden="true">${escapeHTML(cert.badge)}</div>
      <div class="cert-desc">
        <div class="cert-desc-title">${title}</div>
        <div class="cert-desc-issuer">${escapeHTML(cert.issuer)}</div>
        <div class="cert-desc-issued">Issued ${escapeHTML(cert.issued)}</div>
        <p class="cert-desc-summary">${escapeHTML(cert.summary)}</p>
      </div>
    </article>
  `;
}

const projectList = document.querySelector('.proj-list');
if (projectList) {
  projectList.innerHTML = projects.map(projectTemplate).join('');
}

const certList = document.querySelector('.cert-list');
if (certList) {
  certList.innerHTML = certifications.map(certificationTemplate).join('');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', event => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
