var config = {
    style: 'mapbox://styles/epook/cm0dyh9l9002d01pee31k3inz',
    accessToken: 'pk.eyJ1IjoiZXBvb2siLCJhIjoiY20wZHpqa2pjMGhxdjJpcXNna2lnNzFraCJ9.WqRzK9xnb69qqan-jzwzhw',
    showMarkers: true,
    markerColor: '#F2171E',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Vita bussarna',
    subtitle: 'nov 1944--maj 1945',
    byline: 'Ett samarbete med röda korset',
    footer: 'Koncept test v0.1',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Vita bussarna',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2022/06/NMA.0035382-beskuren-jpg-webp.webp',
            description: 'Mot slutet av kriget ökade risken för att nazisterna skulle röja sina spår genom att döda alla koncentrationslägerfångar. Här kan du följa några av de som arbetade på Vita bussarna som skickades för att förhindra katastrofen.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Roda-korset_tidslinje_ett-godstag-720x720.webp',
            description: 'Auschwitz (Oświęcim, Polen)',
            location: {
                center: [19.1783, 50.0359],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Warszawa (Warszawa, Polen)',
            location: {
                center: [21.0122, 52.2297],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Fourth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Hallquist_Riksarkivet-jpg-e1723542182517-64x64.webp',
            description: 'Évian (Évian-les-Bains, Frankrike)',
            location: {
                center: [6.5857, 46.4011],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Fifth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/23.-Roda-korset_tidslinje_Ravensbruck-1-jpg-720x720.webp',
            description: 'Tjeckien (Prag, Tjeckien)',
            location: {
                center: [14.4378, 50.0755],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Sixth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Hallquist_Riksarkivet-jpg-e1723542182517-64x64.webp',
            description: 'Sudetenland (Tjeckien, nära tyska gränsen)',
            location: {
                center: [12.6443, 50.4966],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Seventh Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Gerhard-Rundberg-Fredsarkivet-jpg-64x64.webp',
            description: 'Prypjat-träsken (Vitryssland)',
            location: {
                center: [27.2232, 52.1284],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Eighth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/3.-Roda-korset_Gosta-I-Danmark-720x720.webp',
            description: 'Kamjanets-Podilskyj (Ukraina)',
            location: {
                center: [26.5833, 48.6833],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Ninth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2023/08/Stettin_1931_1920x1080px-720x720.webp',
            description: 'Warszawa Getto (Warszawa, Polen)',
            location: {
                center: [20.9989, 52.2442],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/4.-Roda-korset_Gosta_Till-Nyborg-720x720.png',
            description: 'Babyn Jar (Kyiv, Ukraina)',
            location: {
                center: [30.4493, 50.4715],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Eleventh Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Hallquist_Riksarkivet-jpg-e1723542182517-64x64.webp',
            description: 'Rumbula (Nära Riga, Lettland)',
            location: {
                center: [24.2436, 56.9027],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Twelfth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/7.-Roda-korset_gosta_till-Lubeck-720x720.webp',
            description: 'Majdanek (Lublin, Polen)',
            location: {
                center: [22.5860, 51.2276],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Thirteenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/8.-Roda-korset_gosta_Dachau-jpg-webp.webp',
            description: 'Chełmno (Chełmno nad Nerem, Polen)',
            location: {
                center: [18.7046, 52.1494],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Fourteenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Hallquist_Riksarkivet-jpg-e1723542182517-64x64.webp',
            description: 'El Alamein (El Alamein, Egypten)',
            location: {
                center: [28.9540, 30.8307],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Fifteenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2024/04/Roda-korset_tidslinje_evakuera-alla-720x720.png',
            description: 'Sicilien (Palermo, Italien)',
            location: {
                center: [13.3615, 38.1157],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixteenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Sixteenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2023/11/Judiska_polska_flyktingar_fran_tyska_koncentrationslager_kommer_till_Malmo_1945_1960x960px-jpg-720x720.webp',
            description: 'Normandie (Nära Caen, Frankrike)',
            location: {
                center: [-0.3707, 49.1829],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventeenth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Seventeenth Title',
            image: 'https://dev.museumforintelsen.se/wp-content/uploads/2023/11/Judiska_polska_flyktingar_fran_tyska_koncentrationslager_kommer_till_Malmo_1945_1960x960px-jpg-720x720.webp',
            description: 'Pearl Harbor (Hawaii, USA)',
            location: {
                center: [-157.9701, 21.3430],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
