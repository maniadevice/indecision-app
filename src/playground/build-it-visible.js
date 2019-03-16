class VisibilityToggle extends React.Component {

    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {

        this.setState((prevState) => {

            return {
                visibility: !prevState.visibility
            }
        })
    }

    render(){

        return (
            <div>
                <h3>Visibility Toggle</h3>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                {this.state.visibility && <p>Now you see me!</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// -------------------------------------------------------
// Without Components


// const visibleState = {
//     shown: "Show Details",
//     hidden: "Hide Details"
// };

// // set flag
// let shownFlag = false;
// const toggleText = () => {
//     shownFlag = !shownFlag;
//     console.log(shownFlag);
//     renderVisio();

// }

// const appRoot = document.getElementById("app");

// const renderVisio = () => {
    
//     const visioTemplate = (
//         <div>
//             <h3>Visibility Toggle</h3>
//             <button onClick={toggleText}>{shownFlag ? "Hide Details" : "Show Details"}</button>
//             {shownFlag && <p>Now you see me!</p>}
//         </div>
//     )
    
//     ReactDOM.render(visioTemplate, appRoot);
// };

// renderVisio();