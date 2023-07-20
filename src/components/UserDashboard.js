import React from 'react'
import Income from './Income'
import Expense from './Expense'
import Search from './Search'
import ExpenseIncomeDashboard from './ExpenseIncomeDashboard'
import './userdashboard.css'

import AddExpenseIncome from './AddIncome'
import DataList from './DataList'
import { useSelector } from 'react-redux'
import CloseButton from './CloseButton'
import AddExpense from './AddExpense'
import Button from './Button'
function UserDashboard() {
  const { showIncome, isDisabled, selectedData } = useSelector((state) => {
    return state.income
  })
  return (
    <div className={`${isDisabled ? 'userDashboardOn' : 'userDashboard'}`}>
      <div
        className={`${isDisabled ? 'searchContainerOn' : 'searchContainer'}`}
      >
        <div>
          <Search />
        </div>
        <div className='data-list'>
          <DataList />
        </div>
        <div>
          <Button />
        </div>
      </div>
      {isDisabled ? (
        <>
          <div className='IncomeExpenseContainerOn'>
            <div>
              <Income />
              <Expense />
              <CloseButton />
            </div>
            {selectedData.map((item) => (
              <div
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: 'white',
                  background: 'red',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
                key={item.id}
              >
                <strong> {item.name}</strong>
                <strong> {item.type}</strong>
                <strong> {item.amount}</strong>
              </div>
            ))}

            {showIncome ? <AddExpenseIncome /> : <AddExpense />}
          </div>
        </>
      ) : null}
      <div
        className={`${
          isDisabled ? 'ExpenseIncomeDashboardOn' : 'ExpenseIncomeDashboard'
        }`}
      >
        <ExpenseIncomeDashboard />
      </div>
    </div>
  )
}

export default UserDashboard
