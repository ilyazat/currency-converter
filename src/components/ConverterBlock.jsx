import React from 'react'
import CurrencyMenu from './CurrencyMenu'
import styles from './converter.module.css'


function ConverterBlock( { onChangeCurrency, currentCurrency, value, onChangeValue } ) {
  return (
  <div className={styles.converterBlock}>
    <CurrencyMenu onChangeCurrency={onChangeCurrency}
      currentCurrency={currentCurrency}
    />
    <input
    onChange={(e) => {
      if (isNaN(e.target.value)) {return }
      onChangeValue(e.target.value)
      }}
    value={value}
    type="number"
    placeholder={0}
    />
    </div>
  )
}

export default ConverterBlock