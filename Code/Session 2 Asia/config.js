var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    title: 'In Asia-Pacific region,',
    subtitle: 'local governments play a critical role in fostering innovations.',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: { center: [96.4937716983233, 33.151635852902864], zoom: 1.8, pitch: 0, bearing: 0 },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                // Hide everything else
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'smart-points-city', opacity: 0 },
                { layer: 'smart-points-national', opacity: 0 },
                { layer: 'smart-world-background', opacity: 0 },
                { layer: 'smart-world-background-line', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 0 },
                { layer: 'SDG-points-national', opacity: 0 }
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            title: 'Hong Kong',
            image: './assets/HongKong-1.jpg',
            description: `
            Hong Kong’s government is <b>connecting stakeholders and aligning a shared vision for smart, sustainable urban development</b>, recognising that local leadership is critical to fostering urban innovation. The <b>HOUSING • I&T Summit</b> brings this vision to life by showcasing advanced construction technologies, smart housing solutions, and data-driven approaches that improve planning and service delivery. By demonstrating practical applications and facilitating knowledge exchange, the Summit reinforces how local governments can drive smart, resilient, and inclusive cities. 
            <br><br>
            <b><a href="https://sdglocalaction.org/hong-kong-housing-it-summit/" target="_blank">See how this initiative highlights local government leadership in urban innovation</a></b>.
            `,
            location: { center: [114.13449208151843, 22.382869496740103], zoom: 9.5, pitch: 0, bearing: 0 },
            onChapterEnter: [
            ],
        }
    ]
};