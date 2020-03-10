 var up = document.getElementById('GFG_UP');  
        var down = document.getElementById('GFG_DOWN');  
            
        up.innerHTML = "This button will generate a random title from Netflix"; 
                          
          
        function random(mn, mx) {  
            return Math.random() * (mx - mn) + mn;  
        }  
          
        function GFG_Fun() { 
            down.innerHTML = arr[Math.floor(random(1, 59))-1]; 
        } 