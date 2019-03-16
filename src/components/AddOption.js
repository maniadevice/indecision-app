import React from 'react';

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
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' name='option' type='text' />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        )
    }
}


export {AddOption as default}