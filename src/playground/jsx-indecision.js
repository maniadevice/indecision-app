// ##
// Indecisioner
// ############

const app = {
    title: 'Indecisioner',
    subtitle: 'React Todo app',
    options: []
};


const onFormSubmit = (event) => {

    event.preventDefault();
    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    alert(app.options[randomNum]);
}

const removeAll = () => {
    app.options = [];
    renderIndecisionApp();
}

const appRoot = document.getElementById("app");

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h2>{app.title}</h2>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ul>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ul>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};


renderIndecisionApp();