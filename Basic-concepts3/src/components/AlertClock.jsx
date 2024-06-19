import React from 'react';

function AlertClock() {

    const ClickButton = ()  => {
        const actualTime = new Date().toLocaleTimeString();
        alert (`Hora actual: ${actualTime}`);
    }

  return (
    <div>
        <button onClick={ClickButton}>¿Qué hora es?</button>
    </div>
  )

}

export default AlertClock;