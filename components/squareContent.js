import React from 'react';
import Flag from './flag';
import Mine from './mine';


class SquareContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDisplay: 0,
            number: props.number,
            isBomb: !!props.isBomb,
            isDisabled: props.disabled
        }
        this.onChangeState = this.onChangeState.bind(this);
    }

    onChangeState(event) {
        event.preventDefault();
        let { currentDisplay, isBomb } = this.state;
        switch (event.button) {
            case 0:
                if (currentDisplay !== 3) {
                    this.setState({ currentDisplay: !isBomb ? 1 : 2, isDisabled: true })
                }
                break;
            case 2:
                this.setState({ currentDisplay: currentDisplay === 3 ? 0 : 3 })
                if (this.props.flagSquare)
                    this.props.flagSquare(currentDisplay !== 3, isBomb);
                break;
            default:
                break;
        }
    }

    render() {
        let { currentDisplay, number, isDisabled } = this.state;
        let style = {
            width: 40,
            height: 40,
            padding: 10,
            cursor: isDisabled ? 'initial' : 'pointer',
            backgroundColor: isDisabled ? '#CCC' : '#FFF',
            border: `1px solid black`,
            lineHeight: 1,
            textAlign: 'center',
            fontSize: 18
        }
        let content;
        switch (currentDisplay) {
            case 0:
                content = '';
                break;
            case 1:
                content = number;
                break;
            case 2:
                content = <Mine />;
                break;
            case 3:
                content = <Flag />;
                break;

            default:
                content = '';

        }
        return (<div style={style} onContextMenu={(ev) => {
            ev.preventDefault();
        }} onMouseUp={!isDisabled ? this.onChangeState : undefined}>
            {content}
        </div>);
    }
}
export default SquareContent;