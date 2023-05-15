(function(){
    'use strict';
    const myphotos= ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    let currentImage=0;
    const container= document.getElementById('content');
    const nextBtn= document.getElementById('next');
    const prevBtn= document.getElementById('previous');
    nextBtn.addEventListener('click', function (e){
        e.preventDefault();
        if(currentImage==4){currentImage=-1;}
        currentImage++;
        operation();
    }
    );
    prevBtn.addEventListener('click', function (e){
        e.preventDefault();
        if(currentImage==0){currentImage=5;}
            currentImage--;
            operation();
    });
    // adding a stack image and removing the first image if memory is 2
    function operation(){
        const newSlide= document.createElement('img');
            newSlide.src=`slides/${myphotos[currentImage]}`;
            newSlide.className='fadeining';
            container.appendChild(newSlide);
             //Remmoving extra pictures from the stack
            if(container.children.length>2){
            container.removeChild(container.children[0]);
    }
}
})()