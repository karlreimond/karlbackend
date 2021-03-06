import "./AddItemForm.css";
import{useRef} from "react";


function AddItemForm(props) {
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();
    function formSumbitHandler(e){
       e.preventDefault();
       const nameValue = nameInputRef.current.value;
       const priceValue = priceInputRef.current.value;
       const categoryValue = categoryInputRef.current.value;
       const item = {
           name: nameValue,
           price: priceValue,
           category: categoryValue
       }

       props.onAddItem(item);
   }
    return(
        <form onSubmit={formSumbitHandler}>
            <label>Eseme nimi</label><br />
            <input type="text" placeholder="Nimi" required ref={nameInputRef}/><br />
            <label>Eseme hind </label><br />
            <input type="number" placeholder="Hind" required ref={priceInputRef}/><br />
            <label>Eseme kategooria</label><br />
            <input type="text" placeholder="Kategooria" required ref={categoryInputRef}/><br />
            <button>Sisesta uus ese</button>
        </form>
    );

}

export default AddItemForm;


//label lehe pikkuselt span teksti: div laheb automaatselt jargmisele reale ei ole vaja br