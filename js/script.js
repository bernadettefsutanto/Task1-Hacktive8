const btnSubmit = document.getElementById('btn-submit')

let inputNama = document.getElementById('input-nama')
let inputUmur = document.getElementById('input-umur')
let inputPengalaman = document.getElementById('input-pengalaman')
let inputEmail = document.getElementById('input-email')
let inputLokasi = document.getElementById('input-lokasi')
let inputRole = document.getElementById('input-role')
let inputAvailability = document.getElementById('input-availability')

let textNama = document.getElementById('text-nama')
let textUmur = document.getElementById('text-umur')
let textEmail = document.getElementById('text-email')
let textLokasi = document.getElementById('text-lokasi')
let textRole = document.getElementById('text-role')
let textPengalaman = document.getElementById('text-pengalaman')
let textAvailability = document.getElementById('text-availability')

btnSubmit.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(inputNama.value, 'ini input nama');
    console.log(inputPengalaman.value, 'ini input pengalaman');
    console.log(inputEmail.value, 'ini input email');
    console.log(inputUmur.value, 'ini input umur');
    console.log(inputLokasi.value, 'ini input lokasi');
    console.log(inputRole.value, 'ini input role');
    console.log(inputAvailability.value, 'ini input availability')

    textNama.innerText = inputNama.value
    textPengalaman.innerText = inputPengalaman.value
    textEmail.innerText = inputEmail.value
    textUmur.innterText = inputUmur.value
    textLokasi.innerText = inputLokasi.value
    textRole.innerText = inputRole.value
    textAvailability.innerText = inputAvailability.value
})

