var input = document.getElementById("input");
var createButton = document.getElementById("create_button");
var reversedStringDiv = document.getElementById("reversed_string");
var todoList = document.getElementById("todo_list");

var stringArray = [];

var reverseString = (str) => {
    return str.split('').reverse().join('');
};

var createTodo = () => {
    var inputValue = input.value.trim();

    if (inputValue === "") {
        return alert('Напишите что-нибудь');
    }

    var reversed = reverseString(inputValue);
    reversedStringDiv.innerHTML = `<h3>Реверсированная строка: ${reversed}</h3>`;

    stringArray.push(inputValue);
    renderTodos();

    input.value = "";
};


var renderTodos = () => {
    todoList.innerHTML = '';

    stringArray.forEach((todo) => {
        var div = document.createElement("div");
        div.setAttribute("class", "block_text");

        // Реверсирование строки в массиве и добавление в DOM
        var reversedTodo = reverseString(todo);
        div.innerHTML = `<h3>${reversedTodo}</h3>`;
        todoList.append(div);
    });
};

createButton.addEventListener("click", createTodo);

window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") createTodo();
});
