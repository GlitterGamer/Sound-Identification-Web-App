function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/kVZhsdF-v/model.json", model_ready)
}
function model_ready(){
    classifier.classify(gotResults)

}

function gotResults(error,results){
    if (error) {
      console.log(error)  
    } else {
       console.log(results) 
       document.getElementById("result_label").innerHTML= "I Can Hear:"+results[0].label
       document.getElementById("result_confidence").innerHTML= "Accuracy:"+Math.floor(results[0].confidence*100)+"%"
       img1= document.getElementById("alien1")
       img2= document.getElementById("alien2")
       img3= document.getElementById("alien3")
       img4= document.getElementById("alien4")
       if (results[0].label== "Clap") {
        img1.src= "aliens-01.gif"
        img2.src= "aliens-02.png"
        img3.src= "aliens-03.png"
        img4.src= "aliens-04.png"
       }
       else if (results[0].label== "Bell Song") {
        img1.src= "aliens-01.png"
        img2.src= "aliens-02.gif"
        img3.src= "aliens-03.png"
        img4.src= "aliens-04.png"
       }
       else if (results[0].label== "Background Noise") {
        img1.src= "aliens-01.png"
        img2.src= "aliens-02.png"
        img3.src= "aliens-03.gif"
        img4.src= "aliens-04.png"
       }
       else if (results[0].label== "Snap") {
        img1.src= "aliens-01.png"
        img2.src= "aliens-02.png"
        img3.src= "aliens-03.png"
        img4.src= "aliens-04.gif"
       }
    }
}
