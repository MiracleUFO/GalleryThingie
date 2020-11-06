import React from 'react';

let Modal = () => {

	/*handleSubmit = (e) => {
		let link = document.getElementById('linkField').value;
		fetch(link)
		.then((response) => response.json)
		.then((json) => {

		})
	}*/

  let modal = React.createRef();
  let modalContainer = React.createRef();

  let closeModal = (e) => {
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('class','');
    modal.current.setAttribute('class','modalHidden');
    modalContainer.current.setAttribute('class', '')
  }

  return (
  	<div ref={modalContainer} id='modalContainer'>
        <form className='modalHidden' ref={modal} id='modal'>
            <input type='text' name='label' placeholder='Label' id='labelField'/>
            <input type='text' name='pictureURL' placeholder='Link' id='linkField'/>
            <div><span id='cancelForm' onClick={closeModal}>Cancel</span> <button>Submit</button></div>
        </form>
    </div>
  );
}

export default 	Modal;
