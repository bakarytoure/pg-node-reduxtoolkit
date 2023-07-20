import React from 'react'
import './expenseincomedashboard.css'
import { useSelector } from 'react-redux'
function ExpenseIncomeDashboard() {
  const { dailyValue, mounthlyIncome, dailyExValue, mounthlyEx, remaining } =
    useSelector((state) => {
      return state.income
    })
  return (
    <>
      <div className='expense-income-container'>
        <div className='income'>
          <div>
            <div className='daily-income'>Daily Income</div>
            <div className='monthly-income-value'>{dailyValue}</div>
          </div>
          <div>
            <div className='monthly-income'>Monthly Income</div>
            <div className='monthly-income-value'>{mounthlyIncome}</div>
          </div>
        </div>
        <div className='expense'>
          <div>
            <div className='daily-expense'>Daily Expense</div>
            <div className='daily-expense-value'>{dailyExValue}</div>
          </div>
          <div>
            <div className='monthly-expense'>Monthly Expense</div>
            <div className='monthly-expense-value'>{mounthlyEx}</div>
          </div>
        </div>

        <div className='remaining-after-expense'>
          <div className='monthly-expense'>
            Remaining amount after each expense
          </div>
          <div className='remaining-expense-value'> {remaining}</div>
        </div>
      </div>
    </>
  )
}

export default ExpenseIncomeDashboard
