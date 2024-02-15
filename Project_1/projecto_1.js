//Wave motion code taken from p5.js

let rows = 5; //How many rows of waves
let waveMaxHeight = 250; //Range of motion for a single wave
let baseT = 0; //Base time for noise function to move the waves
let currentText = false; //sets currentText variable as false to prevent text from displaying in the gallery view
let textX, textY; //Coordinates of where the text body will appear

let art1P, art2E, art3R, art4G, art5N, art6M, art7C, art8U; //Disfunctional images

//Sets all buttons to visible so that they can be controlled later on
let button1PVisible = true;
let button2EVisible = true;
let button3RVisible = true;
let button4GVisible = true;
let button5NVisible = true;
let button6MVisible = true;
let button7CVisible = true;
let button8UVisible = true;
let defaultButtonVisible = true;



function preload() {
//Preloading larger versions of paintings (disfunctional)
 art1P = loadImage('data/art1P_b.png');
 art2E = loadImage('data/art2E_b.png');
 art3R = loadImage('data/art3R_b.png');
 art4G = loadImage('data/art4G_b.png');
 art5N = loadImage('data/art5N_b.png');
 art6M = loadImage('data/art6M_b.png');
 art7C = loadImage('data/art7C_b.png');
 art8U = loadImage('data/art8U_b.png');
 }



function setup() {
  createCanvas(1600, 900); //Create canvas
  
  //Top row of picture buttons
  button1P = createImg('data/art1P.png'); //Sets image for button
  button1P.position(25, 82); //Sets position for button
  button1P.mousePressed(art1PWaves); //Sets function for button
  
  button2E = createImg('data/art2E.png');
  button2E.position(410, 230);
  button2E.mousePressed(art2EWaves);
  
  button3R = createImg('data/art3R.png');
  button3R.position(860, 90);
  button3R.mousePressed(art3RWaves);
  
  button4G = createImg('data/art4G.png');
  button4G.position(1270, 198);
  button4G.mousePressed(art4GWaves);
  
  
  //Bottom row of buttons
  button5N = createImg('data/art5N.png');
  button5N.position(11, 500);
  button5N.mousePressed(art5NWaves);
  
  button6M = createImg('data/art6M.png');
  button6M.position(445, 540);
  button6M.mousePressed(art6MWaves);
  
  button7C = createImg('data/art7C.png');
  button7C.position(860, 370);
  button7C.mousePressed(art7CWaves);
  
  button8U = createImg('data/art8U.png');
  button8U.position(1170, 530);
  button8U.mousePressed(art8UWaves);
  
//"Return to gallery" button
  defaultButton = createImg('data/plank.png');
  defaultButton.position(490, -90);
  defaultButton.mousePressed(defaultWaves);
    
}



function draw() {
  background(186, 11, 100); //Sets background to light blue sky
  
  drawWaves(rows); //Draws waves using the preset number
  
  displayText(); //Displays text depending on function
}



function drawWaves(number) { //Draws specified number of waves on the canvas
  //Loop through the rows to draw each wave, then loop backwards to layer them on top of each other
  for (let i = number; i >= 0; i--) {
    drawWave(i, number);
  }
  // Increment the base time parameter so that the waves move
  baseT += 0.01;
}



//Draws nth wave (n = number of wave, rows = total number of waves)
function drawWave(n, rows) {
  
// Calculate the base y for this wave based on an offset from the bottom of the canvas and subtracting the number of waves to move up (to make the waves overlap, the wave height must be divided)
  let baseY = height - n * waveMaxHeight / 3; 


  let t = baseT + n*100; //Get starting time parameter for the wave based on the base time and an offset based on the wave number

  let startX = 0; //Each wave starts at 0 on the x-axis

  
//Start drawing
  push();
  
  colorMode(HSB); //Use HSB to set the color of the waves to a "gradient"

  let hue = map(n, 0, rows, 200, 250); //Calculate hue (from 0 - 360) based on the number of waves, then mapping it to an HSB hue value
  fill(hue, 50, 80);
  noStroke();
  beginShape();
  vertex(startX, baseY);
  
//Loop along the x-axis while drawing vertices for each point along the noise function in increments of 10
  for (let x = startX; x <= width; x += 10) {
    let y = baseY - map(noise(t), 0, 1, 10, waveMaxHeight); //Calculates the wave's y based on the noise function and baseY

    vertex(x, y); 
    t += 0.01; //Increments time parameter so the waves vary on y
  }

//Draws final three vertices to close the shape around the edges of the canvas
  vertex(width, baseY); 
  vertex(width, height);
  vertex(0, height);
  endShape();
}


