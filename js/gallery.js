/*Name this external file gallery.js*/


function upDate(previewPic) {
   const divSapce = document.getElementById('image');

   //Cambiar texto por alt
   divSapce.innerHTML = previewPic.alt;


   //Cambiar fondo por imagen
   divSapce.setAttribute('style', `background-image: url(${previewPic.src})`);

}

function unDo() {
   const divSapce = document.getElementById('image');
   // Cmbiar fondo por ninguna imagen
   divSapce.setAttribute('style', `background-image: url('')`);

   //Cambiar texto por alt
   divSapce.textContent = 'Hover over an image below to display here.';
}