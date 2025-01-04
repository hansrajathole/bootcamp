// import { add } from "../reducers/ProductSlice";
// export const add = add;

//for all the syns actions or the actions not involved in API calls
export {add} from "../reducers/ProductSlice";
import { remove } from "../reducers/ProductSlice";


// export const asynsremove = function (){
//     return function (){

//     }
// }

export const asynsremove = () => ()=>{}