function displayText(alignment) {
  // Display text on the screen
  fill(0); // Set text color to black
  textAlign(alignment); // Set text alignment based on the parameter
  textSize(16); //Set text size to 16
  text(currentText, textX, textY, 500); //Sets text to display whatever is inside "currentText", at textX and textY, and sets the bounds of the text to 500 pixels
  textFont('Playfair Display'); //Sets text using the Google font in the index.html file
}





function defaultWaves() {
  waveMaxHeight = 250; //Resets wave height
  currentText = false; //Hides current text
  textX = 100;
  textY = 100;
  
//When the default button is clicked, all other buttons are shown
  defaultButtonClicked = true;
  if (defaultButtonClicked) {
    button1P.show();
    button2E.show();
    button3R.show();
    button4G.show();
    button5N.show();
    button6M.show();
    button7C.show();
    button8U.show();
  }
}


//Ponyo image function
function art1PWaves() {
  image(art1P, 100, 100); //Disfunctional image
  waveMaxHeight = 500; // Change wave height
  currentText = 'Product Imageboard for Ponyo: Hayao Miyazaki, 2008, markers and watercolor (Ghibli Museum) \n This work depicts an imageboard for the eighth Ghibli movie, Ponyo. Not concept art, not a storyboard, the calming piece depicts the underwater realm of Fujimoto, the once-human wizard, father of the titular main character Ponyo/Brunhilde. Ponyo itself is a beautiful depiction of one’s love for the ocean, and how humans can peacefully coexist with the land (and sea) they occupy if they give in to the welcoming embrace of the waves. Ponyo is a love letter to youth, young love, and those days at the beach where your skin is sun-kissed and the tide is your blanket.';
  displayText(LEFT); //Aligns the text to the left
  
  textX = 25;
  textY = 405;
  
//Hides all other buttons when clicked on
  button1Clicked = true;
    button2E.hide();
    button3R.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();

}

function art2EWaves() {
  image(art2E, 100, 100);
  waveMaxHeight = 110;
  currentText = true;
  currentText = 'The View from el Pilon de Azucar: Elizabeth Thorn, 2020, digital photograph (LonelyPlanet.com) \n The View from el Pilon de Azucar is the only photograph of the collection, and depicts the view from the highest point from South America, courtesy of the Punta Gallinas peninsula, Colombia. A pale white rock, Kamaici, Lord of All Sea Things, defiantly juts up from the sand, crowned by a shrine to the Virgin Mary, Mother of God. They look out on the Carribbean Sea, these two divine beings of the Wayuu people and Christians, their children ever in conflict but their hearts in the same place.';
  displayText(LEFT); //Aligns the text to the left
  
  textX = 835;
  textY = 240;

//Hides all other buttons when clicked on
    button1P.hide();
    button3R.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();

}

function art3RWaves() {
  image(art3R, 100, 100);
  waveMaxHeight = 280;
  currentText = true;
  currentText = 'The Journey of the Sun God Re: Unknown artist, 990-969 BC, mineral pigments, from the inner coffin of Nespawershefyt (Fitzwilliam Museum) \n The sun god Re sighs, pleased. His burning barge has blessed his subjects once more, their crops flourishing and their knowledge increasing. Yet their success come as a cost; in front of him he sees twilight approaching, and with it the world-ending serpent Apophis, its eyes and fanged mouth fixed on the barge. The sun would make a tasty morsel for the Great Serpent. Re steadies himself and turns to his servants, his warriors, his children, all armed to the teeth and looking to him for guidance, protection, life even. He smiles. The sun will rise again.';
  displayText(RIGHT); //Aligns the text to the right
  
  textX = 760;
  textY = 345;

//Hides all other buttons when clicked on
    button1P.hide();
    button2E.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}


