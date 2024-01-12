// ==UserScript==
// @name         Better Wahapedia for Kill Team
// @namespace    Mad's Better KT Waha
// @version      2024-01-10
// @description  Adds pictures to KT datacards on waha
// @author       Stephan Baulch
// @match        https://wahapedia.ru/kill-team2/kill-teams/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var imageURLs = {
        // Blooded
        'traitor brimstone grenadier': 'https://wh40k.lexicanum.com/mediawiki/images/7/79/BrimstoneGrenadier.jpg',
        'traitor butcher': 'https://wh40k.lexicanum.com/mediawiki/images/f/f7/TraitorButcher.jpg',
        'traitor commsman': 'https://wh40k.lexicanum.com/mediawiki/images/2/29/TraitorCommsman.jpg',
        'traitor corpseman': 'https://wh40k.lexicanum.com/mediawiki/images/5/55/Corpesman.jpg',
        'traitor enforcer': 'https://wh40k.lexicanum.com/mediawiki/images/a/ad/Traitorcommissar.jpg',
        'traitor flenser': 'https://wh40k.lexicanum.com/mediawiki/images/a/ae/Flenser.jpg',
        'traitor gunner': 'https://wh40k.lexicanum.com/mediawiki/images/3/36/TraitorGunner.jpg',
        'traitor ogryn': 'https://wh40k.lexicanum.com/mediawiki/images/c/c7/ChaosOgryn.jpg',
        'traitor sharpshooter': 'https://wh40k.lexicanum.com/mediawiki/images/5/5e/TraitorSharpshooter.jpg',
        'traitor thug': 'https://wh40k.lexicanum.com/mediawiki/images/3/39/TraitorThug.jpg',
        'traitor trench sweeper': 'https://wh40k.lexicanum.com/mediawiki/images/9/9a/TrenchSweeper.jpg',
        'traitor trooper': 'https://wh40k.lexicanum.com/mediawiki/images/0/05/TraitorTrooper.jpg',
        'traitor chieftan': 'https://wh40k.lexicanum.com/mediawiki/images/1/1d/TraitorChieftain.jpg',

        // Gellerpox
        'vulgrar thrice-cursed': 'https://wh40k.lexicanum.com/mediawiki/images/3/33/Vulgrar.jpg',

        // Fellgor
        'fellgor ironhorn': 'https://wh40k.lexicanum.com/mediawiki/images/3/32/Fellgore2.jpg',
        'fellgor deathknell': 'https://wh40k.lexicanum.com/mediawiki/images/0/05/Fellgore8.jpg',
        'fellgor fluxbray': 'https://wh40k.lexicanum.com/mediawiki/images/d/d3/Fellgore3.jpg',
        'fellgor gnarlscar': 'https://wh40k.lexicanum.com/mediawiki/images/e/e3/Fellgore10.jpg',
        'fellgor gorehorn': 'https://wh40k.lexicanum.com/mediawiki/images/6/63/Fellgore6.jpg',
        'fellgor herd-goad': 'https://wh40k.lexicanum.com/mediawiki/images/d/d3/Fellgore4.jpg',
        'fellgor mangler': 'https://wh40k.lexicanum.com/mediawiki/images/9/90/Fellgore9.jpg',
        'fellgor shaman': 'https://wh40k.lexicanum.com/mediawiki/images/0/08/Fellgore7.jpg',
        'fellgor toxhorn': 'https://wh40k.lexicanum.com/mediawiki/images/1/1b/Fellgore1.jpg',
        'fellgor vandal': 'https://wh40k.lexicanum.com/mediawiki/images/3/31/Fellgore5.jpg',
        //'fellgor warrior': '',
    }
    function getImageUrl(modelName) {
        if (modelName in imageURLs) {
            return imageURLs[modelName]
        } else {
            return 'https://pbs.twimg.com/media/FQYOcV2aQAcPuFn?format=jpg&name=large'
        }
    }

    var headers = document.getElementsByClassName("dsUnitHeader");

    for (var i = 0; i < headers.length; i++) {
        var modelName = headers[i].children[0].children[0].textContent;
        var newDiv = document.createElement('div');
        headers[i].parentNode.appendChild(newDiv);

        //newDiv.style.display = 'inline';
        var modelImage = document.createElement('img');
        modelImage.src = getImageUrl(modelName.toLowerCase());
        modelImage.alt = modelName + ' image';
        modelImage.width = 120;
        modelImage.height = 120;
        modelImage.style.display = 'inline-block'
        newDiv.appendChild(modelImage);
        newDiv.appendChild(headers[i]);
        headers[i].style.display = 'inline-block'
        headers[i].style.width = '390px'

        console.log('model name: ' + modelName);
    }
})();
