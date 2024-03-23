const user = {}
for (let i = 1; i <= 10; i++) {
    let name = prompt('Enter your name')
    let age = +prompt('Enter your age')
  
    user[i] = {
    numUser: `Пользователь № ${i}`,
    name:`Имя: ${name}`,
    age:`Возраст: ${age}`
}

}
for (const key in user) {
    for (const key2 in user[key]) {
        console.log(user[key][key2]);
    } 
}

const cart = receipt()
let del = 9000
let menu = 'Вы заказали '

for (const key in cart) {
    menu = menu + key
    for (const key2 in cart[key]) {
       menu = key2 == 'info' ? menu + " " + cart[key][key2] + " " : menu + '';
       del = key2 == 'price' ? del + cart[key][key2] : del
    }
}

console.log(menu + " Общая стоимость с доставкой(9000) " + del);

