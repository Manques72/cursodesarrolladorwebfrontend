export  function setRadio(radio) {
    radio.forEach(
        item => {
            if (item.checked) {
                return item.value
            }
        }
    }
}