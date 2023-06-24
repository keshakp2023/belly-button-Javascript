
// 1. Use the D3 library to read in `samples.json` 
const sample_json = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(sample_json).then(function(data) {
    console.log("Sample")
    console.log(data);});
// from the URL 

// function buildchart (sample){
//     console.log("buildchart");
// d3.json(sample_json).then(function(data) {
//     console.log("Sample")
//     console.log(data);

//     let samples = data.samples

//     console.log (samples);

//     let samplelist = samples.filter (samplObject => sampleObject.id == sample)

//     console.log(samplelist);

//     let sampleoutcome = samplelist [0];
//     console.log (sampleoutcome)

//     let sample_values = sampleoutcome.sample_values;
//     console.log(sample_values);

//     let OTUs = sampleoutcome. otu_ids;
//     console.log(otu_ids);

// });


// };
// function buildcharts(sample) {
//     console.log ("buildchart")
// ;}


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

//     * Use `sample_values` as the values for the bar chart.
//     * Use `otu_ids` as the labels for the bar chart.
//     * Use `otu_labels` as the hovertext for the chart.
//       ![bar Chart](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw01.jpg)




// 3. Create a bubble chart that displays each sample.

//     * Use `otu_ids` for the x values.

//     * Use `sample_values` for the y values.

//     * Use `sample_values` for the marker size.

//     * Use `otu_ids` for the marker colors.

//     * Use `otu_labels` for the text values.

//     ![Bubble Chart](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/bubble_chart.jpg)




// 4. Display the sample metadata, i.e., an individual's demographic information.



// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

//     ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw03.jpg)



// 6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:

//     ![hw](https://static.bc-edx.com/data/dl-1-2/m14/lms/img/hw02.jpg)



// 7. Deploy your app to a free static page hosting service, such as GitHub Pages. 
// Submit the links to your deployment and your GitHub repo. 
// Ensure that your repository has regular commits and a thorough README.md file
