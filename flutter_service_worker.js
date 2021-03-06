'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "96b17f5156e2f0a2503e4e4491c0aaf0",
"index.html": "7434f669e6dcd4b31d5d7c350f9da507",
"/": "7434f669e6dcd4b31d5d7c350f9da507",
"main.dart.js": "34c6321d81d6c04acfc3492914accc57",
"favicon.png": "eb0fcae6a6ad9df52f0a394c5adbff73",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e547730ccb340d671e6bfc56c76d03f7",
"assets/AssetManifest.json": "b7983ec9cdd30e2a4b0f34e2c74f38c0",
"assets/NOTICES": "99780ba0730bea22da88b82cd08716ec",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/playing_cards/assets/card_imagery/back_001.png": "28c80e04ab991b80cc2aa5d18aa879aa",
"assets/packages/playing_cards/assets/card_imagery/qh.png": "2d142e0a95f0adbd44b5c7c0172ef577",
"assets/packages/playing_cards/assets/card_imagery/spade.png": "981c0b10f109bd3e9cb408b61f7a33a7",
"assets/packages/playing_cards/assets/card_imagery/jc.png": "104dca27ba3f0734a5fde520f94d0eb3",
"assets/packages/playing_cards/assets/card_imagery/ks.png": "660271be7e65fe06f3b2034a83af6f24",
"assets/packages/playing_cards/assets/card_imagery/kd.png": "806f30f77fcf9f11249ac3bb0174965b",
"assets/packages/playing_cards/assets/card_imagery/js.png": "137bbce282a776498eb8b33618a77db9",
"assets/packages/playing_cards/assets/card_imagery/jd.png": "ae263f367ef9e4c4b8ad40563623cea7",
"assets/packages/playing_cards/assets/card_imagery/kc.png": "cf60d0e257ec768bfee576f261e1a644",
"assets/packages/playing_cards/assets/card_imagery/heart.png": "6f7fcfdfc88ec70f6bc4dcd339568b03",
"assets/packages/playing_cards/assets/card_imagery/jh.png": "f7730fbbcf96889e45d2f9958ff825aa",
"assets/packages/playing_cards/assets/card_imagery/qc.png": "85d80978a888f5a7a61eb016dddee679",
"assets/packages/playing_cards/assets/card_imagery/kh.png": "ce45da39c0f70540e158b16a0a8ead86",
"assets/packages/playing_cards/assets/card_imagery/qs.png": "c01ffe97d768bb26c1293749647dfcfd",
"assets/packages/playing_cards/assets/card_imagery/qd.png": "01751a267acc9e7a5fd4b1373e9d3179",
"assets/packages/playing_cards/assets/card_imagery/diamond.png": "f2eb19afc052c30eb571e4c6c6046d68",
"assets/packages/playing_cards/assets/card_imagery/club.png": "d1fd0ca4bd3ccc4c5e852f3ce15dccd8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/loading.gif": "32edeeaff5f7ef700f5d9cd445c5b0ce",
"assets/assets/images/pixel/sidney6.png": "7b9e0d6cf3fe19a213524fac5a02a6a2",
"assets/assets/images/pixel/sidney4.jpg": "47748815c9095a35dcc3719b3ae04136",
"assets/assets/images/pixel/sidney5.png": "679140491106bbbd24b14f04b6a66bff",
"assets/assets/images/pixel/sidney1.jpg": "56de825b2f36ae606a0b900fb67e4491",
"assets/assets/images/pixel/sidney2.jpg": "5cd5f768b6ec638d81a728fc87f1b695",
"assets/assets/images/pixel/sidney3.jpg": "eff91ccd43352a38bea17a56353ed222",
"assets/assets/images/news/image4.jpg": "fe1c642d41b0676eb97ad264c73393e6",
"assets/assets/images/news/image5.png": "0a4c7383f9fae2aeca0e3e562e03ad13",
"assets/assets/images/news/image1.jpg": "5158c28452c5e203e8c73b5024ac4693",
"assets/assets/images/news/image2.jpg": "6698731a472be42dc9852803633014af",
"assets/assets/images/news/image3.jpg": "e62f6b9dfb3a2eecdc6a6ea0de6453ac",
"assets/assets/images/bayer_logo.png": "73612900ff7c981385b53da108496341",
"assets/assets/images/iconos/song.png": "56b32da08e10f1707b344ca20297d3de",
"assets/assets/images/iconos/pixel.png": "b7c6495d00b68759c4f8d68e5e020f7e",
"assets/assets/images/iconos/end.png": "84a7043ad64c87ad64fc340131dc1f08",
"assets/assets/images/iconos/sopa.png": "9ae53ebe74032a7c149c4537bff4223d",
"assets/assets/images/iconos/test.png": "b6a765a97869a8316a0b28f2cec95433",
"assets/assets/images/iconos/nube.png": "0875082ef62bf71350ede32e3ed7f4ba",
"assets/assets/images/iconos/mision.png": "7caf5e0a3e38589856bfab8dae58f116",
"assets/assets/images/iconos/camera.png": "f8349267fb5a33f70ce702367d66f342",
"assets/assets/images/director.jpg": "ee417e726b5b5af2c18963d3e958f755",
"assets/assets/images/baby.jpeg": "4cd86f56c81e50231facc3200b8bee58",
"assets/assets/images/sopa1.png": "6d08727298ef5e95b5cd5d34814f603c",
"assets/assets/images/sopa2.jpg": "f697e5d66632aa897b38a7c07ab4ef9f",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
