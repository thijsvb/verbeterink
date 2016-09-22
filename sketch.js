var textfield;
var submit;
var test;

function setup() {
  noCanvas();

  var textfield = createInput("Kikker sok rappoflappo");
  createP('');
  var submit = createButton("Verbeter");
  submit.style("padding", "5px");
  createSpan('');
  var test = createButton("Voorbeeld");
  test.style("padding", "5px");
}
