import {defineStore} from "pinia";

interface weightInterface {
        weight: number;
        date: string;
}

export const useStore = defineStore({
    id: 'store',
    state : () => ({
        weights : Array<weightInterface>()
    }),
    getters : {
        getWeights(): weightInterface[]{
            return this.weights;
        },
        getDateWeights(): weightInterface[] {
            //sort by date
            this.weights.sort((weight1, weight2) => +weight1.date - +weight2.date);
            //from 1238173458 to 09/23/2022
            for (let i = 0; i < this.weights.length; i++){
                this.weights[i].date = new Date(this.weights[i].date).toLocaleDateString();
            }
            return this.weights;
        }
    },
    actions : {
        addWeight(weight: number, date: string): void {
            const newWeight: weightInterface = { weight : weight,date: date};
            this.weights.push(newWeight);
        }
    }
});