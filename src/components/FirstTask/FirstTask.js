import React from 'react';
import './FirstTask.css';
import Card from '../Card/Card';
import Popup from '../Popup/Popup';

function FirstTask() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleClickOpenPopup() {
    setIsPopupOpen(true);
  }

  function handleClickClosePopup() {
    setIsPopupOpen(false);
  }
    return (
      <div className="firstTask">
        <Card isOpen={handleClickOpenPopup} />
        <Card isOpen={handleClickOpenPopup} />
        <Card isOpen={handleClickOpenPopup} />
        <Card isOpen={handleClickOpenPopup} />
        <Popup isOpen={isPopupOpen} onClose={handleClickClosePopup}/>
      </div>
    );
  }

export default FirstTask;