import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
    async addItem(data) {
        const res = await axios({
            url: 'http://localhost:8888/express',
            method: 'post',
            data: JSON.stringify(data),
            headers: {
                'Content-Type':'application/json'
            }
        });
        return res;
    },

    // async getItems() {
    //     const res = axios.get('http://localhost:8888/items');
    //     return res;
    // },

    // async finishEdit(data) {
    //     const res = await axios({
    //         url: 'http://localhost:8888/items'+data.id,
    //         method: 'put',
    //         data: JSON.stringify(data),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     return res;
    // },

    

}