var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    title: 'In Europe,',
    subtitle: 'city experiences demonstrate that robust data infrastructure forms a critical backbone for smart city development.',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: { center: [6.172679230602397, 46.370887314396136], zoom: 3.5, pitch: 0, bearing: 0 },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
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
            title: 'Prague',
            image: './assets/Prague-1.jpg',
            description: `
            The city's open-source <b>Golemio data platform</b> enables local governments to visualise mobility patterns, monitor service delivery, and guide investments with evidence-based insights. By making data accessible and actionable, the platform strengthens local decision-making, promotes transparency, and helps ensure resources are allocated equitably. 
            <br><br>
            <b><a href="https://sdglocalaction.org/using-data-platforms-for-local-decision-making-2/" target="_blank">Explore how Prague is leveraging data for smarter, more inclusive governance</a>
            `,
            location: 
            { 
                center: [14.443333844042339, 50.07903012331339],
                 zoom: 10, 
                 pitch: 20, 
                 bearing: 0 
            },
            onChapterEnter: [
            ],
        },
        {
            id: 'ch3',
            alignment: 'left',
            title: 'Barcelona',
            image: './assets/Barcelona-1.jpg',
            description: 
            `
            Barcelona’s smart city approach centres on a <b>“network of networks” that integrates diverse urban systems through data and connectivity</b>. A key element is the open‑source sensor platform <b>Sentilo</b>, which aggregates real‑time data from across the city’s infrastructure, such as mobility, environment, energy and waste, allowing local governments to break down silos and make evidence‑based decisions that improve services, sustainability and citizen engagement. By enabling seamless data flows and interoperability across systems, Sentilo strengthens the city’s digital backbone and helps drive more responsive, inclusive urban development. 
            <br><br>
            <b><a href="https://sdglocalaction.org/smart-city-barcelona/" target="_blank">See how Barcelona is using data and sensor networks to advance smart city goals</a></b>.
            `,
            location: 
            { center: [2.156583983161103, 41.39795662550992], 
                zoom: 11, 
                pitch: 30, 
                bearing: 0 
            },
            onChapterEnter: [
            ]
        }
    ]
};