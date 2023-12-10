// ==UserScript==
// @name         Hoodmaps.com Fix
// @namespace    https://github.com/drushadrusha
// @version      0.1
// @description  Replaces Mapbox access token with your own token on hoodmaps.com
// @author       https://github.com/drushadrusha
// @match        https://hoodmaps.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    // Get token from https://account.mapbox.com/
    var yourAccessToken = 'CHANGE ME';
    /// -----------------------------------


    var yourMapboxStyle = 'mapbox://styles/mapbox/streets-v12';

    if (window.location.pathname === '/' && window.location.search === '') {
        window.location.href = "https://hoodmaps.com/seoul-neighborhood-map";
    }
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                window.mapboxgl.accessToken = yourAccessToken
                window.mapboxStyle = yourMapboxStyle;
            }
        });
    });
    var config = { subtree: true, childList: true, attributes: true };
    observer.observe(document.body, config);
})();
