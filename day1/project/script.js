let index = 0;
let colors = ['red', 'darkblue', 'orange', 'yellow', 'green', 'purple'];

function changeColors(){
    if (index > colors.length - 1)
        index = 0;

    document.getElementsByTagName('body')[0].style.background = colors[index++];   
}