
// get the references to active HTML elements 

const btns = document.querySelectorAll('.controls button'); // event target object

const newContent = document.querySelector('.new-content');

// create event handler

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'c1'){
       
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/solar-panels.png" alt="Rooftop Solar Panels"/>
                                <figcaption>Rooftop Solar Panels</figcaption>
                             </figure>
                             <p>One of the most popular and effective ways to produce renewable energy is with photovoltaic (PV) panels. The panels are typically placed on the roof or in the yard where they capture the sun’s energy and convert it into electricity. 
                             </p>`;       
        
       
    } else if(clickedButton.value === 'c2'){
        
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/tubular-skylight.jpg" alt="Tubular Skylights"/>
                                <figcaption>Tubular Skylights</figcaption>
                             </figure>
                             <p>Although tubular skylights don’t actually create electricity, they do produce free natural light for your home, which can slash your electric-light bill. A tubular skylight, which is often called a Sun Tunnel, consists of a clear roof-mounted dome, round metal tube, and ceiling diffuser. The metal tube runs between the dome on the roof and the diffuser mounted to the ceiling. The inside surface of the tube has a highly reflective, mirror-like coating that reflects over 90% of sunlight and delivers it through the diffuser, which produces a soft, radiant glow of natural light.
                            </p>`; 
    } else {
        
         newContent.innerHTML=`<figure class="newContent">
                                <img src="img/wind-turbine.png" alt="Wind Turbines"/>
                                <figcaption>Wind Turbines</figcaption>
                             </figure>
                             <p>Wind turbines are most commonly found on large tracts of open land, called wind farms, or floating offshore. But, if you have enough real estate you can install a small wind turbine on your property to power your home. Wind power is more stable than solar, and a properly sized wind turbine can easily generate most or all of your electricity needs. And in some areas, wind might be a better renewable energy source than solar panels.
                            </p>`; 
    }
    
    
}

 /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */  

for(let btn of btns){
  btn.addEventListener('click', addContent);
}