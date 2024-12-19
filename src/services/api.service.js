/* eslint-disable */
import Axios from 'axios';

const RESOURCE_NAME = process.env.VUE_APP_BASE_URL;
const axiosApiInstance = Axios.create();

axiosApiInstance.interceptors.request.use(
  async config => {
    const t =  $cookies.get("t")
    // await refresh()
    const isRefreshing = config.url.startsWith(`${RESOURCE_NAME}/token/refresh`)
    // if(config.url !== `${RESOURCE_NAME}/token/refresh`){
    if(!isRefreshing){

      config.headers = { 
        'Authorization': `Bearer ${t}`,
        'Content-Type': 'application/json'
      }
    }
    return config;
  },
  error => {
    Promise.reject(error)
  });

axiosApiInstance.interceptors.response.use(
  response => { 
    return response
  },
  error => {
    console.clear()
    const originalRequest = error.config
    //Need to know what response we get on jwt expired
    if(error.response.status === 401 && !error.response.config.url.startsWith(`${RESOURCE_NAME}/token/refresh`)) {
      console.log("error, refreshing token")
      const rt = $cookies.get('rt')
      const t = $cookies.get('t')
      return Axios.post(RESOURCE_NAME+`token/refresh?refresh_token=${rt}`,{}, {
        headers: {
          'Authorization': `Bearer ${t}`,
          'refreshtoken' : rt,
          'Referrer-Policy':  `no-referrer-when-downgrade`
        }
      })
      .then(t => {
        $cookies.set('t', login.data.token ,'60min', null, null, null, "Strict")
        Axios(originalRequest)
      })
    } else {
      return error.response.data
    }
  }
)

const refresh = async () => {
  const rt = $cookies.get('rt')
  const call = await Axios.post(RESOURCE_NAME+`token/refresh?refresh_token=${rt}`)
  $cookies.set('t', call.data.token ,'60min', null, null, null, "Strict")
  return call
}
export default {
    async axiosGet(url) {
      //Note: refresh() should not be here, but by trial and error only works when the call is refreshed within 10 min.  When the api is fixed, this can come out and we'll retest.
      await refresh()
      let request = axiosApiInstance(RESOURCE_NAME+`${url}`)
      await request
      return request
    },
    async axiosPost(url, body) {
      const call = await axiosApiInstance.post(RESOURCE_NAME+`${url}`, body)
      return call
    },
    async axiosPut(url, body) {
      const call = await axiosApiInstance.put(RESOURCE_NAME+`${url}`, body)
      return call
    },
};