// <------------------------------------- Global variable ------------------------------------>

var counter = 1; //Indixing counter
var maxValue = 10; //Maximum amount of rows

// <------------------------------------- keybord Event (+ and -) ------------------------------------>

document.querySelector("body").addEventListener("keydown" , function(event){
    console.log(event);
    if(event.key == '+'){
        addInput();
    }
    else if(event.key == '-'){
        var div = document.getElementsByClassName("minus");
        var ele = div[div.length - 1];
        deleteInput(ele);
    }
});


// <------------------------------------- Adding input type  function ------------------------------------->

function addInput(){

    var mainFrame = document.getElementById("mainframe");
    var inputType = `<div class='col'><span>${counter}</span><input type = "text"><button class="minus" onclick="deleteInput(this)">-</button><hr class="hrspacing"></div>`
    
    var ele = document.createElement('div');
    ele.classList.add('sub_main');
    ele.innerHTML = inputType;
    
    if (inputCount() < maxValue){
        mainFrame.appendChild(ele);
        if (inputCount() == maxValue){
            document.getElementById("plus").disabled = true;
        }
        counter++;
    }
}

// <------------------------------------- Count number of rows ------------------------------------->

function inputCount(){
    var inputLength = document.getElementsByClassName("minus");
    var length = inputLength.length;
    return length;
}

// <------------------------------------- Remove Row Function ------------------------------------->

function deleteInput(ele){
    ele.parentElement.parentElement.remove();
    
    if (inputCount() < maxValue ){
        document.getElementById("plus").disabled = false;
    }
    counter--;
    updateIndex(ele);
}

// <------------------------------------- Update indexing ------------------------------------->

function updateIndex(ele){
    var divs = document.getElementsByClassName('col');

    for (let index = 1; index <= divs.length; index++) {
        divs[index-1].firstChild.innerHTML = index;
    }
}

// <------------------------------------- Refresh Document ------------------------------------->

function inputRefresh(){
    var refresh = document.querySelectorAll(".sub_main");
    document.getElementById("text").value = "";

    refresh.forEach(refresh => {
        refresh.remove();
      });
      counter = 1;
      if (inputCount() < maxValue ){
        document.getElementById("plus").disabled = false;
    }
}

// <------------------------------------- Refresh Page ------------------------------------->

function pageRefresh(){
    window.location.reload();
}

// <------------------------------------- Refresh Input Field ------------------------------------->

function refreshInputField(){
    var inputField =  document.querySelectorAll('input');

    console.log(inputField)
    inputField.forEach(element => {
        element.value = "";
      });
}