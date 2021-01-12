// specify options
var options = {
    width: "900px",
    height: "900px",
    style: "bar",
    showPerspective: true,
    showGrid: false,
    showShadow: false,
    xLabel: '2021 Sales',
    yLabel: '',
    zLabel: '',
    tooltip: point => "Revenue: <b>$" + point.z + "</b>",
    xValueLabel: value => people(value),
    yValueLabel: value => months(value),
    zValueLabel: value => "$" + value / 1000 + "K",
    keepAspectRatio: true,
    verticalRatio: 0.5,
};