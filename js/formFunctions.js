const form = document.getElementById('add-form');
const submitButton = document.getElementById('add-button');
const formName = document.getElementById('name');
const formAuthor = document.getElementById('author');

const addBook = () => {
    const data = dataToObject(form);
    const currentState = JSON.parse(localStorage.getItem('books')) ?? [];
    currentState.push(data);
    localStorage.setItem('books', JSON.stringify(currentState));
    drawTable();
    clearForm();
}

const deleteBook = (index) => {
    const currentState = JSON.parse(localStorage.getItem('books'));
    localStorage.setItem('books', JSON.stringify(currentState.filter((e, i) => i !== index)));
    drawTable();
}

const clearForm = () => {
    form.reset();
    submitButton.disabled = true;
}

const validateForm = () => {
    ((/\S/.test(formName.value) && formName.value.length >= 1) &&
        (/\S/.test(formAuthor.value) && formAuthor.value.length >= 3)) ?
        submitButton.disabled = false : submitButton.disabled = true;
}

const dataToObject = (form) => {
    let obj = {};
    const formData = new FormData(form);
    for (let key of formData.keys()) {
        obj[key] = formData.get(key);
    }

    return obj;
}
