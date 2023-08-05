import {Component} from "react";
import Row from "./row/Row";

export default class Map extends Component {
    CELLS_NUMBER_X;
    CELLS_NUMBER_Y;


    constructor(props, context) {
        super(props, context);

        // 21 50
        this.CELLS_NUMBER_X = 21;
        this.CELLS_NUMBER_Y = 50;
    }

    render() {
        return (
            <div className={"map container"}>
                {this.drawMap()}
            </div>
        );
    }


    drawMap() {
        const resultArr = [];
        for (let y = 0; y < this.CELLS_NUMBER_Y; y++) {
            resultArr.push(<Row key={y} maxCellsNumber={this.CELLS_NUMBER_X} y={y}/>);
        }
        console.log('draw');
        console.log(resultArr);
        return resultArr;

    }
}
