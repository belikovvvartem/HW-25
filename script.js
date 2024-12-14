let getColor = () => Math.floor(Math.random() * 256);

function RandomColor() {
  return `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
}

document.getElementById("changeColorBtn").addEventListener("click", () => {
    const squareElements = document.querySelectorAll(".square");
    squareElements.forEach((squareElement) => {
      squareElement.style.backgroundColor = RandomColor();
    });
  });


  document.getElementById("reloadBtn").addEventListener("click", () => {
    location.reload(); 
  });
  
