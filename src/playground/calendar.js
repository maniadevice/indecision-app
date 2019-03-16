import React from 'react';
import ReactDOM from 'react-dom';

class Calendar extends React.Component {

    constructor(props) {

        super(props);
        const date = new Date();
        this.state = {
            month: date.getMonth(),
            year: date.getFullYear()
        }
        this.onGo = this.onGo.bind(this);
    }
    
    

    onGo() {

        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;

        this.setState((prevState) => {
            return {
                month,
                year
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    Month
                    <select id="month">
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                    Year
                    <input type="text" id="year" />
                    <div>
                        <input type="button" value="Go" onClick={this.onGo}/>
                    </div>
                </div>
                <div>It is {this.state.month}, {this.state.year}</div>
            </div>
        )
    }
}

ReactDOM.render(<Calendar />, document.getElementById("app"));