import React from 'react';

function Header() {

	function addPicture (e) {
    e.preventDefault();
    let body = document.getElementsByTagName('body')[0];
    body.setAttribute('class','bodyForModal');;
		let modal = document.getElementById('modal');
    modal.setAttribute('class','modal');
    let modalContainer = document.getElementById('modalContainer');
    modalContainer.setAttribute('class', 'modalContainer'); 
  }

  return (
        <header>
          <form className='boxedIn'>
            <input type='search' name='search' placeholder='Search by label' id='searchInput'/>
          </form>
          <button id='modal-trigger' onClick={addPicture}>Add picture</button>
        </header>
  );
}

export default Header;
