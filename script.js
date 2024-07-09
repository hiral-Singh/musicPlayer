console.log("Let's write javascript")
async function getSongs(){
let a = await fetch("http://127.0.0.1:3000/songs/")
let response = await a.text();
// console.log(response)
let div = document.createElement("div");
div.innerHTML=response;
let as= div.getElementsByTagName("a");
// console.log(as)
let songs= [];
for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href)
    }
}
return songs
}
async function main(){
    let songs= await getSongs()
    console.log(songs)
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + song;
        
    }
//  play the first song   
var audio = new Audio(songs[0]);
audio.play();
audio.addEventListener("loadeddata", () => {
    let duration = audio.duration;
    console.log(duration)
    // The duration variable now holds the duration (in seconds) of the audio clip
  });
}
main()