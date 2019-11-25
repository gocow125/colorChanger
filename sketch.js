
var bg;//background
let colour; // text that shows the color

function setup() {
  createCanvas(800, 800);
 
  
  frameRate(480); //for future proofing


}

function draw() {
  background("#7732a8");//initializes background color
  fill("#ebab34");
  stroke("#3480eb");
  strokeWeight(3);
  ellipse(mouseX,mouseY,100,100);
    

  
  fill("#54ffb2");
  stroke("#3480eb");
  strokeWeight(3);
  ellipse(150,150,30,30); //green circle
    
 fill("#ff5485");
 stroke("#3480eb");
  strokeWeight(3);
  ellipse(650,650,30,30); //pink circle
    
    // these if statements change the color of the background based on the color of the cirlce when the cursor moves behind it
    
    if (mouseX<150 && mouseY<150){ 
        bg = ("#54ffb2");
         background(bg);
        fill("#ebab34");
        stroke("#3480eb");
        strokeWeight(3);
        ellipse(mouseX,mouseY,100,100);
    }
        
        
        if(mouseX>650 && mouseY>650){
        bg =("#ff5485")
         background(bg);
        fill("#ebab34");
        stroke("#3480eb");
        strokeWeight(3);
        ellipse(mouseX,mouseY,100,100);
    }
}



