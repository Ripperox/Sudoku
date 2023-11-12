var soduko = require('./api.js');
var numSelected = null;
console.log(soduko)
var tileSelected = null;

var total_errors= 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function (){
    setGame();
    setBoard();
}

function setGame(){
    for(let i =1;i<=9;i++)
    {
        console.log(i)
        let number = document.createElement("div")
        number.id = i;
        number.innerText=i;
        number.addEventListener("click",selectNumber)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    
}
function setBoard()
{
    for(let i =1;i<=9;i++)
    {
        for(let j=1;j<=9;j++){
            let tile = document.createElement("div")
            tile.id = i + "-" + j;
            if(board[i-1][j-1]=='-')
                tile.innerText=" ";
            else
                tile.innerText=board[i-1][j-1]
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);            
        }
        
    }
}

function selectNumber()
{
    if(numSelected!=null)
    {
        numSelected.classList.remove("number-selected")
    }
    numSelected = this;
    numSelected.classList.add("number-selected")
}

function selectTile()
{
    if (numSelected){
        if(this.innerText != "")
            return ;
        this.innerText= numSelected.id;
        // if(numSelected.id != solution[this.id[0]][this.id[2]]){
        //     total_errors++;
        //     let err = document.createElement("div");
        //     err.id = total_errors;
        //     err.innerText=total_errors;
        //     document.getElementById("errors").removeChild;   
        //     document.getElementById("errors").appendChild(err);   
        // }
    }
}