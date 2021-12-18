const removeModal = (...args) => { 
    setTimeout(() => {
        args.map(arg => container.removeChild(arg))
    },3000)   
}

const showModal = message => {
    const container = document.getElementById("container")
    let modalBG = document.createElement("div")
    modalBG.classList.add("modalBG")
    container.appendChild(modalBG)
    let modal = document.createElement("div")
    modal.classList.add("modal")
    modal.textContent = message
    container.appendChild(modal)
    removeModal(modalBG,modal)
}

export default showModal