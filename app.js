document.getElementById("skill-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "block"
})

document.getElementById("education-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "block"
    document.getElementById("experience-page").style.display = "none"
    document.getElementById("skill-page").style.display = "none"
})
document.getElementById("experience-tab").addEventListener("click", e => {
    document.getElementById("landing-page").style.display = "none"
    document.getElementById("education-page").style.display = "none"
    document.getElementById("experience-page").style.display = "block"
    document.getElementById("skill-page").style.display = "none"
})
