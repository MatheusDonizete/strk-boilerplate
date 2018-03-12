'use strict';
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw-cache.js', { scope: './' })
        .then((reg) => {
            if (reg.installing) {
                console.log('Service worker for Cache installing');
            } else if (reg.waiting) {
                console.log('Service worker for Cache installed');
            } else if (reg.active) {
                console.log('Service worker for Cache active');
            }
        }).catch(function (error) {            
            console.log('Registration failed with ' + error);
        });
}