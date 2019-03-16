class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        console.log("cdm");

        // we try coz if we find a non-json when parsing
        // we should do nothing
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            // if not empty
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch(e){
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length !== this.state.options.length) {
            console.log("saving data");
            const json = JSON.stringify(this.state.options);

            localStorage.setItem('options', json);
        }

    }

    componentWillUnmount() {
        console.log("cwu");
    }

    handleDeleteOptions() {

        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((currentOption) => currentOption !== option)
            }
        })
    }

    handlePick() {

        const randomOption = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomOption]);
    }

    handleAddOption(option) {

        if (!option) {
            return 'Enter a valid item'
        }

        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {

        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

// stateless functional component 
// refer to original playground/original-class-components.js to refer to the original doc
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision!'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?
                </button>
        </div>
    )
}

const Options = (props) => {

    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                )
            }
        </div>
    )
}

const Option = (props) => {

    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {

    constructor(props) {

        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }

    handleAddOption(event) {

        event.preventDefault();
        const optionText = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(optionText);

        this.setState(() => ({ error }));

        if(!error) {
            event.target.elements.option.value = '';
        }

    }

    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.handleAddOption}>
                    <input name='option' type='text' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));