// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["(0,0)"]
};

// ======================
function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      console.log("FALLO: Direccion distinta de NSEW");
  }
  console.log("La direccion ahora es: " + rover.direction);
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "E":
      rover.direction = "S";
      break;
    default:
      console.log("FALLO: Direccion distinta de NSEW");
  }
  console.log("La direccion ahora es: " + rover.direction);
}

function moveForward(rover) {
  switch (rover.direction) {
    case "N":
      if (rover.y == 0) {
        console.log("No puede salirse del mapa por el Norte.");
        return;
      }
      rover.y = rover.y - 1;
      break;
    case "S":
      if (rover.y == 10) {
        console.log("No puede salirse del mapa por el Sur.");
        return;
      }
      rover.y++; //esto es lo mismo que poer rover.y=rover.y+1
      break;
    case "W":
      if (rover.x == 0) {
        console.log("No puede salirse del mapa por el Oeste.");
        return;
      }
      rover.x--;
      break;
    case "E":
      if (rover.x == 10) {
        console.log("No puede salirse del mapa por el Este.");
        return;
      }
      rover.x++;
      break;
    default:
  }
  var coordenadas = "(" + rover.x + "," + rover.y + ")";

  console.log(
    "El rover está en la posición: (" + rover.x + "," + rover.y + ")"
  );
  rover.travelLog.push(coordenadas);
}

function moveBackward(rover) {
  switch (rover.direction) {
    case "S":
      if (rover.y == 0) {
        console.log("No puede salirse del mapa por el Norte.");
        return;
      }
      rover.y = rover.y - 1;
      break;
    case "N":
      if (rover.y == 10) {
        console.log("No puede salirse del mapa por el Sur.");
        return;
      }
      rover.y++; //esto es lo mismo que poer rover.y=rover.y+1
      break;
    case "E":
      if (rover.x == 0) {
        console.log("No puede salirse del mapa por el Oeste.");
        return;
      }
      rover.x--;
      break;
    case "W":
      if (rover.x == 10) {
        console.log("No puede salirse del mapa por el Este.");
        return;
      }
      rover.x++;
      break;
    default:
  }
}

function commands(rover, comandos) {

  for (var i = 0; i < comandos.length; i++) {
   if(comandos[i] != "f" && comandos[i] != "r" && comandos[i] != "l" && comandos[i] != "b" ){
     console.log("Tiene una letra que no es 'l', 'r', 'f' o 'b'.")
     return;
   }
  }

  for (var i = 0; i < comandos.length; i++) {
    switch (comandos[i]) {
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
        break;
      default:
        console.log("error en commands: letra distinta de 'r', 'l' o 'f'");
    }
  }
}
