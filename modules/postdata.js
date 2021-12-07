const headers = {
    "Content-Type": "application/json; charset=utf-8",
    "x-apikey": "602e38155ad3610fb5bb62bd",
    "cache-control": "no-cache",
  };

export function postData(data, endpoint){
    const postData = JSON.stringify(data);
    fetch(endpoint, {
      method: "post",
      headers,
      body: postData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
}