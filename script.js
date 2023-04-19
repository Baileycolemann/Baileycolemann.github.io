let expandP=document.getElementById("expand");
expandP.classList.add("hidden");

function expandParagraph(){
      let expandP=document.getElementById("expand");
      let link=document.getElementById("link");
      
      if(expandP.classList.contains("hidden")){
            expandP.classList.remove("hidden");
            expandP.classList.add("visible");
            link.innerHTML="Show Less...";
      }
      else if(expandP.classList.contains("visible")){
            expandP.classList.remove("visible");
            expandP.classList.add("hidden");
            link.innerHTML="Show More...";
      }
}

let futureP=document.getElementById("expand-p");
futureP.classList.add("hidden");

function expandFuture(){
      let futureP=document.getElementById("expand-p");
      let linkTwo=document.getElementById("link-two");
      
      if(futureP.classList.contains("hidden")){
            futureP.classList.remove("hidden");
            futureP.classList.add("visible");
            linkTwo.innerHTML="Show Less...";
      }
      else if(futureP.classList.contains("visible")){
            futureP.classList.remove("visible");
            futureP.classList.add("hidden");
            linkTwo.innerHTML="Show More...";
      }
}

function displayResults(){
      let resultDiv=document.getElementById("result");
      resultDiv.classList.remove("hidden");
      
      let firstP=document.getElementById("first");
      let secondP=document.getElementById("second");
      let thirdP=document.getElementById("third");
      let fourthP=document.getElementById("fourth");
      let scoreP=document.getElementById("score");
      
      let homeTown=document.getElementById("home-town").value;
      let myMajor=document.getElementById("major").value;
      let musicDislike=document.getElementById("music").value;
      let gradPlans=document.getElementById("grad-plans").value;
      
      let total=0;
      let firstAnswer="Incorrect";
      let secondAnswer="Incorrect";
      let thirdAnswer="Incorrect";
      let fourthAnswer="Incorrect";
      
      
      if(homeTown.toLowerCase()=="greenville, sc"){
            firstAnswer="Correct";
            total++;
      }
      if(myMajor.toLowerCase()=="biology"){
            secondAnswer="Correct";
            total++;
      }
      if(musicDislike.toLowerCase()=="country"){
            thirdAnswer="Correct";
            total++;
      }
      if(gradPlans.toLowerCase()=="move back to my hometown"){
            fourthAnswer="Correct";
            total++;
      }
      
      firstP.innerHTML="Question 1: "+firstAnswer;
      secondP.innerHTML="Question 2: "+secondAnswer;
      thirdP.innerHTML="Question 3: "+thirdAnswer;
      fourthP.innerHTML="Question 4: "+fourthAnswer;
      scoreP.innerHTML="Score: "+total+"/4";
}

setInterval(changeSlide, 1000);

function changeSlide(){
      let skyImg=document.getElementById("sky-image");
      let cityImg=document.getElementById("city-image");
      let riverImg=document.getElementById("river-image");
      let rocksImg=document.getElementById("rocks-image");
      
      if(skyImg.classList.contains("visible")){
            skyImg.classList.remove("visible");
            skyImg.classList.add("hidden");
            cityImg.classList.remove("hidden");
            cityImg.classList.add("visible");
      }
      else if(cityImg.classList.contains("visible")){
            cityImg.classList.remove("visible");
            cityImg.classList.add("hidden");
            riverImg.classList.remove("hidden");
            riverImg.classList.add("visible");
      }
      else if(riverImg.classList.contains("visible")){
            riverImg.classList.remove("visible");
            riverImg.classList.add("hidden");
            rocksImg.classList.remove("hidden");
            rocksImg.classList.add("visible");
      }
      else if(rocksImg.classList.contains("visible")){
            rocksImg.classList.remove("visible");
            rocksImg.classList.add("hidden");
            skyImg.classList.remove("hidden");
            skyImg.classList.add("visible");
      }
}