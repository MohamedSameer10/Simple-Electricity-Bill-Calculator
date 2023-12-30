const amount = document.createElement("h1")
amount.classList.add("result")

function calculateeb()
{
    const units = Number(document.querySelector("#units").value)
    const container = document.querySelector(".container")
    const move = document.querySelector(".move")
    container.classList.add("animate")
    move.classList.add("anim")
    const firts_50_units = 50*0.75
    let result
    amount.style.fontWeight = "400"

    if( document.querySelector("input").value == ""){
        amount.innerHTML = `<span style = "color:yellow;">Please Enter The Value</span>`
        container.append(amount)
    }

    else if(units<=50){
        result = units*0.75
        amount.innerHTML = `${result} <span>RUPEES</span>`
        container.append(amount)
    }
    else if(units>50 && units<=150){
        result = (firts_50_units) + (units - 50)*1
        amount.innerHTML = `${result}  <span>RUPEES</span>`
        container.append(amount)
    }
    else if(units>150 && units<=250){
        result = (firts_50_units) + (units - 50)*1.30
        amount.innerHTML = `${result}  <span>RUPEES</span>`
        container.append(amount)
    }
    else{
        result = (firts_50_units) + (units - 50)*1.50
        amount.innerHTML = `${result}  <span>RUPEES</span>`
        container.append(amount)
    }

}