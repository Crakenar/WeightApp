import {useStore} from "~/store";
import {weightInterface} from "~/types/IWeight";
import axios from "axios";

export async function getWeights() {
    const store = useStore();
    axios.get<weightInterface[]>('/api/weight').then((res) => {
        if (res.data) {
            store.setWeights(res.data)
            return res.data;
        }
    })
}

export async function addWeights() {
    try {
        axios.post('/api/weight').then((res) => {
            console.log('res', res.data)
        })
    } catch (e) {
    }
}