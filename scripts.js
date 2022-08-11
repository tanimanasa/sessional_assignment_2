const xhr = new XMLHttpRequest();

const url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`;

xhr.open('GET', url, false);

xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        // console.log(response);

        let template = '';
        for(let i=0; i<response.length; i++){
            template += `
            <div class="content">
                <h3 class="card_header">${response[i].name}</h3>
                <p class="card_header">${response[i].username}</p>
                <p class="card_header">${response[i].email}</p>
                
                <p class="card_footer">${response[i].phone}</p>
                <p class="card_footer">${response[i].website}</p>
            </div>`;
        }
        document.querySelector('#my-container').innerHTML = template
    }
}
xhr.send();