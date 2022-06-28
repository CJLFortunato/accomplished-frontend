const API_URL = 'http://localhost:5000/api/goals/';

const createGoal = async (goalData, token) => {
    const res = await fetch(API_URL, {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(goalData)
    });

    if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
    }


}

const getGoals = async (token) => {
    const res = await fetch(API_URL, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Authorization': `Bearer ${token}`
        }
    });

    if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
    }


}

const deleteGoal = async (id, token) => {
    const res = await fetch(API_URL + id, {
        method: "DELETE",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Authorization': `Bearer ${token}`
        }
    });

    if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
    }


}

const updateGoal = async (goalData, token) => {
    const res = await fetch(API_URL + goalData._id, {
        method: "PUT",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(goalData)
    });

    if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
    }


}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
};

export default goalService;