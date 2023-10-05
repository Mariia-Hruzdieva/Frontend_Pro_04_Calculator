const operation = prompt('Введіть математичну операцію: Додавання, Віднімання, Множення, Ділення');
const num1 = +prompt('Введіть перше число');
if (isNaN(num1)) {
    alert('Значення не є числом');
}
else {
    let num2 = +prompt('Введіть друге число');
    if (isNaN(num2)) {
        alert('Значення не є числом');
    } else
        if (operation === 'Додавання') {
            const add = num1 + num2;
            alert(num1 + '+' + num2 + '=' + add)
        } else
            if (operation === 'Віднімання') {
                const sub = num1 - num2;
                alert(num1 + '-' + num2 + '=' + sub)
            } else
                if (operation === 'Множення') {
                    const mult = num1 * num2;
                    alert(num1 + '*' + num2 + '=' + mult)
                } else
                    if (operation === 'Ділення') {
                        const div = num1 / num2;
                        alert(num1 + '/' + num2 + '=' + div)
                    }
}