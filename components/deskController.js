import React from 'react';
import Desk from './desk';
import SquareContent from './squareContent';
import BoardInfo from './boardInfo';


const FIELD_SIZE = 100;
const NUMBER_BOMBS = 25;


class DeskController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flagsPlaced: 0,
            bombsDisarmed: 0,
            finished: false,
            generatePositionBombs: (() => {
                let positionsBombs = [];
                while (positionsBombs.length < NUMBER_BOMBS) {
                    let position = Math.floor(Math.random() * FIELD_SIZE);
                    if (positionsBombs.indexOf(position) === -1)
                        positionsBombs.push(position);
                }
                return positionsBombs;
            })(),
        }
        this.generateField = this.generateField.bind(this);
        this.flagSquare = this.flagSquare.bind(this);
        this.onLose = this.onLose.bind(this);
    }

    generateField() {
        let remainingBombs = NUMBER_BOMBS;
        // let generatePositionBombs = (() => {
        //     let positionsBombs = [];
        //     while (positionsBombs.length < NUMBER_BOMBS) {
        //         let position = Math.floor(Math.random() * FIELD_SIZE) + 1;
        //         if (positionsBombs.indexOf(position) === -1)
        //             positionsBombs.push(position);
        //     }
        //     return positionsBombs;
        // })();

        //Create Object for field.
        return [...Array(FIELD_SIZE).keys()];
    }

    flagSquare(isDisarm, isValidDisarm) {
        let { bombsDisarmed, flagsPlaced } = this.state;
        let valueToAdd = isDisarm ? 1 : -1;
        if (isValidDisarm) {
            bombsDisarmed += valueToAdd;
        }
        flagsPlaced += valueToAdd;

        this.setState({ bombsDisarmed, flagsPlaced });

        if (bombsDisarmed === NUMBER_BOMBS && flagsPlaced === NUMBER_BOMBS)
            alert('You Win')
    }


    onLose() {
        alert("You Lost");
        this.setState({ finished: true })
    }

    render() {
        return (<Desk boardSize={10}>
            {this.generateField().map(i => (
                <SquareContent disabled={this.state.finished} onLose={this.onLose} flagSquare={this.flagSquare} key={i} number={4} isBomb={this.state.generatePositionBombs.indexOf(i) !== -1} />
            ))}
            <BoardInfo timerStop={this.state.finished} numberBombs={NUMBER_BOMBS - this.state.flagsPlaced} />
        </Desk>);
    }
}
export default DeskController;