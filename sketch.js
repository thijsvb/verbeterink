var textfield;
var submit;
var test;

function setup() {
  noCanvas();

  var textfield = createInput("Kikker sok rappoflappo");
  createP('');
  var submit = createButton("Verbeter");
  submit.style("padding", "12px");
  var test = createButton("Voorbeeld");
  test.style("padding", "12px");
}
