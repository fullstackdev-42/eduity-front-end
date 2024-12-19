import axios from 'axios'

export default {
    async KeyWordsSearch(keyword) {
        return await axios.get(`https://services.onetcenter.org/ws/online/search?client=blog_eduity&keyword=${keyword}`)
    },
    async FullCareerReport(code) {
        return await axios.get(`https://services.onetcenter.org/ws/mnm/careers/${code}/report?client=blog_eduity`)
        .catch(error => {
            console.log("error returning data")
            return "Report Unavailable"
        })
    }
}
