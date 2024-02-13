//wave motion code taken from p5.js

//waveshit
let rows = 5; //how many rows of waves
let waveMaxHeight = 250; //range of motion for a single wave
let baseT = 0; //base time for noise function to move the waves
let currentText = false;


//let art1P, art2E, art3T, art4G, art5N, art6M, art7C, art8U;

let button1PVisible = true;
let button2EVisible = true;
let button3TVisible = true;
let button4GVisible = true;
let button5NVisible = true;
let button6MVisible = true;
let button7CVisible = true;
let button8UVisible = true;
let defaultButtonVisible = true;

let defaultButtonClicked = false;

//function preload() {
// art1P = loadImage('data/art1P_b.png');
// art2E = loadImage('data/art2E_b.png');
// art3T = loadImage('data/art3T_b.png');
// art4G = loadImage('data/art4G_b.png');
// art5N = loadImage('data/art5N_b.png');
// art6M = loadImage('data/art6M_b.png');
// art7C = loadImage('data/art7C_b.png');
// art8U = loadImage('data/art8U_b.png');
//}


function setup() {
  createCanvas(1600, 900); 
  
  //top row of picture buttons
  button1P = createImg('data/art1P.png');
  button1P.position(25, 82);
  button1P.mousePressed(art1PWaves);
  
  button2E = createImg('data/art2E.png');
  button2E.position(410, 150);
  button2E.mousePressed(art2EWaves);
  
  button3T = createImg('data/art3T.png');
  button3T.position(840, 51);
  button3T.mousePressed(art3TWaves);
  
  button4G = createImg('data/art4G.png');
  button4G.position(1270, 198);
  button4G.mousePressed(art4GWaves);
  
  
  //bottom row
  button5N = createImg('data/art5N.png');
  button5N.position(11, 472);
  button5N.mousePressed(art5NWaves);
  
  button6M = createImg('data/art6M.png');
  button6M.position(445, 540);
  button6M.mousePressed(art6MWaves);
  
  button7C = createImg('data/art7C.png');
  button7C.position(860, 370);
  button7C.mousePressed(art7CWaves);
  
  button8U = createImg('data/art8U.png');
  button8U.position(1189, 530);
  button8U.mousePressed(art8UWaves);
  
  
  defaultButton = createImg('data/plank.png');
  defaultButton.position(490, -90);
  defaultButton.mousePressed(defaultWaves);
}



function draw() {
  background(186, 11, 100);

  drawWaves(rows);
  
  displayText();
  
}





function drawWaves(number) { //draws specified number of waves on the canvas

  //loop through the rows to draw each wave, then loop backwards to layer them on top of each other
  for (let i = number; i >= 0; i--) {
    drawWave(i, number);
  }
  // Increment the base time parameter so that the waves move
  baseT += 0.01;
}



//draws nth wave (n = number of wave, rows = total number of waves)
function drawWave(n, rows) {
  
// Calculate the base y for this wave based on an offset from the bottom of the canvas and subtracting the number of waves to move up (to make the waves overlap, the wave height must be divided)
  let baseY = height - n * waveMaxHeight / 3; 


  let t = baseT + n*100; //get starting time parameter for the wave based on the base time and an offset based on the wave number

  let startX = 0; //each wave starts at 0 on the x-axis

  
//start drawing
  push();
  
  colorMode(HSB); //use hsb to change color more easily

  let hue = map(n, 0, rows, 200, 250); //calculate hue (from 0 - 360) based on the number of waves, then mapping it to an HSB hue value
  fill(hue, 50, 80);
  noStroke();
  
//using vertex based shit for some reason
  beginShape();

  vertex(startX, baseY);
//loop along the x-axis while drawing vertices for each point along the noise function in increments of 10

  for (let x = startX; x <= width; x += 10) {

    let y = baseY - map(noise(t), 0, 1, 10, waveMaxHeight); //calculates the wave's y based on the noise function and baseY

    
    vertex(x, y); //it's a vertex idk what you want me to say
    t += 0.01; //increments time parameter so the waves vary on y
  }

//draws final three vertices to close the shape around the edges of the canvas
  vertex(width, baseY); 
  vertex(width, height);
  vertex(0, height);
  endShape();
}


function displayText() {
  // Display text on the screen
  fill(0); // Set text color to white
  textAlign(LEFT);
  textSize(16);
  text(currentText, 100, 100); // Display text at position (100, 100)
}





function defaultWaves() {
  waveMaxHeight = 250;
  currentText = false;
  defaultButtonClicked = true;
  if (defaultButtonClicked) {
    button1P.show();
    button2E.show();
    button3T.show();
    button4G.show();
    button5N.show();
    button6M.show();
    button7C.show();
    button8U.show();
  }
}


// Define functions for each button
function art1PWaves() {
//  image(art1P, 100, 100);
  waveMaxHeight = 500; // Change wave height
  currentText = true;
  currentText = 'Product Imageboard for Ponyo: Hayao Miyazaki, 2008, markers and watercolor (Ghibli Museum) \n This work depicts an imageboard for the eighth Ghibli movie, Ponyo. Not concept art, not a storyboard, the calming piece depicts the underwater realm of Fujimoto, the once-human wizard, \n father of the titular main character Ponyo/Brunhilde. Ponyo itself is a beautiful depiction of one’s love for the ocean, and how humans can peacefully coexist with the land (and sea) they occupy \n if they give in to the welcoming embrace of the waves. Ponyo is a love letter to youth, young love, and those days at the beach where your skin is sun-kissed and the tide is your blanket.';
  button1Clicked = true;
    button2E.hide();
    button3T.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();

}

