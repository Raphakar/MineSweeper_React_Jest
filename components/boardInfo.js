import React from 'react';
import InfoDisplay from './infoDisplay';


class BoardInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
            start: Date.now() - 0,
            flagsAvailable: props.numberBombs,
        }
        this.timer = setInterval(() => this.setState({
            currentTime: parseInt((Date.now() - this.state.start) / 1000)
        }), 1);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.numberBombs !== this.state.flagsAvailable) {
            this.setState({ flagsAvailable: newProps.numberBombs, })
        }
        if (newProps.timerStop) {
            clearInterval(this.timer)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        let { currentTime, flagsAvailable } = this.state;
        let infoDisplayStyle = {
            margin: "0px 40px"
        }
        return (
            <div style={{
                display: "flex",
                margin: "auto",
                padding: 10
            }}>
                <div style={infoDisplayStyle}>
                    Timer
                    <InfoDisplay >
                        {currentTime <= 999 ? currentTime : 999}
                    </InfoDisplay>
                </div>

                <div style={infoDisplayStyle}>
                    Flags
                    <InfoDisplay >
                        {flagsAvailable}
                    </InfoDisplay>
                </div>
            </div>
        )
    }
}
export default BoardInfo;