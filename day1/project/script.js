function changeColors(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = '#' + randomColor;
    color.innerHTML = '#' + randomColor;
}

one.addEventListener('click', changeColors);
changeColors();


// let index = 0;
// let colors = ['red', 'darkblue', 'orange', 'yellow', 'green', 'purple'];

// function changeColors(){
//     if (index > colors.length - 1)
//         index = 0;

//     document.getElementsByTagName('body')[0].style.background = colors[index++];   
// }