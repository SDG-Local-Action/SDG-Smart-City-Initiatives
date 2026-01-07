var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    title: 'In Africa,',
    subtitle: 'cities shows how smart city initaitives are globally relevant.',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: { center: [21.280291111964907, 7.830653160359568], zoom: 2.2, pitch: 40, bearing: 0 },
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
            title: 'Kigali',
            image: './assets/Kigali-1.jpeg',
            description: 
            `
            Kigali is implementing a <b>smart, community-driven water and waste management initiative that combines feasibility-led planning with sensor-enabled infrastructure</b>. Following feasibility studies to adapt existing buildings, the city began constructing underground water reservoirs for rainwater harvesting and installed smart waste stations equipped with solar-powered sensors that monitor fill levels in real time. These innovations enable timely waste collection, reduce littering and sanitation risks, and are supported by community training and a local maintenance committee, ensuring long-term, sustainable operation across <b>1,354 households</b>.
            <br><br>
            Learn more about <b><a href="https://sdglocalaction.org/kigali-water-waste/">Kigali’s smart water and waste solutions</a></b> and its contribution to sustainable and affordable public services.
            `,
            location: 
            { 
                center: [30.13615124127577, -1.9270175551663726], 
                zoom: 10.5, 
                pitch: 50, 
                bearing: 0 },
            onChapterEnter: [
            ],
            callback: 'fadeInClusters'
        },
        {
            id: 'ch3',
            alignment: 'left',
            title: 'Accra',
            image: './assets/Accra-1.jpeg',
            description: 
            `
            Accra has established a <b>Smart SDG Cities Implementation Committee that brings together municipal leaders, technical experts and community stakeholders</b> to drive data-informed planning and localised SDG implementation under the Ghana Smart SDG Cities Programme. Chaired by the Mayor and supported by national and international partners, the committee provides a coordinated governance structure to align urban data, policy priorities and community engagement in support of more inclusive and resilient urban development.
            <br><br>
            <b><a href="https://sdglocalaction.org/accra-smart-sdg-cities-committee/">Learn how this initiative   is contributing to smarter governance and SDG delivery at the city level</a></b>.
            `,
            location: 
            { 
                center: [-0.18570006748288434, 5.5970320001647424], 
                zoom: 11, 
                pitch: 30, 
                bearing: 0 
            },
            onChapterEnter: [
            ]
        }
    ]
};