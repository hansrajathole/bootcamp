import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/reducers/productSlice";

const Two = () => {
    const { data } = useSelector((state) => state.products);
    console.log(data);
    const disptach = useDispatch();

    const AddHandler = () => {
        const newProduct = {
            id: 4,
            name: "Product 4",
            price: 400,
        };

        disptach(add(newProduct));
    };

    const RemoveHandler = () => {
        disptach(remove());
    };
    return (

        <div>
          <div>
            
          </div>
            Two <br />
            <button onClick={AddHandler}>Add Data</button>
            <button onClick={RemoveHandler}>Remove Data</button>
        </div>
    );
};

export default Two;