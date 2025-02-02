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

const asciiContainer = document.querySelector('.ascii-container');
const lines = asciiArt.split('\n');

lines.forEach(line => {
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('ascii-line'); // Add a class for styling

    for (let i = 0; i < line.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.textContent = line[i];

        // Apply gradient styling (adjust shades as needed)
        const shade = Math.floor((i / line.length) * 100); // Calculate shade percentage
        charSpan.style.color = `hsl(348, 100%, ${50 + shade * 0.2}%)`; // Rose-red with gradient

        lineDiv.appendChild(charSpan);
    }

    asciiContainer.appendChild(lineDiv);
});


// Spotify Embed
const playlistId = '0R4sEgLGHVo2wAgV8htLj6'; // Your playlist ID

const iframe = document.createElement('iframe');
iframe.title = "Spotify Embed: Recommendation Playlist";
iframe.src = `https://open.spotify.com/embed/playlist/${playlistId}`;
iframe.width = "350"; // Increased width for rectangle
iframe.height = "180"; // Reduced height for rectangle
iframe.style.minHeight = '150px'; // Match minHeight to height
iframe.frameBorder = "0";
iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
iframe.loading = "lazy";

const spotifyCard = document.querySelector('.spotify-card');
spotifyCard.innerHTML = ''; // Clear any existing content
spotifyCard.appendChild(iframe);

// Optional: Adjust card styling if needed (in your CSS)
spotifyCard.style.display = 'block'; // Make sure the card is visible
spotifyCard.style.justifyContent = 'center'; // Center the iframe horizontally
spotifyCard.style.alignItems = 'center'; // Center the iframe vertically
spotifyCard.style.width = '350px';
spotifyCard.style.height = '180px';