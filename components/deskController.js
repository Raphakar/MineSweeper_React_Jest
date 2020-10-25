import React from 'react';
import Desk from './desk';
import SquareContent from './squareContent';
import BoardInfo from './boardInfo';


const FIELD_SIZE = 100;
const NUMBER_BOMBS = 1;


class DeskController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flagsPlaced: 0,
            bombsDisarmed: 0,
        }
        this.generateField = this.generateField.bind(this);
        this.flagSquare = this.flagSquare.bind(this);

    }

    generateField() {
        let remainingBombs = NUMBER_BOMBS;
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

    render() {

        return (<Desk boardSize={10}>
            {this.generateField().map(i => (
                <SquareContent flagSquare={this.flagSquare} key={i} number={4} isBomb={i === 14} disabled={i === 55 || i === 10} />
            ))}
            <BoardInfo numberBombs={NUMBER_BOMBS - this.state.flagsPlaced} />
        </Desk>);
    }
}
export default DeskController;