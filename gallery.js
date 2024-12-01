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

function setTabIndex() {
   let images = document.getElementsByTagName('img'); 
   for (const eachImage of images){
      eachImage.setAttribute('tabindex', '0');
   }
}

function onFocus (thisImage) {
   console.log(`${thisImage.alt}`);
   thisImage.setAttribute('style', 'border:10px solid rgba(255, 255, 255, 0.795)');
}

function onBlur (thisImage) {
   console.log(`you are blurring ${thisImage.alt}`);
   thisImage.removeAttribute('style');
}