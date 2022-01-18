function gerarQRCode() {
    var inputLink = document.querySelector('textarea').value
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl='
    var conteudoQRCode = GoogleChartAPI + encodeURIComponent(inputLink)
    document.querySelector('#qrcode-image').src = conteudoQRCode
    document.querySelector('.qrcode-description').textContent = `QRCode referente ao link: ${inputLink}`
}