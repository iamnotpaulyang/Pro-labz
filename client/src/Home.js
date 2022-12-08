import "./Home.css";

// var estadoBlender = "Apagada";
// var soundBlender = document.getElementById("blender-sound");
// var buttomBlender = document.getElementById("blender-button-sound");
// var Blender = document.getElementById("blender");

// function controlarBlender(){
//     if (estadoBlender == "Apagada"){
//         estadoBlender = "Encendida";
//         makeBrrBrr();
//         Blender.classList.add("active");
//        /* console.log("Esta Prendido");*/
//     }else{
//         estadoBlender = "Apagada";
//         makeBrrBrr();
//         Blender.classList.remove("active");
//        /* console.log("Esta Apagado");*/
//     }
// }

// function makeBrrBrr(){
//     if (soundBlender.paused){
//         buttomBlender.play();
//         soundBlender.play();
//     }else{
//         buttomBlender.play();
//         soundBlender.pause();
//         soundBlender.currentTime=0;
//     }
// }


function Home() {
  return (
    <>
      <div className="home-container">
        <div className="text-box">
          <h1 className="home-title">Pro-Labz.</h1>
        </div>
      </div>
      </>
  //   <div>
  //   <head>
  //       <meta charset="utf-8">
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //       <title>Blender JS</title>
  //       <meta name="description" content="">
  //       <meta name="viewport" content="width=device-width, initial-scale=1">
  //       <link rel="stylesheet" href="CSS/style.css">
  //   </head>
  //   <body>
  //       <div class="container">
  //           <div id="blender" class="blender">
  //               <div id="blender-button" class="blender-button" onclick="controlarBlender()"></div>
  //           </div>
  //       </div>
  //       <audio id="blender-button-sound" src="Sound/sound_botonLicuadora.mp3" type="audio/mpeg"></audio>
  //       <audio id="blender-sound" src="Sound/sound_licuadora.mp3" type="audio/mpeg" loop></audio>
  //       <script src="JS/script.js"></script>
  //   </body>
  // </div>
  
  );
}

export default Home;