import React from "react";
import PropTypes from "prop-types";

const BoardHead = props => {
  let minutes = Math.floor(props.time / 60);
  let formattedSeconds = props.time - minutes * 60 || 0;

  formattedSeconds =
    formattedSeconds < 10 ? `0${formattedSeconds}` : formattedSeconds;
  let time = `${minutes}:${formattedSeconds}`;
  return (
    <div className="board-head">
      <h1>Welcome to minesweeper.</h1>
      <div className="flag-count">{props.flagsUsed}</div>
      <button className="reset" onClick={props.reset}>
        reset
      </button>
      <div className="timer">{time}</div>
      <div className="difficulty">
        <button className="difChange" onClick={props.DifEasy}>Easy</button>
        <button className="difChange" onClick={props.DifMedium}>Medium</button>
        <button className="difChange" onClick={props.DifHard}>Hard</button>
      </div>
    </div>
  );
};

BoardHead.propTypes = {
  time: PropTypes.number.isRequired,
  flagsUsed: PropTypes.number.isRequired
};

export default BoardHead;
