const sendRequest = async (path: string, method: string, body: Object = {}) => {
  console.log("Request Body: ", JSON.stringify(body));
  const res = await fetch(path, {
    method,
    body: JSON.stringify(body),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow'
  });
  if (res.status < 400) {
    return await res.json();
  }
  if (res.status >= 400 && res.status <= 499) {
    throw new Error("Client error: " + res.body);
  }
  if (res.status >= 500 && res.status <= 599) {
    throw new Error("Server error: " + res.body);
  }
  throw new Error("Network error");
};

export default sendRequest;