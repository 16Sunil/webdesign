console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('main.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let song =[
    {songName:"meri jaan", filepath:"song/main.mp3",coverPath:"cover1.jpg"},

    {songName:"meri jaan", filepath:"song/main.mp3",coverPath:"cover1.jpg"},
 {songName:"meri jaan", filepath:"song/main.mp3",coverPath:"cover1.jpg"},
   {songName:"meri jaan", filepath:"song/main.mp3.mp3",coverPath:"cover1.jpg"},
{songName:"meri jaan", filepath:"song/main.mp3.mp3",coverPath:"cover1.jpg"}
]

//audioElement.play();
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle'); 
        masterplay.classList.add('fa-pause-circle'); 
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle'); 
        masterplay.classList.add('fa-play-circle'); 
        gif.style.opacity=0;

    }
})
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress =parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress);
    myprogressbar.value=progress;

})