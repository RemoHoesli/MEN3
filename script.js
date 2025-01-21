document.addEventListener('DOMContentLoaded', function () {

    var cycle = 0;
    const introtext = document.getElementById('introtext');

    document.addEventListener("keydown", function() {

        if (event.key === 'v') {

            if(cycle == 8) {
                cycle = 1;
            }
            else {
                cycle += 1;
            }
            console.log(cycle);
            introtext.style.opacity = "0%";
            
            if(cycle == 1) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Fall_C.png';
                bild.alt = 'Bild Fall';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Jura-Zeit_Illustration.mp4';
            }
            if(cycle == 2) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Winter_C.png';
                bild.alt = 'Bild Winter';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Kreide-Zeit_Illustration1.mp4'
            }
            if(cycle == 3) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Spring_C.png';
                bild.alt = 'Bild Spring';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Kreide-Zeit_Illustration2.mp4';
            }
            if(cycle == 4) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Summer_C.png';
                bild.alt = 'Bild Summer';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Paläogen_Illustration1.mp4';
            }
            if(cycle == 5) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Summer_C.png';
                bild.alt = 'Bild Summer';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Paläogen_Illustration2.mp4';
            }
            if(cycle == 6) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Summer_C.png';
                bild.alt = 'Bild Summer';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Neogen_Illustration.mp4';
            }
            if(cycle == 7) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Summer_C.png';
                bild.alt = 'Bild Summer';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Quartär_Illustration1.mp4';
            }
            if(cycle == 8) {
                /*const bild = document.getElementById('bild');
                bild.src = 'ressources/Summer_C.png';
                bild.alt = 'Bild Summer';*/
                const vid = document.getElementById('vid');
                vid.src = 'ressources/Quartär_Illustration2.mp4';
            }

            
        }

        
    });

});