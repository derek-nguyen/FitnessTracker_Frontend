const BASE_URL = "http://fitnesstrac-kr.herokuapp.com";

export async function registerUser(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const response = await fetch(`${BASE_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllActivities() {
  try {
    const res = await fetch(`${BASE_URL}/api/activities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllRoutines() {
  try {
    const res = await fetch(`${BASE_URL}/api/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await res.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllPublicRoutines() {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutine(username, token, routineObj) {
  try {
    const response = await fetch(`${BASE_URL}/api/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(routineObj)
    });

    const result = await response.json();
    console.log(result);
    return result
  } catch (error) {
    throw error;
  }
}

export async function fetchUserPublicRoutines(username, token) {
  try {
    const request = await fetch(`${BASE_URL}/api/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
    const result = await request.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function editRoutine(token, routineId, routineObj) {
  try {
    const request = await fetch(`${BASE_URL}/api/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(routineObj)
    })
    const result = await request.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}