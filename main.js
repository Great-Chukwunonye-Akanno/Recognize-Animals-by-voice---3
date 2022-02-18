function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nFfNUDw19/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error) {
        console.error(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label") = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence") = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";
        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('cow');
        

        if (results[0].label == "Mooing"){
            img.src = 'download (14).jpg';
            img1.src = 'download (13).jpg';
            img2.src = 'giphy.gif';
        }else if (results[0].label == "Barking"){
            img.src = 'ce8b1e76965389.5c7945b0cffef.gif';
            img1.src = 'download (13).jpg';
            img2.src = '152-1528855_cow-png-cow-clipart-cartoon-cow-youtube-thumbnail';
        }else if (results[0].label == "Meowing"){
            img.src = 'download (14).jpg';
            img1.src = 'cute-kitty-best-kitty.gif';
            img2.src = '152-1528855_cow-png-cow-clipart-cartoon-cow-youtube-thumbnail';
        }
    }
    
}