let img =[]
let time = 3000
let i = 0

img[0] = '../img/capa-01.jpg';
img[1] = '../img/capa-02.jpg';
img[2] = '../img/capa-03.jpg';
img[3] = '../img/Novidades-01.jpg';
img[4] = '../img/barbara-mello.jpg';
img[5] = '../img/barbara-mello.png';
img[6] = '../img/novidades-02.jpg';
img[7] = '../img/novidades-03.jpg';
img[8] = '../img/vestido001.jpeg';
img[9] = '../img/vestido067.jpeg';


function changeimages() {
    document.slide.src = img[i]
    if (i < img.length - 1){
        i++
    } else{
        i = 0
    }
    setTimeout("changeimages()",time)
    }
    window.onload = changeimages;

   


    

    
