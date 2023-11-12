url = 'https://sudoku-api.vercel.app/api/dosuku'
fetch(url)
    .then(response => { 
        if (response.ok) { 
        return response.json();
        } else { 
        throw new Error('API request failed'); 
        } 
    }) 
    .then(data => { 
        info =data;
        var board = info.newboard.grids[0].value;
        var solution = info.newboard.grids[0].solution;
        module.exports={board,solution}
    }) 
    .catch(error => { 
        
        console.error(error); 
    });

    
