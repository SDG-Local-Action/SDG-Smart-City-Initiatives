var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmjtqt4bf001h01s9hcyd07l8',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    title: 'Around the world,',
    subtitle: 'local and regional governments are implementing the Sustainable Development Goals (SDGs) and accelerating progress towards Agenda 2030 through a wide range of context-specific initiatives.',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: 
            { 
                center: [-38.1026, -37.7435], 
                zoom: 8, 
                pitch: 70, 
                bearing: 0 
            },
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
            title: 'Within SDG Local Action,',
            description: 'Over <b>180</b> initiatives have been documented. From low-carbon mobility to inclusive community development, SDG Local Action spotlights how sustainable development is deeply rooted in local action.<br><br><b><a href="https://sdglocalaction.org/webinars/">Hear</a> from local and regional governments themselves and read their <a href="https://sdglocalaction.org/stories/">stories</a>.',
            location: 
            { 
                center: [0, 40], 
                zoom: 1, 
                pitch: 0, 
                bearing: 0 
            },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                { layer: 'world-background', opacity: 1 },
                { layer: 'world-background-line', opacity: 1 },
                { layer: 'clusters', opacity: 0.65 },
                { layer: 'unclustered-point', opacity: 0.65 },
                { layer: 'smart-points-city', opacity: 0 },
                { layer: 'smart-points-national', opacity: 0 },
                { layer: 'smart-world-background', opacity: 0 },
                { layer: 'smart-world-background-line', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 0 },
                { layer: 'SDG-points-national', opacity: 0 }
            ],
            callback: 'fadeInClusters'
        },
        {
            id: 'ch3',
            alignment: 'left',
            title: 'Smart city initiatives',
            description: 'are a growing concept being implemented both nationally and at the city level. Gaining significant momentum, they have the potential to advance Agenda 2030 in multiple ways. <br><br> To date, SDG Local Action has documented <b>over 30 smart city initiatives</b> from around the world.',
            location: 
            { 
                center: [0, 40], 
                zoom: 1.3, 
                pitch: 0, 
                bearing: 0 
            },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                { layer: 'smart-points-city', opacity: 1 },
                { layer: 'smart-points-national', opacity: 1 },
                { layer: 'smart-world-background', opacity: 1 },
                { layer: 'smart-world-background-line', opacity: 1 },
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 0 },
                { layer: 'SDG-points-national', opacity: 0 }
            ],
            legend: `
            <div class="legend-title">Smart Initiatives</div>
            <div class="legend-row"><img src="./assets/location-pin-1.svg" class="legend-icon"><span>City level</span></div>
            <div class="legend-row"><img src="./assets/location-pin-2.svg" class="legend-icon"><span>National- and regional-level</span></div>
            `
        },
{
            id: 'ch4',
            alignment: 'left',
            title: 'They contribute to SDG implementation',
            description: 'in various ways, ranging from improving sanitation and service delivery to addressing climate impacts.',
            location: 
            { 
                center: [0, 40], 
                zoom: 1.3, 
                pitch: 0, 
                bearing: 0 
            },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                { layer: 'smart-points-city', opacity: 0 },
                { layer: 'smart-points-national', opacity: 0 },
                { layer: 'smart-world-background', opacity: 1 },
                { layer: 'smart-world-background-line', opacity: 1 },
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 1 },
                { layer: 'SDG-points-national', opacity: 1 }
            ],
            legend: `
            <div class="legend-title">SDG Contributions</div>
             <div class="legend-container">
                <div class="legend-row"><span class="dot" style="background: #e3223b;"></span><span>SDG 1: No Poverty</span></div>
                <div class="legend-row"><span class="dot" style="background: #e4a524;"></span><span>SDG 2: Zero Hunger</span></div>
                <div class="legend-row"><span class="dot" style="background: #21a249;"></span><span>SDG 3: Good Health</span></div>
                <div class="legend-row"><span class="dot" style="background: #d51f27;"></span><span>SDG 4: Quality Education</span></div>
                <div class="legend-row"><span class="dot" style="background: #ee2524;"></span><span>SDG 5: Gender Equality</span></div>
                <div class="legend-row"><span class="dot" style="background: #00bee6;"></span><span>SDG 6: Clean Water</span></div>
                <div class="legend-row"><span class="dot" style="background: #fdc110;"></span><span>SDG 7: Clean Energy</span></div>
                <div class="legend-row"><span class="dot" style="background: #af1d44;"></span><span>SDG 8: Decent Work</span></div>
                <div class="legend-row"><span class="dot" style="background: #f15f22;"></span><span>SDG 9: Industry & Infrastructure</span></div>
                <div class="legend-row"><span class="dot" style="background: #ed0f68;"></span><span>SDG 10: Reduced Inequality</span></div>
                <div class="legend-row"><span class="dot" style="background: #f8981d;"></span><span>SDG 11: Sustainable Cities</span></div>
                <div class="legend-row"><span class="dot" style="background: #c58a2b;"></span><span>SDG 12: Responsible consumption and production</span></div>
                <div class="legend-row"><span class="dot" style="background: #228140;"></span><span>SDG 13: Climate action</span></div>
                <div class="legend-row"><span class="dot" style="background: #2395d3;"></span><span>SDG 14: Life below water</span></div>
                <div class="legend-row"><span class="dot" style="background: #3bb54a;"></span><span>SDG 15: Life on land</span></div>
                <div class="legend-row"><span class="dot" style="background: #0069a2;"></span><span>SDG 16: Peace, justice, institution</span></div>
                <div class="legend-row"><span class="dot" style="background: #00486d;"></span><span>SDG 17: Partnership</span></div>
            `
        },
        {
            id: 'ch5',
            hidden: true,
            location: 
            { 
                center: [0, 40], 
                zoom: 1.3, 
                pitch: 0, 
                bearing: 0 
            },
            onChapterEnter: [
                { layer: 'country-boundaries', opacity: 1 },
                { layer: 'smart-points-city', opacity: 0 },
                { layer: 'smart-points-national', opacity: 0 },
                { layer: 'smart-world-background', opacity: 1 },
                { layer: 'smart-world-background-line', opacity: 1 },
                { layer: 'world-background', opacity: 0 },
                { layer: 'world-background-line', opacity: 0 },
                { layer: 'clusters', opacity: 0 },
                { layer: 'unclustered-point', opacity: 0 },
                { layer: 'SDG-points-city', opacity: 1 },
                { layer: 'SDG-points-national', opacity: 1 }
            ],
            legend: `
            <div class="legend-title">SDG Contributions</div>
             <div class="legend-container">
                <div class="legend-row"><span class="dot" style="background: #e3223b;"></span><span>SDG 1: No Poverty</span></div>
                <div class="legend-row"><span class="dot" style="background: #e4a524;"></span><span>SDG 2: Zero Hunger</span></div>
                <div class="legend-row"><span class="dot" style="background: #21a249;"></span><span>SDG 3: Good Health</span></div>
                <div class="legend-row"><span class="dot" style="background: #d51f27;"></span><span>SDG 4: Quality Education</span></div>
                <div class="legend-row"><span class="dot" style="background: #ee2524;"></span><span>SDG 5: Gender Equality</span></div>
                <div class="legend-row"><span class="dot" style="background: #00bee6;"></span><span>SDG 6: Clean Water</span></div>
                <div class="legend-row"><span class="dot" style="background: #fdc110;"></span><span>SDG 7: Clean Energy</span></div>
                <div class="legend-row"><span class="dot" style="background: #af1d44;"></span><span>SDG 8: Decent Work</span></div>
                <div class="legend-row"><span class="dot" style="background: #f15f22;"></span><span>SDG 9: Industry & Infrastructure</span></div>
                <div class="legend-row"><span class="dot" style="background: #ed0f68;"></span><span>SDG 10: Reduced Inequality</span></div>
                <div class="legend-row"><span class="dot" style="background: #f8981d;"></span><span>SDG 11: Sustainable Cities</span></div>
                <div class="legend-row"><span class="dot" style="background: #c58a2b;"></span><span>SDG 12: Responsible consumption and production</span></div>
                <div class="legend-row"><span class="dot" style="background: #228140;"></span><span>SDG 13: Climate action</span></div>
                <div class="legend-row"><span class="dot" style="background: #2395d3;"></span><span>SDG 14: Life below water</span></div>
                <div class="legend-row"><span class="dot" style="background: #3bb54a;"></span><span>SDG 15: Life on land</span></div>
                <div class="legend-row"><span class="dot" style="background: #0069a2;"></span><span>SDG 16: Peace, justice, institution</span></div>
                <div class="legend-row"><span class="dot" style="background: #00486d;"></span><span>SDG 17: Partnership</span></div>
            `
        }
    ]
};