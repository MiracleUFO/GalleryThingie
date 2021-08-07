import React from 'react';

function Header() {

	function addPicture (e) {
    e.preventDefault();
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('class','bodyForModal');
		let modal = document.getElementById('modal');
    modal.setAttribute('class','modal');
    let modalContainer = document.getElementById('modalContainer');
    modalContainer.setAttribute('class', 'modalContainer');
    modal.firstElementChild.placeholder = 'Label';
    modal.firstElementChild.nextElementSibling.placeholder = 'Link';
  }

  return (
        <header>
          <form className='boxedIn'>
            <input type='search' name='search' placeholder='Search by label' id='searchInput'/>
          </form>
          <button className='modal-trigger' onClick={addPicture} id='addPicBtn'>Add picture</button>
          <button className='modal-trigger' onClick={addPicture} id='addPicBtnMobile'><b>+</b></button>
        </header>
  );
}

export default Header;
