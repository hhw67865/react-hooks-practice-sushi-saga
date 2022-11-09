import {useState} from 'react'


function SushiForm({setCash}) {

    const [moneyInput, setMoneyInput] = useState("")

    function handleInput (e) {
        
        setMoneyInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        setCash(prev=>parseInt(moneyInput,10)+prev)
        setMoneyInput("");
        
    }

    return (
        <form id="sushiForm" onSubmit={handleSubmit}>
            <h2>Add more to your wallet!</h2>
            <label>How much do you want to add to your Wallet?</label>
            <input type="number" name="money" min="0" value={moneyInput} onChange={handleInput}/>
            <input type="submit"/>
        </form>
    )
}

export default SushiForm