class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >What should I do?
                    </button>
            </div>
        )
    }
}

class Options extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }

            </div>
        )
    }
}

class Option extends React.Component {

    render() {
        return (
            <div>Option: {this.props.optionText}</div>
        )
    }
}