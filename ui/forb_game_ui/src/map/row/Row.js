import {Component} from "react";
import Hexagon from "../hex/Hexagon";

export default class Row extends Component{

    render() {
        let classname = "row y" + this.props.y;
        let columnCount;
        if (this.props.y % 2 === 0) {
            classname = classname + " odd";
            columnCount = 1;
        } else {
            classname = classname + " even";
            columnCount = 0;
        }



        let result = [];
        for (let x = 0; x < this.props.maxCellsNumber; x++) {
            result.push(<Hexagon
                key={x + ":" + this.props.y}
                x={x}
                y={this.props.y}
                col={columnCount}
                activeHex={this.props.activeHex}
                selectHex={this.props.selectHex}

            />)

            columnCount+=2;
        }



        return (
            <div className={classname}>
                {result}
            </div>
        );
    }
}
