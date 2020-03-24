const sendRequest = async (path: string, method: string, body: Object = {}) => {
  const res = await fetch(path, {
    method,
    body: JSON.stringify(body)
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