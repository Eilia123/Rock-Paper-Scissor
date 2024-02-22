try{
let person1;
let person2;

let showuser1 = document.getElementById("img_main1")
let showuser2 = document.getElementById("img_main2")


let araay = ["rock" , "paper" , "scissor"]
let image_araay = ["./img/rock.png" , "./img/paper.png" , "./img/scissor.png"]

function disable_img(){
    showuser1.style.display = "none"
    showuser2.style.display = "none"
}

function enable(){
    showuser1.style.display = "inline"
    showuser2.style.display = "inline"
}

function random(){
    let random_string = Math.floor(Math.random() * araay.length);
    person2 = araay[random_string]
   
    showuser2.setAttribute("src" , image_araay[random_string])
}


function rock(){
    enable()
    person1 = araay[0]
    showuser1.setAttribute("src" , image_araay[0])
    random()

}

function paper(){
    enable()

    person1 = araay[1]
    showuser1.setAttribute("src" , image_araay[1])
    random()
}

function scissor(){
    enable()

    person1 = araay[2]
    showuser1.setAttribute("src" , image_araay[2])
    random()
}

function check(){
    if(person1 == person2){
        setTimeout(time , 500)
        function time(){
            alert("eqully")
            disable_img()
        }
    }
    else if(person1 == "rock" && person2 == "paper"){
        setTimeout(time , 500)
        function time(){
            alert("sistem is won")
            disable_img()
        }
    }
    else if(person1 == "rock" && person2 == "scissor"){
        setTimeout(time , 500)
        function time(){
            alert("You is won")
            disable_img()
        }
    }
    else if(person1 == "paper" && person2 == "rock"){
        setTimeout(time , 500)
        function time(){
            alert("You is won")
            disable_img()
        }
    }
    else if(person1 == "paper" && person2 == "scissor"){
        setTimeout(time , 500)
        function time(){
            alert("sistem is won")
            disable_img()
        }
    }
    else if(person1 == "scissor" && person2 == "rock"){
        setTimeout(time , 500)
        function time(){
            alert("sistem is won")
            disable_img()
        }
    }
    else if(person1 == "scissor" && person2 == "paper"){
        setTimeout(time , 500)
        function time(){
            alert("You is won")
            disable_img()
        }
    }
}
















}
catch{
    console.log(Error)
}