function art2EWaves() {
//  image(art2E, 100, 100);
  waveMaxHeight = 110;
  currentText = true;
  currentText = 'The View from el Pilon de Azucar: Elizabeth Thorn, 2020, digital photograph (LonelyPlanet.com) \n The View from el Pilon de Azucar is the only photograph of the collection, and depicts the view from the highest point from South America, courtesy of the Punta Gallinas peninsula, Colombia. \n A pale white rock, Kamaici, Lord of All Sea Things, defiantly juts up from the sand, crowned by a shrine to the Virgin Mary, Mother of God. They look out on the Carribbean Sea, \n these two divine beings of the Wayuu people and Christians, their children ever in conflict but their hearts in the same place.';
    button1P.hide();
    button3T.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();

}

function art3TWaves() {
//  image(arteT, 100, 100);
  waveMaxHeight = 280;
  currentText = true;
  currentText = 'The Journey of the Sun god Re: Unknown artist, 990-969 BC, mineral pigments, from the inner coffin of Nespawershefyt (Fitzwilliam Museum) \n The sun god Re sighs, pleased. His burning barge has blessed his subjects once more, their crops flourishing and their knowledge increasing. Yet their success come as a cost; \n in front of him he sees twilight approaching, and with it the world-ending serpent Apophis, its eyes and fanged mouth fixed on the barge. The sun would make a tasty morsel for the Great Serpent. \n Re steadies himself and turns to his servants, his warriors, his children, all armed to the teeth and looking to him for guidance, protection, life even. He smiles. The sun will rise again.';
    button1P.hide();
    button2E.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}

function art4GWaves() {
//  image(art4G, 100, 100);
  waveMaxHeight = 150;
  currentText = true;
  currentText = 'Gray Day at the Sea: Max Beckmann, 1907, oil on canvas (St. Louis Art Museum) \n Gray Day at the Sea perfectly encapsulates the whirling eddies and thrashing waves surrendering to the calm of the shore, a relentless and predictable battle. \n The cracks and sand grains in this painting do not detract from the ambience, rather, they suck the reader into Max Beckmann’s day at the beach; the wind is whipping the waves up, \n and dark clouds hint at rain in a few hours. Better finish the painting before then.';
    button1P.hide();
    button2E.hide();
    button3T.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}

function art5NWaves() {
//  image(art5N, 100, 100);
  waveMaxHeight = 350;
  currentText = true;
  currentText = 'The Ninth Wave: Ivan Aivazovsky, 1897, oil on canvas (The State Russian Museum) \n The ninth wave refers to an old sailing expression that refers to a fantastically large wave that occurs after a leadup of eight smaller ones. The Ninth Wave by Ivan Aivazovsky \n depits such a phenomenon at the worst possible time. A group of people have just survived a heavy night storm. All that remains from their ship is a cross-shaped piece of wreckage, \n a sign that salvation is the only way to survive their watery predicament. While the sun rises and promises a new, hope-filled day, the passengers cling and pray to their god, \n hoping that the ninth wave will never come.';
    button1P.hide();
    button2E.hide();
    button3T.hide();
    button4G.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}

function art6MWaves() {
//  image(art6M, 100, 100);
  waveMaxHeight = 50;
  currentText = true;
  currentText = 'Two Men by the Sea: Caspar David Friedrich, 1817, oil on canvas (Alte Nationalgalerie) \n Two men staring into the endless horizon. What do they see? What are they looking for? The ocean is silent and empty. They are alone.';
    button1P.hide();
    button2E.hide();
    button3T.hide();
    button4G.hide();
    button5N.hide();
    button7C.hide();
    button8U.hide();
}

function art7CWaves() {
//  image(art7C, 100, 100);
  waveMaxHeight = 400;
  currentText = 'Christ in the Storm on the Sea of Galilee: Rembrandt van Rijn, 1606-1669, oil on canvas (stolen from the Isabella Stewart Gardner Museum) \n Christ in the Storm on the Sea of Galilee holds a special space in the art sphere, not just as Rembrant’s sole seascape, but as a finely detailed frame of history, \n the wind still blowing years after Christ’s death. The panic of the disciples as they struggle to steady their boat and the contrast of the bright sea spray against \n the ominous clouds in the background creates an air of uncertainty; will they fall into the depths?';
    button1P.hide();
    button2E.hide();
    button3T.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button8U.hide();
}

function art8UWaves() {
//  image(art8U, 100, 100);
  waveMaxHeight = 10;
  currentText = true;
  currentText = 'Umi-bōzu: Shigeru Mizuki, 1981, steel nibs and watercolor (the Yōkai Encyclopedia) \n The umi-bōzu are humongous creatures that originate from Japan. They normally appear while the sea is deceptively calm, keeping sailors on their toes no matter the weather. \n Umi-bōzu is included to show the danger that is always on the sea’s horizon, just out of the corner of your eye. The petrifying magnitutde of the umi-bōzu are nothing, however, \n when compared to the real-life eldritch horrors peering up from the dark depths of the ocean.';
    button1P.hide();
    button2E.hide();
    button3T.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
}
