import React, { useState, useEffect } from 'react';

let Modal = () => {
  const modal = React.createRef();
  const modalContainer = React.createRef();
  
  let [state, setState] = useState({
    label: '',
    link: '',
    file: '',
    image: []
  });

  let labelField, linkField, fileField;
  useEffect(() => {
    labelField = document.getElementById('labelField');
    linkField = document.getElementById('linkField');
    fileField = document.getElementById('fileField');
  })

  let disable = (e) => {
    if (e.target.name === 'link') {
      e.target.value !== '' ? fileField.disabled = true : fileField.disabled = false;
    }

    if (e.target.name === 'file') {
      e.target.files.length !== 0 ? linkField.disabled = true : linkField.disabled = false;
    }
  }

  let handleChange = (e) => {
    disable(e);
    setState({...state, [e.target.name]: e.target.value});
  }

  let convertToURI = (src, insert) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload  = function () {
      let canvas = document.createElement('CANVAS');
      let ctx = canvas.getContext('2d');
      canvas.height = this.naturalHeight;
      canvas.width = this.naturalWidth;
      ctx.drawImage(this, 0, 0);
      let uri = canvas.toDataURL();
      insert(uri);
    };

    img.src = src;
    if (img.complete || img.complete === undefined) {
      //img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
      img.src = src;
    }
  }

	let handleSubmit = (e) => {
    e.preventDefault();
    let src = state.link || state.file;
    convertToURI(src, function(uri) {
      let img = `<img src=${`${uri}`} />`
      //console.log(uri, document.getElementsByClassName('gallery')[0]);
      //document.getElementsByClassName('gallery')[0].appendChild(img);
    })
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
        <form className='modalHidden' ref={modal} id='modal' onSubmit={handleSubmit}>
            <input type='text' name='label' placeholder='Label' id='labelField' required />
            <input type='text' name='link' placeholder='Link' id='linkField' onChange={handleChange} />
            <p>OR</p>
            <input type='file' name='file' onChange={handleChange} id='fileField' />
            <div><span id='cancelModal' onClick={closeModal}>Cancel</span><button>Submit</button></div>
        </form>
    </div>
  );
}

export default 	Modal;
