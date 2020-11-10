
    var r;
    var g;
    var b;

    let op1;
    let op2;
    let op3;
    let op4;
    let currentFrame;
    let currentFrameL;
    let currentFrameK;
    let currentFrameF;
    let numFrames;
    let numFramesL;
    let numFramesK;
    let numFramesF;
    let isSecuence = false;
    let isLotte = false;
    let isKitty = false;
    let isFlow = false;


    let imgs = [numFramesL];
    let imgsK = [numFramesK];
    let imgsF = [numFramesK];
    let h;

    let canvas;
    var frameRt= 0;
    function setup(){
        canvas = createCanvas(windowWidth, windowHeight);
        canvas.position(0, 0);
        canvas.parent('sketch-holder'); 
        frameRate(8);
        op1 = select("#hi");
        op2 = select("#hello");
        op3 = select("#hola");
        op4 = select("#ciao");
        numFrames = 8;
        numFramesL = 1000;
        numFramesK = 106;
        numFramesF = 600;

        

        r = 0;
        g = 0;
        b = 0;

        currentFrame = 0;
        currentFrameL = 0;
        currentFrameK = 0;
        currentFrameF = 0;

        //op1.mouseClicked(changeGray);
        op1.mouseClicked(function(){
            isLotte = !isLotte;
        });
        op2.mouseClicked(function(){
            isKitty = !isKitty;
        });
        op3.mouseClicked(function(){
            isFlow = !isFlow;

        });
        op4.mouseClicked(function(){
            isSecuence = !isSecuence;

        });


    }

      function preload(){
            h = loadImage("/img/heart.png");

           for(var i = 0; i < 1000; i++){
               imgs[i] = loadImage('/img/lotte/lotte_' + i + '.jpg');
           }

           for(var j = 0; j < 106; j++){
               imgsK[j] = loadImage('/img/kitty/kitty_' + j + '.jpg');
           }

          for(var k = 0; k < 600; k++){
            imgsF[k] = loadImage('/img/flowers/flowers_' + k + '.jpg');
        }
      }

    function changeGray(){
        r = random(0, 250);
        g = random(0, 250);
        b = random(0, 200);
        background(r, g, b);
    }

    function circleMake(){
        noStroke();
        fill(g, b, r);
        image(h, random(0, windowWidth),random(0, windowHeight), 100, 100);
        //circle(random(0, windowWidth),windowHeight/2, random(10, 50));
    }

     function lotte(){

         if(isLotte === true){
             tint(255, 127)
             image(imgs[currentFrameL], 50, 200, 400, 400);

         }
     }

     function kitty(){
         if(isKitty === true){
             image(imgsK[currentFrameK], 600, 200, 400, 400);
         }
     }

    function flowers(){
        if(isFlow === true){
            image(imgsF[currentFrameF], 1100, 200, 400, 400);
        }
    }


    function secuence(){

        if(isSecuence === true){

        currentFrame = (currentFrame+1) % numFrames;

        switch(currentFrame){
            case 7:
                circleMake();
                break;
            case 6:
                circleMake();
                break;
            case 5:
                circleMake();
                    break;
            case 4:
                changeGray();
                break;

            case 3:
                circleMake();
                break;

            case 2:
                    changeGray();
                    break;
            case 1:
                circleMake();
                break;

            case 0:
                circleMake();
                break;

            default :
                circleMake();


        }

        fill(0, 500, 255, 5);
        rect(0, 0, windowWidth, windowHeight);

        }
    }

    function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }

    draw = function(){
        
        // p.background(r, g, b);
        lotte();
        kitty();
        flowers();
        secuence();
        //  op2.mouseClicked(circleMake);
         currentFrameL = (currentFrameL+1) % numFramesL;
         currentFrameK = (currentFrameK+1) % numFramesK;
         currentFrameF = (currentFrameF+1) % numFramesF;

         frameRt = map(mouseX, 0, windowWidth, 0, 15);
         //frameRate(frameRt);
        console.log(frameRt);
    }
