// ASCII Art Insertion
const asciiArt = `                      .=    ::    .:              
          -+=::  .=  .:---::.  :=*##:             
         :#######+-=**********######:             
         :############****##########.             
         :##########################              
         .#########################+              
          #########################.              
          =#######################+               
           #######################.               
           -#####################=                
            +###################*                 
             +#################*.                 
              -*####%%%%%#####+.                  
                :+%@@@@@@%%%*:                    
                   =*@@@%*:                       
                     *@+                          
                     *@*                          
                     #@+                       =*%
                     %@=                     :++%%
                     %@=                   .=++%@=
                     %@=                  :+++%@% 
                     %@=                 =++*%@@: 
::.                  %@=               .+++*@@@*  
%#++:                %@=              :+++*@@@%   
:@%*++=.             #@=             -+++#@@@%.   
 +@@*+++=.           *@*            =+++%@@@@.    
  #@@#++++=          =@#           +++*%@@@@.     
   %@@@*++++:        -@%         .+++*@@@@@:      
   .@@@@#++++=       :@@        .+++*@@@@@:       
    :@@@@%*++++:      @@.      .+++*@@@@%.        
     :@@@@@#++++-     @@-      +++*@@@@#.         
      :@@@@@@*+++=    #@=     +++#@@@@*           
       .%@@@@@%*+++.  *@+    =++%@@@@=            
         #@@@@@@%*++: =@#   -+*%@@@%:             
          -@@@@@@@%*+::@@  :+*@@@@#               
            *@@@@@@@@#=@@  +*@@@@=                
             :#@@@@@@@@@@-=#@@@#.                 
               .+@@@@@@@@%%@@@=                   
                  =%@@@@@@@@#.                    
                    .+%@@@@#                      
`;

const renderASCII = () => {
  const container = document.querySelector('.ascii-container');
  container.innerHTML = '';
  
  const lines = asciiArt.split('\n');
  lines.forEach(line => {
      const lineDiv = document.createElement('div');
      lineDiv.textContent = line;
      container.appendChild(lineDiv);
  });
};

const initSpotify = () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://open.spotify.com/embed/playlist/0R4sEgLGHVo2wAgV8htLj6';
  iframe.width = '341';
  iframe.height = '150';
  iframe.frameBorder = '0';
  iframe.allow = 'encrypted-media';
  
  document.querySelector('.spotify-card').appendChild(iframe);
};

window.addEventListener('DOMContentLoaded', () => {
  renderASCII();
  initSpotify();
});

function updateSpotifyCard() {
  const spotifyCard = document.querySelector('.spotify-card');
  spotifyCard.innerHTML = `
      <div class="last-played">last played</div>
      <div class="track-info">
          <img src="track-image.jpg" alt="Track" class="track-image">
          <div class="track-details">
              <div class="track-name">Great Fairy's Fountain</div>
              <div class="track-meta">emptiness</div>
              <div class="track-meta">love</div>
          </div>
          <div class="play-button">▶</div>
      </div>
  `;
}
