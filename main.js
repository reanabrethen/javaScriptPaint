/*******************
 * OUR HELPER CODE *
*******************/

/*
 * Here we add the squares to the canvas dynamically.
 * You can mostly leave this section alone!
 * But if you want to change how wide the canvas is,
 * there are just two steps:
 * 
 * 1. Change the `gridWidth` value below.
 * 2. Change the `grid-template-rows` and
 * `grid-template-columns` to match.
 *
 * To make the second one happen, the number to change
 * is the first argument to `repeat`, currently set at 10.
 */


const gridWidth = 10;
let count = 0;
while (count <= gridWidth * gridWidth) {
  const canvas = document.querySelector('.canvas');
  const div = document.createElement('div');
  div.className = 'square color-5';
  canvas.appendChild(div);
  count++;
}

// You probably should NOT do these in the order below.
// That is, you probably should NOT do all the queries,
// THEN all the functions,
// THEN all the wiring.

// Instead, it'll be easier if you go one action at a time!
// So, add a query for the palette colors.
// THEN add an event listener function for what happens when one is clicked.
// THEN wire those two together, so that when the palette elements are clicked,
// the function runs.
//
// And proceed from there to getting the squares working.
//

// ALSO.
// You do not have to follow the sections below. If you're doing your functions inline, it doesn't make a lot of sense to separate the event listener functions from their wiring!

/***********
 * QUERIES *
***********/

// Add queries for all your squares, palette colors, and brush here.
// (Note the singular or plural used in that sentence!)

//build an array for all the names of classes using 'colors'
//hard code an array --> [color 1, color 2, etc..]
//every time square click, loop through array --> remove class when clicked
//remove function

const paintBrush = document.querySelector('#current-brush')


const squares = document.querySelectorAll('.square')  //big arr of all squares, individually access squares

const paletteColors = document.querySelectorAll('.palette-color')

const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5']

  for(let square of squares){
    square.addEventListener('click', (event)=>{
      for(let color of colors){
        event.target.classList.remove(color) 
      }  
      event.target.classList.add(paintBrush.classList[0])
        
    })
}


paletteColors.forEach((color) => {
  color.addEventListener('click', (event)=>{
    for(let color of colors){
    paintBrush.classList.remove(color)}
    console.log(event.target.classList)
  paintBrush.classList.add(event.target.classList[1])
  console.log(event.target)  
})
})






























// const paletteColors = document.querySelector('.palette')

// paletteColors.addEventListener('click', ()=>{
//   for(let color of paletteColors){
//     color.event.target.replace('palette-color', 'current-brush')
//   }
// })





//ATTEMPT 3
// //squares 
// // const squares = document.querySelectorAll('.square')
// const canvas = document.querySelector('.canvas')

// //palette
// const paletteColors = document.querySelectorAll('.palette-color')

// //brush
// const paintBrush = document.querySelector('.current-brush')



// function paintColor(element){
//     return element.classList[1]
// }



// const squares = []
// for(let i = 0; i < canvas.length; i++){
//   squares.push(canvas[i])
// }

// squares.forEach((square) =>{
//     square.addEventListener('click', (event)=>{
//       const squareCanvas = event.target
//       squareCanvas.classList.replace(paintColor(squareCanvas), paintColor(paintBrush))
//     })
// })



// paletteColors.forEach((color)=>{
//   color.addEventListener('click', (event) => {
//     paintBrush = event.target.replace(paintColor(paintBrush))
//   })
// })
  
  // event.target.classList.replace()

// function clickSquares(){
//     console.log('functionality test')
    
// }

// function clickPaletteColor(){
//   console.log('functionality test')
// }

// function brushClick(){
// paintBrush.addEventListener('click', (event)=>{
//   const brushTarget = event.target
//   const colorClass = paintBrush.getAttribute('color')
//   brushTarget.setAttribute('color', colorClass)
//   console.log('click works')
// })
// }

// console.log(brushClick(squares))





//ATTEMPT 2

// //squares 
// const squares = document.querySelectorAll('.square')
// const canvas = document.querySelector('.canvas')

// //palette
// const paletteColors = document.querySelectorAll('.palette-color')

// //brush
// const paintBrush = document.querySelector('.brush')

// //create an array to hold colors for index and define i for template literals
// const numOfPaint = 5
// const paintColors = []

// function defineI(){
//   for(let i = 0; i < numOfPaint.length; i++){
//   paintColors.push(`color-${i}`)
// }
// }

// let i = defineI()

// const brushColor = document.querySelector(`current-brush color-${i}`)



// function brushClick(){
// paintBrush.addEventListener('click', (event)=>{
//   const brushTarget = event.target
//   const colorClass = paintBrush.getAttribute('color')
//   brushTarget.setAttribute('color', colorClass)
//   console.log('click works')
// })
// }

// console.log(brushClick())

// function clickSquares(){
//     console.log('functionality test')
    
// }

// squares.forEach((square) =>{
//     square.addEventListener('click', (event)=>{
//       event.target.classList.replace('color', brushColor)
//     })
// })


// function clickPaletteColor(){
//   console.log('functionality test')
// }

// paletteColors.forEach((color)=>{
//   color.addEventListener('click', (event)=>{
//     brushColor = event.target.remove('color')
//     brushColor = event.target.add(brushColor)
//   })
// })
  



//ATTEMPT 1


//EVENT LISTENER FOR PALETTE

// paletteColors.forEach(paintColor => {
//   paintColor.addEventListener('click',()=>{
//     console.log('palette color received')
//     const paintColorClass = paletteColors.classList
//     paintBrush.className = `.current-brush color-${paintColorClass}`
//   } )
// })





// function changeColor(element, currentPaint){
  //  paletteColors.forEach(color => element.classList.replace(color, currentPaint))
      // element.classList.add(currentPaint)
//  }


// palette.addEventListener('click', ()=>{
//   changeColor(paintBrush)
// })



// const currentColor = []

//function to change color

// function changeColor(squares, currentColor){
//     const squares = document.querySelectorAll('.square')
//     squares.classList.remove('color')
//     squares.classList.add(currentColor)
  
// }
  
//   let num 
//   const squares = document.querySelectorAll('.square')
//   squares.forEach(square => square.classList.replace(`color-${num}`, `currentColor-${num}`))
// }
    
//     for(let square of squares){
//     square.addEventListener('click', ()=>{
//       colorChange(square.classList.replace('color', 'current-color'))
//     })
//   }
// }

// console.log(changeColor())
//event listener functions

//.replace


// function clickedPaletteColor(colors){
//   colors.forEach(color => color.classList.add('clicked'))
// }


// squares.forEach(square => square.addEventListener('click', clickedSquare))

// function clickedSquare(square){
//       square.classList.add('clicked')
// }
// console.log(clickedSquare)

// function clickedPaletteColor(color){
//   color.classList.replace('')
// }

/****************************
 * EVENT LISTENER FUNCTIONS *
****************************/

// Now add some functions to handle clicking one particular square
// and clicking one particular palette color. You can leave them
// empty at first, though a console.log just to know they're being
// run as event listeners (after the next step is set up) isn't a
// bad idea for testing purposes.





/**************************
 * WIRING IT ALL TOGETHER *
**************************/

// Now: wiring up our event listeners to our html node elements.
// You'll need to add the appropriate event listener for each
// square and for each palette color from the functions you
// wrote above.
