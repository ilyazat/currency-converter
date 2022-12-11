import './App.css';
import ConverterBlock from './components/ConverterBlock';
import { useState, useEffect } from 'react';

function App() {
    const [currency1, setCurrency1] = useState("RUB")
    const [currency2, setCurrency2] = useState("USD")

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const [rates, setRates] = useState({})

    useEffect(() => {
		fetch('https://www.cbr-xml-daily.ru/daily_json.js')
			.then((response) => response.json())
			.then((json) => {
                setRates(json.Valute)
            });
	}, []);


    function onChangeCurrency1 (currency) {
        setCurrency1(currency)
    }

    function onChangeCurrency2 (currency) {
        setCurrency2(currency)
    }


    function convertValute (valuteFrom, valuteTo, value) {
        if (valuteFrom === 'RUB') {
            console.log(value * rates[valuteTo].Value)

            return (value / rates[valuteTo].Value)
        } 
        else { // 15 $ to EUR = 15 $ * 62 / 63
            if (valuteTo === 'RUB') {
                return value * rates[valuteFrom].Value
            }
            return value * rates[valuteFrom].Value / rates[valuteTo].Value
        }

    }

    function onChangeValue1 (value) {
        value = parseInt(value)
        
        setValue1(value)
        setValue2(convertValute(currency1, currency2, value))
    }

    function onChangeValue2 (value) {
        value = parseInt(value)
        
        setValue2(value)
        setValue1(convertValute(currency2, currency1, value))
    }

    return (<>
        <div className='header'>
        <h1>Header</h1>
        </div>
        <div className="App">
        <ConverterBlock 
        currentCurrency={currency1} 
        onChangeCurrency={onChangeCurrency1}
        value={value1}
        onChangeValue={onChangeValue1}
        />
        <ConverterBlock 
        currentCurrency={currency2} 
        onChangeCurrency={onChangeCurrency2}
        value={value2}
        onChangeValue={onChangeValue2}
        />
        </div>
        </>);
}

export default App;
