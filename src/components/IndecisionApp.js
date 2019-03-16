import React from 'react';
import Options from './Options';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.removeSelectedOption = this.removeSelectedOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: undefined
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
        } catch (e) {
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
        const option = this.state.options[randomOption];

        this.setState(() => ({ selectedOption: option }));
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

    removeSelectedOption() {

        this.setState(() => ({ selectedOption: undefined }))
    }

    render() {

        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer!";

        return (
            <div>
                <Header subtitle={subtitle} />

                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>


                <OptionModal
                    selectedOption={this.state.selectedOption}
                    removeSelectedOption={this.removeSelectedOption}
                />
            </div>

        )
    }
}

IndecisionApp.defaultProps = {
    options: []
};



export default IndecisionApp;