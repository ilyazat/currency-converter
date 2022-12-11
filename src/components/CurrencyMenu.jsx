import React from 'react'
import styles from './currencyMenu.module.css'


const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

function CurrencyMenu( {onChangeCurrency, currentCurrency} ) {
  return (
    <div className={styles.currencyMenu}>
        {defaultCurrencies.map((currency) => {
          return (  
            <li
              key={currency}
              onClick={() => onChangeCurrency(currency)}
              className={currentCurrency === currency ? styles.active : ''}
            >
              {currency}
              
            </li>
          )
        } )}

    </div>
  )
}

export default CurrencyMenu