function art4GWaves() {
  image(art4G, 100, 100);
  waveMaxHeight = 150;
  currentText = true;
  currentText = 'Gray Day at the Sea: Max Beckmann, 1907, oil on canvas (St. Louis Art Museum) \n Gray Day at the Sea perfectly encapsulates the whirling eddies and thrashing waves surrendering to the calm of the shore, a relentless and predictable battle. The cracks and sand grains in this painting do not detract from the ambience, rather, they suck the reader into Max Beckmann’s day at the beach; the wind is whipping the waves up, and dark clouds hint at rain in a few hours. Better finish the painting before then.';
  displayText(RIGHT); //Aligns the text to the right
  
  textX = 750;
  textY = 205;
  
//Hides all other buttons when clicked on    
    button1P.hide();
    button2E.hide();
    button3R.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}


//bottom row


function art5NWaves() {
  image(art5N, 100, 100);
  waveMaxHeight = 350;
  currentText = true;
  currentText = 'The Ninth Wave: Ivan Aivazovsky, 1897, oil on canvas (The State Russian Museum) \n The ninth wave refers to an old sailing expression that refers to a fantastically large wave that occurs after a leadup of eight smaller ones. The Ninth Wave by Ivan Aivazovsky depits such a phenomenon at the worst possible time. A group of people have just survived a heavy night storm. All that remains from their ship is a cross-shaped piece of wreckage, a sign that salvation is the only way to survive their watery predicament. While the sun rises and promises a new, hope-filled day, the passengers cling and pray to their god, hoping that the ninth wave will never come.';
  displayText(LEFT); //Aligns the text to the left
  
  textX = 440;
  textY = 520;
  
//Hides all other buttons when clicked on
    button1P.hide();
    button2E.hide();
    button3R.hide();
    button4G.hide();
    button6M.hide();
    button7C.hide();
    button8U.hide();
}

function art6MWaves() {
  image(art6M, 100, 100);
  waveMaxHeight = 50;
  currentText = true;
  currentText = 'Two Men by the Sea: Caspar David Friedrich, 1817, oil on canvas (Alte Nationalgalerie) \n Two men staring into the endless horizon. What do they see? What are they looking for? The ocean is silent and empty. They are alone.';
  displayText(LEFT); //Aligns the text to the left
  
  textX = 452;
  textY = 460;

//Hides all other buttons when clicked on
    button1P.hide();
    button2E.hide();
    button3R.hide();
    button4G.hide();
    button5N.hide();
    button7C.hide();
    button8U.hide();
}

function art7CWaves() {
  image(art7C, 100, 100);
  waveMaxHeight = 400;
  currentText = 'Christ in the Storm on the Sea of Galilee: Rembrandt van Rijn, 1606-1669, oil on canvas (stolen from the Isabella Stewart Gardner Museum) \n Christ in the Storm on the Sea of Galilee holds a special space in the art sphere, not just as Rembrant’s sole seascape, but as a finely detailed frame of history, the wind still blowing years after Christ’s death. The panic of the disciples as they struggle to steady their boat and the contrast of the bright sea spray against the ominous clouds in the background creates an air of uncertainty; will they fall into the depths?';
  displayText(RIGHT); //Aligns the text to the right
  
  textX = 340;
  textY = 380;
    
//Hides all other buttons when clicked on
    button1P.hide();
    button2E.hide();
    button3R.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button8U.hide();
}

function art8UWaves() {
  image(art8U, 100, 100);
  waveMaxHeight = 10;
  currentText = true;
  currentText = 'Umi-bōzu: Shigeru Mizuki, 1981, steel nibs and watercolor (the Yōkai Encyclopedia) \n The umi-bōzu are humongous creatures that originate from Japan. They normally appear while the sea is deceptively calm, keeping sailors on their toes no matter the weather. Umi-bōzu is included to show the danger that is always on the sea’s horizon, just out of the corner of your eye. The petrifying magnitutde of the umi-bōzu are nothing, however, when compared to the real-life eldritch horrors peering up from the dark depths of the ocean.';
  displayText(RIGHT);
  
  textX = 660;
  textY = 540;
    
//Hides all other buttons when clicked on
    button1P.hide();
    button2E.hide();
    button3R.hide();
    button4G.hide();
    button5N.hide();
    button6M.hide();
    button7C.hide();
}
