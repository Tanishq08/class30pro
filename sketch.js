 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world

function preload() {
   
}

function setup(){
    createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(400,680,800,20);
    ground2 = new Ground(340,480,250,20);
    ground3 = new Ground(650,350,250,20);

    box1 = new Box(255,465,40,40);
    box2 = new Box(285,465,40,40);
    box3 = new Box(310,465,40,40);
    box4 = new Box(350,465,40,40);
    box5 = new Box(400,465,40,40);
    box6 = new Box(440,465,40,40);

    box7 = new Box(268,430,40,40);
    box8 = new Box(300,430,40,40);
    box9 = new Box(340,430,40,40);
    box10 = new Box(380,430,40,40);
    box11 = new Box(420,430,40,40);

    box12 = new Box(280,400,40,40);
    box13 = new Box(320,400,40,40);
    box14 = new Box(360,400,40,40);
    box15 = new Box(400,400,40,40);

    box16 = new Box(295,370,40,40);
    box17 = new Box(335,370,40,40);
    box18 = new Box(375,370,40,40);

    box19 = new Box(320,340,40,40);
    box20 = new Box(350,340,40,40);
    
    box21 = new Box(335,310,40,40);
    

    box22 = new Box(555,320,40,40);
    box23 = new Box(580,320,40,40);
    box24 = new Box(625,320,40,40);
    box25 = new Box(665,320,40,40);
    box26 = new Box(705,320,40,40);
    box27 = new Box(745,320,40,40);

    box28 = new Box(560,255,40,40);
    box29 = new Box(600,255,40,40);
    box30 = new Box(640,255,40,40);
    box31 = new Box(680,255,40,40);
    box32 = new Box(720,255,40,40);

    box33 = new Box(580,235,40,40);
    box34 = new Box(620,235,40,40);
    box35 = new Box(660,235,40,40);
    box36 = new Box(700,235,40,40);

    box37 = new Box(600,205,40,40);
    box38 = new Box(630,205,40,40);
    box39 = new Box(678,205,40,40);

    box40 = new Box(615,170,40,40);
    box41 = new Box(655,170,40,40);

    box42 = new Box(635,145,40,40);

    poly1 = new Poly(100,200,40,40)

    sling1 = new Sling(poly1.body,{x:100,y:200});




    Engine.run(engine);
}
function draw(){
    background("green")
  
     ground1.display();
     ground2.display();
     ground3.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
     box8.display();
     box9.display();
     box10.display();
     box11.display();
     box12.display();
     box13.display();
     box14.display();
     box15.display();
     box16.display();
     box17.display();
     box18.display();
     box19.display();
     box20.display();
     box21.display();
     box22.display();
     box23.display();
     box24.display();
     box25.display();
     box26.display();
     box27.display();
     box28.display();
     box29.display();
     box30.display();
     box31.display();
     box32.display();
     box33.display();
     box34.display();
     box35.display();
     box36.display();
     box37.display();
     box38.display();
     box39.display();
     box40.display();
     box41.display();
     box42.display();
     poly1.display();
     sling1.display();
   
}

function mouseDragged(){
    Matter.Body.setPosition(poly1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach(poly1.body)
    }
}

