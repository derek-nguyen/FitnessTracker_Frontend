const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com'

export async function fetchAllActivities() {
    try {
        const res = await fetch(`${BASE_URL}/api/activities`, {
            method:'GET',
            headers: {
                "Content-Type": "application/json",
              },
        })

        const data = await res.json();
        return data;
    } catch(error) {
        throw error;
    }
}

export async function fetchAllRoutines() {
    try {
        const res = await fetch(`${BASE_URL}/api/routines`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const result = await res.json();
        return result;
    } catch (error) {
        throw error;
    }
}