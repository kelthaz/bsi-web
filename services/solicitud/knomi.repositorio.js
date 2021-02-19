const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body)
  });
  return {data: response.json()};
};

const KnomiRepositorio = {
  postAutoCapture: async (payload) => postRequest('https://mobileauth.aware-demos.com/knomi/autocapture', payload),
  postAnalyze: async (payload) => postRequest('https://mobileauth.aware-demos.com/knomi/analyze', payload),
};

export default KnomiRepositorio;
