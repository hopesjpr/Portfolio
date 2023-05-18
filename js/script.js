(() => {
    "use strict";

    //Inicializar
    let body;
    let gallery;
    let functionEvent;
    let titulo;
    let enabled = false;

    document.addEventListener("DOMContentLoaded", Inicializar);
    function Inicializar() {
        body = document.querySelector('body');
        titulo = document.getElementById("titulo");
        Set2DAnimation();
        document.getElementById('animation').addEventListener("click", Set2DAnimation);
        document.getElementById('concept').addEventListener("click", SetConceptArt);
        document.getElementById('aboutme').addEventListener("click", SetAboutMe);
    }

    function GenerateVideoPlayer(elementSelected) {
        if(!enabled) {
            enabled = true;
            DisableScroll();
            let videoPlayer = document.createElement('div');
            videoPlayer.classList.add('bigVideo');
            let gallerySource = elementSelected.querySelector('.gallerySource');
            let split = gallerySource.src.split(`/`);
            split = split[split.length - 1].split(`_`);
            split = split.join(` `).split(`.`);
            let datos = gallerySource.nodeName == 'VIDEO' ? `<video class="videoPlayerForward" src="${gallerySource.src}" controls loop>Your browser does not support the video tag.</video>` 
            : `<img class="videoPlayerForward" src="${gallerySource.src}" alt="Image Element">`;
            datos += `<p style="color: white;">${split[0]}</p>
            <img src="./img/X.png" id="closeImage" alt="Click para cerrar"></img>`;
            videoPlayer.innerHTML = datos;
            body.append(videoPlayer);
            document.querySelector('#closeImage').addEventListener("click", DisableVideoPlayer);
            
        }
    }

    function DisableVideoPlayer() {
        document.querySelector(".videoPlayerForward").classList.add("videoPlayerBackward");
        let bigVideo = document.querySelector(".bigVideo");
        bigVideo.classList.add("smallVideo");
        bigVideo.addEventListener("animationend", () => { bigVideo.remove(); EnableScroll(); enabled = false;});
    }

    function DisableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
    
    function EnableScroll() {
        window.onscroll = function() {};
    }

    function Set2DAnimation() {
        titulo.textContent = "2D Animation";
        document.querySelector("#container").remove();
        let datos = `<div id="container">
        <div id="videoReel">
        <video src="./video/Reel_2023_Provisional.mp4" width="70%" controls>
            Your browser does not support the video tag.
        </video>
        <p>Animation Demo Reel 2023</p>
        </div>
        <section class="gallery">
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Animation_for_the_Role_Club.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Profile_Gif.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="galleryItem">
                <video class="gallerySource" src="./video/Reel_2023_Provisional.mp4">
                    Your browser does not support the video tag.
            </video>
            </div>
        </section>
        </div>`;
        body.insertAdjacentHTML('beforeend', datos);
        gallery = document.querySelector('.gallery');
        gallery = gallery.querySelectorAll(':scope > .galleryItem');
        gallery.forEach(element => {
            functionEvent = () => GenerateVideoPlayer(element);
            element.addEventListener("click", functionEvent);
        });
    }

    function SetConceptArt() {
        titulo.textContent = "Concept Art";
        document.querySelector("#container").remove();
        let datos = `<div id="container">
        <section class="gallery">
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Stand_Alone__Scene _Concept_art.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Characters_for_a_Cozy_Gif_Design_Sheet.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Monsters_designs.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Mansion_Enviroment_Concept_Art.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Scene_Concept_Art_for_a_personal_project.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Character_Concept_Art.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/Characters_Design_Sheet.jpg" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/X.png" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/X.png" alt="Image Element">
            </div>
            <div class="galleryItem">
                <img class="gallerySource" src="./img/X.png" alt="Image Element">
            </div>
            </div>
        </section>
        </div>`;
        body.insertAdjacentHTML('beforeend', datos);
        gallery = document.querySelector('.gallery');
        gallery = gallery.querySelectorAll(':scope > .galleryItem');
        gallery.forEach(element => {
            functionEvent = () => GenerateVideoPlayer(element);
            element.addEventListener("click", functionEvent);
        });
    }

    function SetAboutMe() {
        titulo.textContent = "About Me & Contact";
        document.querySelector("#container").remove();
        let datos = `<div id="container">
        <div id="description">
            <img class="descriptionChild" src="./img/Gif_de_perfil.gif" alt="AboutMe Image"/>
            <div class="descriptionChild">
                <p>Hi, my name is Josep Paya Rubio and this is my pet dragon Gus.</p><br/>
                <p>We are 21 years old, and we live in Spain.</p><br/>
                <p>We work as 2D Animators. As a team I do all the work and Gus gets a nap or eat a postman as snack.
                    Sometimes he gives good ideas.</p><br/>
                <p>Student of Fine Arts at the UPV.</p>
            </div>
        </div>
        <div class="aboutmeElement">
            <h2>Contact</h2>
            <div>
                <h3>Phone Number:</h3>
                <p>(+34) 693 80 30 71</p>
                <h3>Mail:</h3>
                <p>jospayrub3@gmail.com</p>
            </div>
        </div>
        <div class="aboutmeElement">
            <h2>Experience</h2>
            <div>
                <h3>Working experience:</h3>
                <p>Cleanup in student's short films from the Animation Master of the UPV. &laquo;Chimborazo&raquo; and &laquo;Encara dura&raquo;</p>
                <h3>Skills:</h3>
                <p>Advanced Skills in Toon Boom Harmony, Photoshop and Adobe Premiere</p>
                <p>Basic Skills in Clip Studio and After Effects</p>
            </div>
        </div>
        <div class="aboutmeElement">
            <a href="https://www.instagram.com/hopes.jpr/?igshid=ZDdkNTZiNTM%3D" class="fab fa-instagram"></a>
            <a href="https://vimeo.com/showcase/10143814" class="fab fa-vimeo"></a>
            <a href="https://jospayrub2.artstation.com" class="fab fa-artstation"></a>
            <a href="https://www.linkedin.com/in/josep-paya-rubio-5a352126b/" class="fab fa-linkedin"></a>
        </div>
    </div>`;
        body.insertAdjacentHTML('beforeend', datos);
    }
})();