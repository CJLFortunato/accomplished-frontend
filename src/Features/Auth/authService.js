const API_URL = 'http://localhost:5000/api/users/';

const register = async (userData) => {
    const res = await fetch(API_URL, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
        },
        body: JSON.stringify(userData)
    });

    if (res.ok) {
        const jsonRes = await res.json();
        localStorage.setItem('user', JSON.stringify(jsonRes));
    }
}

const authService = {
    register
};

export default authService;