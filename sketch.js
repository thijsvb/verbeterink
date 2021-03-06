var textfield;
var outputfield;
var outputp;
var example = "Kikkers (Anura) zijn een van de drie groepen van amfibieën, naast de salamanders (Caudata) en de wormsalamanders (Gymnophiona).[1] Kikkers zijn hiervan verreweg de grootste groep; van de ongeveer 7500 soorten amfibieën behoort grofweg 88% tot de kikkers. Er zijn tegenwoordig ruim 6600 verschillende soorten kikkers beschreven.[2] Kikkers hebben een vrijwel wereldwijde verspreiding en leven in sterk uiteenlopende habitats. Kikkers behoren tot de gewervelde dieren, ze hebben vier poten maar geen staart en verschillen hiermee van de meeste andere amfibieën. Alle kikkers hebben een afgeplat, peervormig lichaam en uitpuilende ogen. De kop en bek zijn breed, de lange achterpoten zijn sterk gespierd en goed ontwikkeld. Kikkers zijn de enige dieren die een kwaakblaas hebben en hiermee soortspecifieke geluiden maken om elkaar te lokken. Net als andere amfibieën zijn kikkers koudbloedig, hierop is zowel de bloedsomloop als de ademhaling aangepast. Een aantal soorten houdt een zomerrust of winterslaap om erg warme respectievelijk koude jaargetijden te doorstaan. De ontwikkeling van de kikker van larve tot adult is uniek binnen de gewervelden. Kikkers doorlopen een volledige metamorfose waarbij de larve er totaal anders uitziet dan de volwassen kikker. Kikkers eten een breed scala aan prooien, meestal kleine dieren als insecten en andere ongewervelden. De grotere soorten eten soms kleine gewervelden. Kikkers hebben vele natuurlijke vijanden zoals vissen, vogels, zoogdieren en reptielen. Veel soorten worden direct of indirect bedreigd door de mens, een aantal soorten is hierdoor sterk bedreigd of uitgestorven. Sinds 1985 is het aantal beschreven amfibieën met meer dan een derde toegenomen, dit geldt met name voor de kikkers. De indeling van de kikkers is door deze constante aanvoer van nieuwe inzichten sterk aan verandering onderhevig. Het feit dat sommige soorten pad worden genoemd is hier een voorbeeld van, dit heeft tegenwoordig geen wetenschappelijke basis meer.[3] In dit artikel worden alle soorten daarom verder met kikker aangeduid.";

function setup() {
  noCanvas();

  textfield = createElement("textarea", "Kikkers happen engelse papflappen");
  textfield.attribute("cols", "80");
  textfield.attribute("rows", "5")
  createP('');
  var submit = createButton("Verbeter");
  submit.style("padding", "5px");
  submit.style("width", "70px");
  submit.mousePressed(replaceInput);
  createSpan("  ");
  var test = createButton("Voorbeeld");
  test.style("padding", "5px");
  test.style("width", "70px");
  test.mousePressed(runExample);
  createSpan("  ");
  var clear = createButton("Leeg");
  clear.style("padding", "5px");
  clear.style("width", "70px");
  clear.mousePressed(clearText);
  createP('');
}

function runExample() {
  textfield.value(example);
  replaceInput();
}

function clearText() {
  textfield.value('');
}

function replaceInput() {
  var text = textfield.value();
  var regex = [/([^aeiou\s][aeiou])kk?/gi,
    /([aeiou])ng/gi,
    /([aeiou])pp?/gi,
    /timon/gi
  ];
  var replace = ["$1nk", "$1nk", "$1mp", "hond"];

  var words = text.split(/\b\W*\b/g);
  var repWords = [];
  var vIndex = 0;
  for (var i = 0; i != words.length; ++i) {
    for (var j = 0; j != regex.length; ++j) {
      if (regex[j].test(words[i])) {
        repWords[vIndex] = words[i].replace(regex[j], replace[j]);
        ++vIndex;
      }
    }
  }
  var verbeterink = "";
  for (var i = 0; i != repWords.length - 1; ++i) {
    verbeterink += '\"' + repWords[i] + "\", ";
  }
  verbeterink += "en \"" + repWords[repWords.length-1] + '\"';

  createP("Volgens mij is het " + verbeterink + " weet niet zeker hoor");

  for (var i = 0; i != regex.length; ++i) {
    text = text.replace(regex[i], replace[i]);
  }

  if (outputfield) {
    outputfield.remove();
  }
  outputfield = createElement("textarea", text);
  outputfield.attribute("cols", "80");
  outputfield.attribute("rows", "5")
}
