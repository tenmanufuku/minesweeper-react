import React, { Component } from "react";
import BoardHead from "./components/BoardHeader";
import Board from "./components/Board";

class Minesweeper extends Component {
  constructor() {
    super();

    this.state = {
      gameStatus: "waiting", // can be running, waiting, or ended
      time: 0, // in seconds, will format later
      flagCount: 10,
      openCells: 0,
      mines: 10,
      rows: 10,
      columns: 10
    };

    this.baseState = this.state;
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.state.gameStatus === "running") {
      this.checkForWinner();
    }
  }
  

  checkForWinner = () => {
    if (this.state.mines + this.state.openCells >= this.state.rows * this.state.columns) {
      this.setState({
        gameStatus: "winner"
      }, alert("you won!"))
    }
  }

  componentWillMount() {
    this.intervals = [];
  }

  setInterval = (fn, t) => {
    this.intervals.push(setInterval(fn, t));
  };

  reset = () => {
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState), () => {
      this.intervals = [];
    });
  };

  DifEasy = () => {
    console.log("E");
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState,), () => {
      this.setState({ mines: 5, flagCount: 5 }, console.log("changed"));
      this.intervals = [];
    });
  };

  DifMedium = () => {
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState,), () => {
      this.setState({ mines: 10, flagCount: 10 }, console.log("changed"));
      this.intervals = [];
    });
  };

  DifHard = () => {
    this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState,), () => {
      this.setState({ mines: 15, flagCount: 15 }, console.log("changed"));
      this.intervals = [];
    });
  };

  tick = () => {
    if (this.state.openCells > 0 && this.state.gameStatus === "running") {
      let time = this.state.time + 1;
      this.setState({ time });
    }
  };

  endGame = () => {
    this.setState({
      gameStatus: "ended"
    });
  };

  changeFlagAmount = amount => {
    this.setState({ flagCount: this.state.flagCount + amount });
  };

  handleCellClick = () => {
    if (this.state.openCells === 0 && this.state.gameStatus !== "running") {
      this.setState(
        {
          gameStatus: "running"
        },
        this.setInterval(this.tick, 1000)
      );
    }
    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    });
  };

  render() {
    return (
      <div className="minesweeper">
        <BoardHead
          time={this.state.time}
          flagsUsed={this.state.flagCount}
          reset={this.reset}
          DifEasy={this.DifEasy}
          DifMedium={this.DifMedium}
          DifHard={this.DifHard}
          status={this.state.gameStatus}
        />
        <Board
          openCells={this.state.openCells}
          mines={this.state.mines}
          rows={this.state.rows}
          columns={this.state.columns}
          endGame={this.endGame}
          status={this.state.gameStatus}
          onCellClick={this.handleCellClick}
          changeFlagAmount={this.changeFlagAmount}
        />
      </div>
    );
  }
}

export default Minesweeper;
