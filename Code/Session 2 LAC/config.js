var config = {
    style: 'mapbox://styles/chow-hong-kiu/cmk0y6tsu00u801qq8jdg6fxz',
    accessToken: 'pk.eyJ1IjoiY2hvdy1ob25nLWtpdSIsImEiOiJjbWprNXF0N2kwdWx0M2RweTJ1NnhsNmtyIn0.4742XaqjDE5TXj-3_V7beQ',
    showMarkers: false,
    theme: 'light',
    title: 'In Latin America and the Caribbean,',
    subtitle: 'cities are showcasing how digital tools are creating better livelihoods.',
    chapters: [
        {
            id: 'ch1',
            hidden: true,
            location: 
            { 
                center: [-62.571350486088285, -7.452706745742488], 
                zoom: 2, 
                pitch: 30, 
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
            title: 'Buenos Aires',
            image: './assets/Buenos Aires-2.jpg',
            description: `
            Buenos Aires is leveraging <b>AI-powered analytics to identify traffic incidents in real-time</b>, significantly reducing emergency response times. By integrating these digital tools into urban planning, the city is not just managing roads but also fostering safer, more efficient environments that directly enhance the daily livelihoods of its residents. 
            <br><br>
            Read more about these <b><a href="https://sdglocalaction.org/traffic-management-policies/">traffic management policies</a></b>.
            `,
            location: { center: [-58.45218120303578, -34.60890104545528], zoom: 11, pitch: 50, bearing: 0 },
            onChapterEnter: [
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            title: 'Belize City',
            image: './assets/Belize-1.jpg',
            description: `
            Belize City is advancing its <b>Urban Sustainability and Smart City Project by integrating data-driven governance with community-centred planning</b>. Through the establishment of a dedicated GIS department and the revitalisation of public green spaces, the city is building both digital and physical foundations for long-term urban resilience. By embedding evidence-based decision-making into municipal operations and creating safe, inclusive public environments, these initiatives are enhancing everyday urban life while strengthening community cohesion.
            <br><br>
            Discover more about <b><a href="https://sdglocalaction.org/belize-smart-city/" target="_blank">Belize City’s smart city journey</a></b>.
            `,
            location: { center: [-88.21155389740738, 17.500994048623063], zoom: 12, pitch: 30, bearing: 0 },
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
            ]
        }
    ]
};