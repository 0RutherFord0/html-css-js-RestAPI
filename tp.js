window.onload = function(){

    var adityatawade = document.getElementById('database');
    adityatawade.onclick = async (e) => {
        let response = await fetch('https://iconnectsolutionspvtltd.freshservice.com/api/v2/tickets', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('06V67kkU0TCe13xxkK:x')
                },
                
        })
        
            let text = await response.text(); // read response body as text
            data = JSON.parse(text);
            document.querySelector("#encoded").innerHTML = text;
        };
    
    
        
        formElem.onsubmit = async (e) => {
          e.preventDefault();
          var form = document.querySelector("#formElem");

            data = {
              subject : form.querySelector('input[name="subject"]').value,
              description : form.querySelector('input[name="description"]').value,
              email : form.querySelector('input[name="email"]').value,
              status : Number(form.querySelector('input[name="fresh_status"]').value),
              priority: Number(form.querySelector('input[name="priority"]').value)
           }
    
            let response = await fetch('https://iconnectsolutionspvtltd.freshservice.com/api/v2/tickets', {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Basic ' + btoa('06V67kkU0TCe13xxkK:x')
                    },
                    body: JSON.stringify(data),
                    
            })
            form.reset();
        
            let text = await response.text(); // read response body as text
            document.querySelector("#decoded").innerHTML = text;
        };
    
    }