const board = (() => {
    const el = document.querySelector('#board')
    let numColumns = 3;
    const square = (x, y) => {
        const el = 'test';
        setElement = function(){
            this.el = document.querySelector(`#square-${x}-${y}`)
        }
        return {x, y, el, setElement}
    };
    const squares = []
    const init = () => {
        squares.length = 0;
        el.innerHTML = '';
        for (let i = 0; i < numColumns; i++){
            for (let j = 0; j < numColumns; j++){
                squares.push(square(i, j));
            }
        }
        squares.forEach(s => {
            el.innerHTML += `<div class="grid-item" id="square-${s.x}-${s.y}"><span></span></div>`;
            s.setElement();
        });
    }
       
     
    return {init, squares}
})();

player = function(name, marker){
    this.name = name;
    this.marker = marker;
    this.active = false;
}
