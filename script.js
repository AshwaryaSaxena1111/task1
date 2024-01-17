function changeColor(element) {
    var color;

    switch (element.id) {
        case 'div1':
            color = '#2596be';
            break;
        case 'div2':
            color = '#145369';
            break;
        case 'div3':
            color = '#58B698';
            break;
        case 'div4':
            color = '#B497D1';
            break;
        case 'div5':
            color = '#D197C5';
            break;
        default:
            color = '#FFFFFF';
    }

    element.style.backgroundColor = color;
}

function resetColor(element) {
    element.style.backgroundColor = '#FFFFFF';
}