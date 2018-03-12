/* Service Example*/
const url = '/user/';
async function login(user, password){
    const res = await fetch(`${url}auth`, {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });

    return await res.json();
}

export { login };