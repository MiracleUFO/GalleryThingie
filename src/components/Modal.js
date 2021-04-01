import React from 'react';

//const cloudinary = require('cloudinary').v2;
//let cdnry = new cloudinary.Cloudinary({cloud_name: "epic-pwa", secure: true});

 /*cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET
})*/

let Modal = () => {

  const modal = React.createRef();
  const modalContainer = React.createRef();

	let handleSubmit = (e) => {

    e.preventDefault();
    let labelField = document.getElementById('labelField')
    let linkField = document.getElementById('linkField');
    let link = linkField.value;
    let label = labelField.value;

    let urlRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
    let uriRegex = /data:image\/([a-zA-Z]*);base64,([^\"]*)/g;

    if (urlRegex.test(link) || uriRegex.test(link)) {

      if (label) {
        /*axios.post('https://api.Cloudinary.com/v1_1/epic-pwa/image/upload', link)
        .then ((response) => {
          console.log(response)
        })
        cdnry.v2.uploader.upload(req.file.path, (err, result) => {
          console.log(result);
        })
        */
      } else {
          labelField.value = ''; 
          labelField.placeholder = 'Input a unique label';
        }
    }
    
    else { 
      linkField.value = '';
      linkField.placeholder = 'Invalid image address';
    } 
  }

  let closeModal = (e) => {
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('class','');
    modal.current.setAttribute('class','modalHidden');
    modalContainer.current.setAttribute('class', '');
    modal.current.firstElementChild.value = '';
    modal.current.firstElementChild.nextElementSibling.value = '';
  }

  return (
  	<div ref={modalContainer} id='modalContainer'>
        <form className='modalHidden' ref={modal} id='modal'>
            <input type='text' name='label' placeholder='Label' id='labelField' required/>
            <input type='text' name='pictureURL' placeholder='Link' id='linkField'/>
            <div><span id='cancelModal' onClick={closeModal}>Cancel</span> <button onClick={handleSubmit}>Submit</button></div>
        </form>
    </div>
  );
}

export default 	Modal;
