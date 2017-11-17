function setup() {
  createCanvas(600,500)
}
function draw() {
  background('blue')
  fill(250)
  var y = 0
  var x = 50
  var count = 0

  while (count < 8) {

    if (count %2===0){
    fill('white')      
    } else {
    fill('black')
    }
  
    rect (x, y+50, 50, 50)  
     if (count %2===0){
    fill('black')      
    } else {
    fill('white')
    }
    rect (x, y+100, 50, 50)
    if (count %2===0){
    fill('white')      
    } else {
    fill('black')
    }
        rect (x,y+150, 50, 50)
        if (count %2===0){
    fill('black')      
    } else {
    fill('white')
    }   
        rect (x,y+200, 50, 50)  
         if (count %2===0){
    fill('white')      
    } else {
    fill('black')
    }
        rect (x,y+250, 50, 50) 
         if (count %2===0){
    fill('black')      
    } else {
    fill('white')
    }
        rect (x, y+300, 50, 50)    
         if (count %2===0){
    fill('white')      
    } else {
    fill('black')
    } 
       rect (x, y+350, 50, 50)    
         if (count %2===0){
    fill('black')      
    } else {
    fill('white')
    }
    rect (x, y+400, 50, 50)    
         if (count %2===0){
    fill('black')      
    } else {
    fill('white')
    }


    count += 1
    x += 50    
  }
}
for ( var count = 0; count < 8; count += 1 ) {
  //...
}
