const text = new Blotter.Text('Cloud 9', {
    family: "'EB Garamond', serif",
    size: 200,
    fill: '#fff'
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
    texts: text
});

let scope = blotter.forText(text);
let elem = document.getElementById('plain-text');
scope.appendTo(elem);

$('body').mousemove(function (e) {
    const formula = ((e.pageX * e.pageY) / 200000) / 1.5;
    // const number = formula.toFixed(1);

    material.uniforms.uVolatility.value = formula;
    material.uniforms.uSeed.value = formula;

});