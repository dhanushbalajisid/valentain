document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("loginUser").value;
        const password = document.getElementById("loginPass").value;

        
        const validUsername = "pavikutty";
        const validPassword = "pavidhanush_2523";

        if (username === validUsername && password === validPassword) {
            alert("Login successful! Welcome, " + username+"ma");
            window.location.href = "index.html"; 
        } else {
            alert("Invalid username or password. Try again!");
        }
    });
}
            let isDragging = false;
            let activeImage = null;
            let offsetX, offsetY;
    
            document.querySelectorAll(".imgs").forEach(img => {
                img.addEventListener("mousedown", (e) => {
                    isDragging = true;
                    activeImage = img;
                    offsetX = e.clientX - img.getBoundingClientRect().left;
                    offsetY = e.clientY - img.getBoundingClientRect().top;
                    img.style.cursor = "grabbing";
                    
                });
            });
    
            document.addEventListener("mousemove", (e) => {
                if (!isDragging || !activeImage) return;
                activeImage.style.left = `${e.clientX - offsetX}px`;
                activeImage.style.top = `${e.clientY - offsetY}px`;
            });
    
            document.addEventListener("mouseup", () => {
                if (activeImage) activeImage.style.cursor = "grab";
                isDragging = false;
                activeImage = null;
            });
    
            
            document.querySelectorAll(".imgs").forEach(img => {
                img.ondragstart = () => false;
            });
            let video = document.getElementById("myVideo");

            video.addEventListener("mouseenter", () => {
                video.play();
            });

            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0; 
            });
        });

            function showBlackScreen() {
                let blackScreen = document.getElementById("blackScreen");
                blackScreen.style.visibility = "visible";
                blackScreen.style.opacity = "1";
            }
            function showWhiteScreen(){
                let blackScreen = document.getElementById("blackScreen");
                blackScreen.style.opacity = "0";
                setTimeout(() => {
                    blackScreen.style.visibility = "hidden";
                }, 500);
            }

