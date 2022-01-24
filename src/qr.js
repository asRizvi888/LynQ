/*
 * Author: Md. Alfi Sharin Rizvi
 * tinyurl.com/alfisharinrizvi
 */
var qr;

qr = new QRious({
element: document.getElementById('qr-code'),
size: 250,
value: 'https://i.pinimg.com/originals/13/3d/62/133d62f4c7611596b265b81bfb9be08c.gif'
});

function generateQRCode() {
	var qrtext = document.getElementById("container").innerHTML;
	qr.set({
		foreground: 'black',
		size: 250,
		value: qrtext
	});
}

generateQRCode();
