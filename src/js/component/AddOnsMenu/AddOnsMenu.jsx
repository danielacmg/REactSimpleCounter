import React from "react";

const AddOnsMenu = () => {
	return (
		<div className="text-center m-2">
      <i className="fa-sharp fa-solid fa-gear"></i>
			<div className="btn-group">
       
        <button
          type="button"
          className="btn btn-light"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Pause"
          alt="Pause"
          id="btnPause"
        >
          <i className="fa-regular fa-alarm-clock"></i>
          <i className="fa-sharp fa-solid fa-gear">Pause</i>
        </button>
        <button
          type="button"
          className="btn btn-light"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Reset"
          alt="Reset"
          id="btnPause"
        >
          <i className="fa-regular fa-alarm-clock"></i>
          <i className="fa-sharp fa-solid fa-gear">Reset</i>
        </button>

        <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-toggle-second="tooltip"
            title="Countdown"
            alt="Countdown"
            id="btnCountdown"
            aria-expanded="false"
          >
            <i className="fa-regular fa-alarm-clock"></i>Countdown
          </button>
          <div className="dropdown-menu">
            <form className="px-2 py-3" id="countDownForm">
              
              <div className="form-group">
                <label for="countdownInput">Secs: </label>
                <input
                  type="number"
                  className="form-control"
                  id="countdownInput"
                  placeholder="seconds"
                />
              </div>
              
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary mx-auto py-2 my-2"
                  data-placement="bottom"
                  id="btncountdown"
                >
                  Start countdown
                </button>
              </div>
            </form>
          </div>

          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            data-toggle-second="tooltip"
            title="Change timer"
            aria-expanded="false"
          >
            <i className="fa-regular fa-alarm-clock"></i>Set alarm
          </button>

          <div className="dropdown-menu">
            <form className="px-2 py-3" id="resizeForm">
              
              <div className="form-group">
                <label for="cardWidth">Secs: </label>
                <input
                  type="number"
                  className="form-control"
                  id="cardWidth"
                  placeholder="seconds"
                />
              </div>
              
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-primary mx-auto py-2 my-2"
                  data-placement="bottom"
                  id="btnResize"
                >
                  Set Alarm
                </button>
              </div>
            </form>
          </div>
        
      </div>
			
			
		</div>
	);
};

export default AddOnsMenu;