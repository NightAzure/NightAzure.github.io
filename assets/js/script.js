const certLinks = [
    'https://freecodecamp.org/certification/fcc3d51a3c5-61f8-4c3a-bdbe-1f9a0c2a8b88/foundational-c-sharp-with-microsoft',
    'https://www.codecademy.com/profiles/netSurfer80956/certificates/ddc94032dd07fd43ee02f994e8f72af9',
    'https://mcm.codechum.com/certificates/2141',
    'https://mcm.codechum.com/certificates/1945'
];

const projDatas = {
    '1': {
        'title': 'Booking Management',
        'img': 'assets/images/proj-booking.png',
        'description': 'Developed for Object-Oriented Programming Course\'s Project',
        'link': 'https://github.com/NightAzure/BookingManagement',
        'color': 'linear-gradient(43deg,rgb(165, 176, 230) 0%,rgb(241, 128, 234) 46%, #FFCC70 100%)',
        'lang': ['C#']
    }, 
    '2': {
        'title': 'Sorting Monster - Game',
        'img': 'assets/images/proj-sorting.png',
        'description': 'Developed for Computer Programming Concepts 1 Course',
        'link': 'https://github.com/NightAzure/sorting-monster',
        'color': 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)',
        'lang': ['Python']
    },
    '3': {
        'title': 'CurrencyX',
        'img': 'assets/images/proj-currency.png',
        'description': 'Developed for Computer Programming Concepts 2 Course',
        'link': 'https://github.com/NightAzure/CurrencyX',
        'color': 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
        'lang': ['Java']
    },
    '4': {
        'title': 'DeadlineNotifier',
        'img': 'assets/images/proj-dead.png',
        'description': 'Developed for Introduction to Computer Systems Course',
        'link': 'https://github.com/NightAzure/DeadlineNotifier',
        'color': 'linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)',
        'lang': ['C++']
    },
    '5': {
        'title': 'MiniArcades',
        'img': 'assets/images/proj-mini.png',
        'description': 'Arcade Machines, integrated with ModelEngine, developed for Minecraft Spigot Server.',
        'link': 'https://www.spigotmc.org/resources/miniarcades-1-19-1-20-arcade-machines-flappy-creeper-aiming-game-familiar-block.111504/',
        'color': 'linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)',
        'lang': ['Java', 'YAML']
    },
    '6': {
        'title': 'Dodgebolt - Spigot Plugin',
        'img': 'assets/images/proj-dodge.png',
        'description': 'A dodgeball-like minigame plugin developed for Minecraft Spigot Server.',
        'link': 'https://www.spigotmc.org/resources/dodgebolt-a-free-minigame-plugin-1-19-1-20.110720/',
        'color': 'linear-gradient(225deg,rgb(252, 153, 209) 0%,rgb(197, 138, 248) 50%,rgb(94, 171, 226) 100%)',
        'lang': ['Java', 'YAML']
    }, 
    '7': {
        'title': 'Tagum MarketPlace POS + IMS',
        'img': 'assets/images/activity-3.png',
        'description': 'Tagum Marketplace POS + IMS is a web-based Point of Sale (POS) and Inventory Management System (IMS) designed specifically for Tagum Marketplace. It provides a simple and efficient way to manage sales and inventory for the company.',
        'link': 'https://tagum-marketplace-production.up.railway.app/',
        'color': 'linear-gradient(to right,rgb(135, 211, 228),rgb(8, 179, 236))',
        'lang': ['Vue', 'Vite', 'Node.js', 'TSX']
    },
    '8':{
        'title': 'SkillChain - dApp',
        'img': 'assets/images/proj-skillchain.png',
        'description': 'A blockchain-based credential verification platform that enables secure issuance and verification of digital certificates using Web3 technology and decentralized storage.',
        'link': 'https://skillchains.vercel.app/',
        'color': 'linear-gradient(to right,rgb(252, 149, 32),rgb(255, 131, 131))',
        'lang': ['Vue', 'Vite', 'Node.js', 'Solidity', 'Express.js', 'TSX']
    }
}

const langColors = {
    'python': 'rgb(180, 11, 25)',
    'c++': 'green',
    'java': ' rgb(82, 115, 185)',
    'c#': ' rgb(81, 68, 196)',
    'tsx': 'rgb(209, 51, 51)"',
    'html': 'rgb(170, 87, 138)',
    'css': 'rgb(120, 185, 44)',
    'vue': 'rgb(50, 207, 89)',
    'vite': 'rgb(184, 44, 149)',
    'node.js': 'rgb(218, 52, 121)',
    'yaml': 'rgb(219, 171, 12)',
    'express.js': 'rgb(36, 30, 30)',
    'solidity': 'rgb(165, 59, 130)',
}
Object.values(projDatas).forEach((e,i) => {
    let projItem = document.createElement('div'); 
    console.log(i)
    projItem.id = 'proj-'+(i);
    projItem.classList.add('proj-item');
    projItem.style.backgroundColor = e['color'];
    projItem.style.backgroundImage = e['color'];

    projItem.innerHTML = `
    <a href="${e['link']}" target="_blank" class="proj-link">
    <div class="proj-img">
        <img src="${e['img']}">
    </div>
    <div class="proj-desc">
        <div class="proj-desc-title">${e['title']}</div>
        <div class="proj-desc-info">${e['description']}</div>
        <div class="proj-desc-lang">
            ${e['lang'].map((e) => `<div class="proj-desc-lang-item" style="background: ${langColors[e.toLowerCase()]};">${e}</div>`).join('')}
        </div>
    </div>
    </a>
    `;
    document.getElementsByClassName('proj-list')[0].appendChild(projItem);
})
const certButtons = document.getElementsByClassName('cert-desc-button');
Array.from(certButtons).forEach(e => {
    let id = e.id.replace('cert-','')-1;
    e.addEventListener('click',(e)=>{
        window.open(certLinks[id], '_blank');

    })
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
