//SELECT INDIVIDUAL CLASSES
const blockRed = document.querySelector(".block--red");
const blockBlue = document.querySelector(".block--blue");
const blockGreen = document.querySelector(".block--green");
const blockPink = document.querySelector(".block--pink");
const blockGray = document.querySelector(".block--gray");

//SELECT ALL BLOCKS AND TURN INTO ARRAY
const blocks = document.querySelectorAll(".block");
const blockArray = Array.from(blocks);

blockArray.forEach(block => {
  block.addEventListener("click", event => {
    let parentElement = document.querySelector(".blocks");
    parentElement.removeChild(block);
    parentElement.insertBefore(block, parentElement.childNodes[0]);
    // block.style.display = "none";
    console.log(parentElement);
    console.log(block);
  });
});

// blockArray.forEach(block => {
//   block.addEventListener("mousedown", event => {
//     block.style.marginLeft = "100px";
//   });
// });
// blockArray.forEach(block => {
//   block.addEventListener("mouseup", event => {
//     block.style.marginLeft = "0px";
//   });
// });
