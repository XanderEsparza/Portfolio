const CACHE_NAME = "V1_cache_PWA_IEVND";

urlsToCache = [
    './',
    './index.html',
    './css/style.css',
    './js/script.js',
    './img/icons/download.svg',
    './img/icons/education.svg',
    './img/icons/email.svg',
    './img/icons/github-oscuro.svg',
    './img/icons/github.svg',
    './img/icons/linkedin.svg',
    './img/icons/phone.svg',
    './img/icons/projects.svg',
    './img/icons/skills.svg',
    './img/icons/user.svg',
    './img/bootstrap.png',
    './img/certificado-negociacion.PNG',
    './img/certificado_azle.PNG',
    './img/certificado_motoko.PNG',
    './img/css.webp',
    './img/express.png',
    './img/figma.png',
    './img/git.png',
    './img/github.png',
    './img/html.png',
    './img/js.png',
    './img/laravel.png',
    './img/mongodb.png',
    './img/mysql.png',
    './img/nodejs.png',
    './img/prueba.jpeg',
    './img/vscode.png',
    './img/xander.jpg',
    './img/pwa/icon-72x72.png',
    './img/pwa/icon-192x192.png',
    './img/pwa/icon-512x512.png'
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e =>{
    e.waitUntil( //le decimos que detenga el evento hasta que se ejecute lo siguiente
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(() => self.skipWaiting)
        })

    )
})

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})


self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res)
            {
                return res
            }
            return fetch(e.request)
        })
    )
})