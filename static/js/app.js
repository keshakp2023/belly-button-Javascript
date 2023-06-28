
// 1. Use the D3 library to read in `samples.json` 

const sample_json = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(sample_json).then(function(data) {
    console.log("Sample")
    console.log(data);
});


function bellybuttonchart(iteam){
    console.log("bellybuttonchart");
    d3.json(sample_json).then(function(data) {
        console.log("Bellybuttonsample")
        console.log(data);

        var samples = data.samples
        console.log(samples);

        var samplelist = samples.filter(Object => Object.id == iteam)
        console.log(samplelist);

        var sampleoutcome = samplelist[0];
        console.log (sampleoutcome)

        var sample_values = sampleoutcome.sample_values;
        console.log ("sample_values")
        console.log(sample_values);

        var OTUs = sampleoutcome.otu_ids;
        console.log ("otu_ids")
        console.log(OTUs);

        var otu_lables = sampleoutcome.otu_labels;
        console.log("otu_lables")
        console.log(otu_lables);

        // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

        //     * Use `sample_values` as the values for the bar chart.
        //     * Use `otu_ids` as the labels for the bar chart.
        //     * Use `otu_labels` as the hovertext for the chart.
        //       ![bar Chart](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw01.jpg)


        // from the URL 
        
        var bar = [{
            x: sample_values.slice(0,10).reverse(),
            y: OTUs.slice(0,10).map(ID => `OTU ${ID}`).reverse(),
            text: otu_lables.slice(0,10).reverse(),
            type: 'bar',
            orientation: 'h'
        }];

        Plotly.newPlot('bar', bar);

         // 3. Create a bubble chart that displays each sample.
            // Use otu_ids for the x values.
            // Use sample_values for the y values.
            // Use sample_values for the marker size.
            // Use otu_ids for the marker colors.
            // Use otu_labels for the text value

        var Bubble = {
            x: OTUs,
            y: sample_values,
            mode: 'markers',
            marker: {size: sample_values,color: OTUs,colorscale: 'YlGnBu'}
    }
     
    
        var BubbleData = [Bubble];
    
        var BubbleLayout = {
            titiel: "Bacteria",
            showlegend: false,
            xaxis: {titiel: "otu_ids"},
            yaxis: {titiel: "sample_values"}
    
    }
    
        Plotly.newPlot('bubble', BubbleData, BubbleLayout );
    

    });
};

    bellybuttonchart(940);


// 4. Display the sample metadata, i.e., an individual's demographic information.

function Metadatalist(iteam){

    d3.json(sample_json).then (function(data) {
        console.log("Metadata Samples")
        console.log(data)

        var metadata = data.metadata;
        console.log ("MetadataArray");
        console.log(metadata)

        var MDArray = metadata.filter(MDObject => MDObject.id == iteam)
        console.log(MDArray)

        var MDResult = MDArray[0]
        console.log("metadata result");
        console.log(MDResult)

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

//     ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw03.jpg)

       
        var MDPenal = d3.select("#sample-metadata");

        MDPenal.html("");

        for (key in MDResult) {
            Object.entries(MDResult).forEach(([key, value]) => { 
               MDPenal.append("h3").text(`${key}: ${value}`) });

        
}});
};

    Metadatalist(940)


// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

//     ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw02.jpg)

function optionChanged(NewSample) {
        bellybuttonchart(NewSample);
        Metadatalist(NewSample);
    };
    
function initial() {
     d3.json(sample_json).then(function (data){

        
        var NewSample = data.names;
        console.log("NewSample")
        console.log(NewSample);
        

        var dropdown = d3.select("#selDataset");

        for (let index = 0; index < NewSample.length; index++) {
            dropdown.append("option").property("value", NewSample[index]).text(NewSample[index])};
        
        let initialsample = NewSample[0];
        bellybuttonchart(initialsample);
        Metadatalist(initialsample);
    });
        
};

    initial(940);



// 7. Deploy your app to a free static page hosting service, such as GitHub Pages. 
// Submit the links to your deployment and your GitHub repo. 
// Ensure that your repository has regular commits and a thorough README.md file

