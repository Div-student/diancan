import axios from 'axios'

axios.defaults.baseURL = 'http://www.yuyunit.com:8083/'
axios.defaults.headers.common['Authorization'] = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export default axios
