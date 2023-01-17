var cacheName = 'madhur-cache-v1'; var filesToCache = [ '/category/Living.html', '/pages/category.html', '/pages/editor.html', '/pages/friends.html', '/', '/search.json', '/sw.js', '/pages/tags.html', '/tags.json', '/category/technology.html', '/assets/css/global.css', '/sitemap.xml', '/robots.txt', '/feed.xml', '/blog/page2/', '/living/2017/05/30/Jekyll-Theme-MDUI-Editor.html', '/living/2017/05/29/jekyll-theme-mdui.html', '/living/2017/05/27/liquid-template-language.html', '/technology/2017/05/27/how-to-install-jekyll.html', '/technology/2017/05/27/how-to-install-rvm.html', '/living/2017/03/23/android-o.html', '/living/2016/10/27/use-adb-and-fastboot-to-save-my-nexus5x.html', '/technology/2016/04/14/ubuntu-installs-apache-masql-php-and-phpmyadmin.html', '/assets/images/touch/apple-touch-icon.png', '/assets/images/touch/chrome-touch-icon-192x192.png', '/assets/images/touch/icon-128x128.png', '/assets/images/touch/ms-touch-icon-144x144-precomposed.png', '/assets/live2d/koharu/koharu.2048/texture_00.png', '/assets/live2d/koharu/koharu.moc', '/assets/live2d/koharu/koharu.model.json', '/assets/live2d/koharu/koharu.physics.json', '/assets/live2d/koharu/mtn/01.mtn', '/assets/live2d/koharu/mtn/02.mtn', '/assets/live2d/koharu/mtn/03.mtn', '/assets/live2d/koharu/mtn/04.mtn', '/assets/live2d/koharu/mtn/05.mtn', '/assets/live2d/koharu/mtn/06.mtn', '/assets/live2d/koharu/mtn/07.mtn', '/assets/live2d/koharu/mtn/08.mtn', '/assets/live2d/koharu/mtn/09.mtn', '/assets/live2d/koharu/mtn/idle.mtn', '/manifest.json', '/assets/css/customCss.css', '/assets/js/History.js', '/assets/js/customJS.js', ]; self.addEventListener('install', function(event) { event.waitUntil( caches.open(cacheName).then(function(cache) { return cache.addAll(filesToCache); }) ); }); self.addEventListener('fetch', function(event) { event.respondWith( caches.match(event.request) .then(function(response) { if (response) { console.log('[*] Serving cached: ' + event.request.url); return response; } console.log('[*] Fetching: ' + event.request.url); return fetch(event.request); } ) ); });