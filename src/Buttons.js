import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="buttons-container">
                {
                    ['C', '+/-', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='].map((item) =>
                        <button value={item} onClick={() => { this.props.func(item) }}>{item}</button>
                    )
                }
            </div>
        );
    }
}

export default Buttons;