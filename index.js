function validate() {
    let fristNameInput = document.getElementById('frist-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let cityInput = document.getElementById('city').value
    let stateInput = document.getElementById('state').value
    let pinInput = document.getElementById('pin').value
    let tnCInput = document.getElementById('tnC').checked

    let error = false

    if (fristNameInput.length >= 1) {
        document.getElementById('frist-name-valid').style.display = 'block'
        document.getElementById('frist-name-invalid').style.display = 'none'
    } else {
        document.getElementById('frist-name-invalid').style.display = 'block'
        document.getElementById('frist-name-valid').style.display = 'none'
        error = true
    }

    //console.log(fristNameInput, lastNameInput, emailInput, cityInput, stateInput, pinInput, tnCInput)
    if (lastNameInput.length >= 1) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    } else {
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
        error = true
    }

    if (
        emailInput &&
        emailInput.includes("@") &&
        emailInput.includes(".") &&
        emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
        emailInput.indexOf('@') !== 0
    ) {
        document.getElementById('email-valid').style.display = 'block'
        document.getElementById('email-invalid').style.display = 'none'
    }
    else {
        document.getElementById('email-invalid').style.display = 'block'
        document.getElementById('email-valid').style.display = 'none'
        error = true
    }

    if (cityInput && cityInput.length >= 3) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else {
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
        error = true
    }



    if (pinInput && pinInput.length === 6 && parseInt(pinInput)) {
        document.getElementById('pin-valid').style.display = 'block'
        document.getElementById('pin-invalid').style.display = 'none'
    }
    else {
        document.getElementById('pin-invalid').style.display = 'block'
        document.getElementById('pin-valid').style.display = 'none'
        error = true
    }

    if (stateInput.value !== 'None') {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }
    else {
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
        error = true
    }



    if (!tnCInput) {
        document.getElementById('tnC-invalid').style.display = 'block'
    }
    else {
        document.getElementById('tnC-invalid').style.display = 'none'
        error = true
    }

    if (error) {
        alert('Your details have been saved successfully')
        document.getElementById('frist-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('city').value = ''
        document.getElementById('state').value = 'None'
        document.getElementById('pin').value = ''
        document.getElementById('tnC').checked = false

        document.getElementById('frist-name-invalid').style.display = 'none'
        document.getElementById('last-name-invalid').style.display = 'none'
        document.getElementById('email-invalid').style.display = 'none'
        document.getElementById('city-invalid').style.display = 'none'
        document.getElementById('pin-invalid').style.display = 'none'
        document.getElementById('state-invalid').style.display = 'none'

    }

}

