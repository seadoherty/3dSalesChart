var data = null;
var graph = null;

// Called when the Visualization API is loaded.
const drawVisualization = () => {
    data = new vis.DataSet();
    pushData(data);
    var camera = graph ? graph.getCameraPosition() : null;

    var container = document.getElementById("salesReport");
    graph = new vis.Graph3d(container, data, options);

    if (camera) graph.setCameraPosition(camera); // restore camera position
}
window.addEventListener("load", () => drawVisualization());