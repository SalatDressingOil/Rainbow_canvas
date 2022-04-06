function setup() {
    createCanvas(400, 400);
  }
  
  let cOffset = 0;
  function draw() {
      const inc = height/100;
      colorMode(HSB);
      
      for(let y = 0; y < height; y += inc) {
          let h = (y / height) * 360;
          fill(abs(h+cOffset)%360, 100
          , 100);

          noStroke();
          rect(0, y-inc, width, y);
      }
      
      cOffset -= 10;
  }