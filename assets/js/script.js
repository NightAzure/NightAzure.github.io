const certLinks = [
    'https://freecodecamp.org/certification/fcc3d51a3c5-61f8-4c3a-bdbe-1f9a0c2a8b88/foundational-c-sharp-with-microsoft',
    'https://www.codecademy.com/profiles/netSurfer80956/certificates/ddc94032dd07fd43ee02f994e8f72af9',
    'https://mcm.codechum.com/certificates/2141',
    'https://mcm.codechum.com/certificates/1945'
];
const projLinks = [
    'https://github.com/Yasinans/BookingManagement',
    'https://github.com/Yasinans/sorting-monster',
    'https://github.com/Yasinans/CurrencyX',
    'https://github.com/Yasinans/DeadlineNotifier',
    'https://www.spigotmc.org/resources/miniarcades-1-19-1-20-arcade-machines-flappy-creeper-aiming-game-familiar-block.111504/',
    'https://www.spigotmc.org/resources/dodgebolt-a-free-minigame-plugin-1-19-1-20.110720/',
    '/PabualanExplorePHTours.html',
    '/PabualanCourseSchedule.html'
]

const projBg = [
    [' #4158D0','linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'],
    ['#0093E9','linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'],
    ['8EC5FC','linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'],
    ['#FF9A8B','linear-gradient(90deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)'],
    ['#85FFBD','linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)'],
    ['#FBAB7E','linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)'],
    ['#8BC6EC','linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)'],
    ['#FAD961','linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)'],
    ['#FF3CAC','linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'],

]
const certButtons = document.getElementsByClassName('cert-desc-button');
Array.from(certButtons).forEach(e => {
    let id = e.id.replace('cert-','')-1;
    e.addEventListener('click',(e)=>{
        window.open(certLinks[id], '_blank');

    })
});

const projItems = document.getElementsByClassName('proj-item');
Array.from(projItems).forEach(e => {
    let id = e.id.replace('proj-','')-1;
    e.style.backgroundColor = projBg[id][0];
    e.style.backgroundImage = projBg[id][1];
    console.log(e.style.backgroundImage);
    e.addEventListener('click',(e)=>{
        window.open(projLinks[id], '_blank');

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
