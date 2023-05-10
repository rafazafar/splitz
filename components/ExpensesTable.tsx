import { useState } from 'react'
import { HiX } from 'react-icons/hi'
import { Expense } from '@/types/Expense'

type Props = {
  expenses: Expense[]
  onDelete: (id: number) => void
}

export default function ExpensesTable({ expenses, onDelete }: Props) {
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null)

  const total = expenses.reduce((total, expense) => total + Number(expense.amount), 0)
  const person1Total = expenses
    .filter((expense) => expense.paidBy === 'person1')
    .reduce((total, expense) => total + Number(expense.amount), 0)
  const person2Total = expenses
    .filter((expense) => expense.paidBy === 'person2')
    .reduce((total, expense) => total + Number(expense.amount), 0)

  const handleDelete = (id: number) => {
    onDelete(id)
    setConfirmDeleteId(null)
  }

  return (
    <table className='w-full border-collapse'>
      <thead className='text-left'>
        <tr>
          <th className='py-2 font-bold'>Description</th>
          <th className='py-2 font-bold'>Amount</th>
          <th className='py-2 font-bold'>Paid by</th>
          <th className='py-2 font-bold'>Actions</th>
        </tr>
      </thead>
      <tbody className='text-left'>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td className='py-2'>{expense.description}</td>
            <td className='py-2'>${expense.amount.toFixed(2)}</td>
            <td className='py-2'>{expense.paidBy === 'person1' ? 'Person 1' : 'Person 2'}</td>
            <td className='py-2'>
              {confirmDeleteId === expense.id ? (
                <>
                  <button
                    className='mr-2 rounded bg-red-500 px-4 py-2 font-bold text-white'
                    onClick={() => handleDelete(expense.id)}
                  >
                    <HiX />
                  </button>
                  <button
                    className='rounded bg-gray-500 px-4 py-2 font-bold text-white'
                    onClick={() => setConfirmDeleteId(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className='rounded bg-red-500 px-4 py-2 font-bold text-white'
                  onClick={() => setConfirmDeleteId(expense.id)}
                >
                  <HiX />
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th className='py-2 font-bold'>Total</th>
          <th className='py-2 font-bold'>${total.toFixed(2)}</th>
          <th className='py-2'></th>
          <th className='py-2'></th>
        </tr>
        <tr>
          <th className='py-2 font-bold'>Person 1 Total</th>
          <th className='py-2 font-bold'>${person1Total}</th>
        </tr>
        <tr>
          <th className='py-2 font-bold'>Person 2 Total</th>
          <th className='py-2 font-bold'>${person2Total.toFixed(2)}</th>
          <th className='py-2'></th>
          <th className='py-2'></th>
        </tr>
        <tr>
          <th className='py-2 font-bold'>Split Amount</th>
          <th className='py-2'>
            Person 1: ${(total / 2 - person1Total).toFixed(2)} <br />
            Person 2: ${(total / 2 - person2Total).toFixed(2)}
          </th>
          <th className='py-2'></th>
          <th className='py-2'></th>
        </tr>
      </tfoot>
    </table>
  )
}
