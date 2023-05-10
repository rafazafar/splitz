import { ChangeEvent, FormEvent, useState } from 'react'
import { Expense } from '@/types/Expense'

type Props = {
  onSubmit: (expense: Expense) => void
}

export default function ExpenseForm({ onSubmit }: Props) {
  const [expense, setExpense] = useState<Expense>({
    description: '',
    amount: 0,
    paidBy: 'person1',
    id: 0,
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'amount') {
      setExpense({ ...expense, [name]: parseFloat(value) })
    } else {
      setExpense({ ...expense, [name]: value })
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (expense.description && expense.amount) {
      onSubmit(expense)
      setExpense({ id: 0, description: '', amount: 0, paidBy: 'person1' })
    }
  }

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
      <label className='flex flex-col gap-2'>
        <span className='font-bold'>Description:</span>
        <input
          className='rounded-md border border-gray-300 p-2'
          type='text'
          name='description'
          value={expense.description}
          onChange={handleChange}
          required
        />
      </label>
      <label className='flex flex-col gap-2'>
        <span className='font-bold'>Amount:</span>
        <input
          className='rounded-md border border-gray-300 p-2'
          type='number'
          name='amount'
          value={expense.amount}
          onChange={handleChange}
          required
        />
      </label>
      <label className='flex flex-col gap-2'>
        <span className='font-bold'>Paid by:</span>
        <select
          className='rounded-md border border-gray-300 p-2'
          name='paidBy'
          value={expense.paidBy}
          onChange={handleChange}
        >
          <option value='person1'>Person 1</option>
          <option value='person2'>Person 2</option>
        </select>
      </label>
      <button className='rounded bg-blue-500 px-4 py-2 font-bold text-white' type='submit'>
        Add Expense
      </button>
    </form>
  )
}
