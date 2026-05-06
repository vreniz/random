users = []
let idCounter = 0
const tbody = document.getElementById('table_body')

const add_user = () => {
    console.clear()
    // we capture and request user data.
    let user_name = prompt('Digite su nombre')
    let user_age = prompt('Digite su edad')
    
    // We convert the age to an integer
    age = parseInt(user_age)
    console.log(age);
    // Validations and displays the message
    if (isNaN(age)) {
        console.error('Error: Por favor, ingresa una edad válida en números.')
        alert('Error: Por favor, ingresa una edad válida en números.')
        return
    } else if (age < 18) {
        alert(`Hola ${user_name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`)
    } else {
        alert(`Hola ${user_name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!.`)
    }

    // temporary saving
    users.push({ 'id': idCounter ,'name': user_name, 'age': age, 'state': true })

    // create row
    const row = document.createElement('div');
    row.classList.add('table_row');

    // create cells
    row.innerHTML = `
      <div class="table_row_item">${idCounter++}</div>
      <div class="table_row_item">${user_name}</div>
      <div class="table_row_item">${age}</div>
      <div class="table_row_item">${'active'}</div>
    `;

    // Add to the body of the table
    tbody.appendChild(row);

    // I print on the console to see the added user
    console.log(users);
}