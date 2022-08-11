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
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h3 class="card-title">${response[i].name}</h3>
                    <h5 class="card-title">${response[i].id}</h5>
                    <h5 class="card-title">${response[i].username}</h5>
                    <h5 class="card-title">${response[i].email}</h5>
                    <h5 class="card-title">${response[i].phone}</h5>
                    <h5 class="card-title">${response[i].website}</h5>
                </div>
            </div>`;
        }
        document.querySelector('#my-container').innerHTML = template
    }
}
xhr.send();