let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let result = document.querySelector(".results h2")
    console.log(result)

    if (height === "" || height<0 || isNaN(height)) {
        result.textContent = `Please Give Valid Height ${height}`
    }

    else if (weight === "" || weight<0 || isNaN(weight)) {
        result.textContent = `Please Give Valid weight ${weight}`
    }

    else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi<=18.6) {
            result.innerHTML = `<span>${bmi} You are Under Weight</span>`
        }
        else if (bmi>=18.7) {
            result.innerHTML = `<span>${bmi} You are Normal</span>`
        }
        if (bmi>=24.9) {
            result.innerHTML = `<span>${bmi} You are Over Weight</span>`
        }
    }

})