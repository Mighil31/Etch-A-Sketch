// alert("COnnected");

var numBlocks = 16;

createBlocks();

function createBlocks(totBlocks = 256)
{
    for(var i = 0;i<totBlocks ;i++)
    {
        const div = document.createElement('div');
        const container = document.getElementById('blocks');
        div.classList.add('child');
        container.append(div);
        
    }
    // reset();
    addHover(1);
}


function addHover(color)
{
    const blocks = document.getElementsByClassName("child");
    for (i = 0; i < blocks.length; i++) 
    {
        if(color === 1)
        {
                
            blocks[i].addEventListener("mouseover", function( event ) 
            {
                console.log(event.target.style.backgroundColor);
                event.target.style.backgroundColor = "#000";
            })
        }
        else if(color === 0)
        {
            blocks[i].addEventListener("mouseover", function( event ) 
            {
                event.target.style.backgroundColor = generateRandomColor();
            })
        }
        else
        {
            blocks[i].addEventListener("mouseover", function( event ) 
            {
                if (event.target.style.backgroundColor != 'rgb(0, 0, 0)') {
                    event.style.opacity = 0.0;
                }
                event.target.style.opacity = Number(event.target.style.opacity) + 0.1;
                event.target.style.backgroundColor = "rgb(0, 0, 0)";
            })
        }   
        
    }    
}
 

function reset()
{
    const blocks = document.getElementsByClassName("child");
    for (i = 0; i < blocks.length; i++) 
    {
        blocks[i].style.backgroundColor = "#fff";

    } 
 
}
document.getElementById('reset').addEventListener('click', reset);

document.getElementById('new-grid').addEventListener('click', (event) =>{
    numBlocks = prompt("Enter number of blocks:");
    blockDim(numBlocks);
})


document.getElementById('colors').addEventListener('click', function(event){
    addHover(0);
})

document.getElementById('black').addEventListener('click', function(event){
    addHover(1);
})

document.getElementById('shade').addEventListener('click', function(event){
    addHover(2);
})

function blockDim(numBlocks)
{

    document.querySelectorAll(".child").forEach(e => e.parentNode.removeChild(e));
    var dim = 720/numBlocks;
    totBlocks = (720*720)/(dim*dim);
    const blocks = document.getElementsByClassName("child");
    createBlocks(totBlocks);
    for (i = 0; i < totBlocks; i++) 
    {
        blocks[i].style.width = dim+"px";
        blocks[i].style.height = dim+"px";
    } 
}


function generateRandomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " ," + g + " ," + b + ")";
}




