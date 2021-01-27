
// Navigation : hide and show section
document.getElementById("skill-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "block"
    document.getElementById("project-page").style.display = "none"
    document.getElementById("certification-page").style.display = "none"
})

document.getElementById("education-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "block"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "none"
    document.getElementById("project-page").style.display = "none"
    document.getElementById("certification-page").style.display = "none"
})
document.getElementById("experience-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "block"
    document.getElementById("skill-page").style.display = "none"
    document.getElementById("project-page").style.display = "none"
    document.getElementById("certification-page").style.display = "none"
})
document.getElementById("project-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "none"
    document.getElementById("project-page").style.display = "block"
    document.getElementById("certification-page").style.display = "none"
})
document.getElementById("certification-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "none"
    document.getElementById("project-page").style.display = "none"
    document.getElementById("certification-page").style.display = "block"
})


// Copy to Clipboard
function copy_to_clipboard(value) {
    document.querySelector(".clipboard-msg").style["visibility"] = "visible"
    document.querySelector(".clipboard-msg").innerHTML = "Copied !"
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setTimeout(function(){
        document.querySelector(".clipboard-msg").style["visibility"] = "hidden"
    }, 1000);

  }
  
