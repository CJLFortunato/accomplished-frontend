const API_URL = 'https://accomplished-backend.herokuapp.com/api/users/';

const register = async (userData) => {
    const res = await fetch(API_URL, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://accomplished.netlify.app/',
            'Origin': 'https://accomplished.netlify.app/'
        },
        body: JSON.stringify(userData)
    });

    if (res.ok) {
        const jsonRes = await res.json();
        localStorage.setItem('user', JSON.stringify(jsonRes));
        return jsonRes;
    }


}

const login = async (userData) => {
    const res = await fetch(API_URL + 'login', {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'https://accomplished.netlify.app/',
            'Origin': 'https://accomplished.netlify.app/'
        },
        body: JSON.stringify(userData)
    });

    if (res.ok) {
        const jsonRes = await res.json();
        //console.log(jsonRes);
        localStorage.setItem('user', JSON.stringify(jsonRes));
        return jsonRes;
    }
}

const logout = () => {
    // console.log('removed from localstorage');
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
};

export default authService;