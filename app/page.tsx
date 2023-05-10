'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [expense, setExpenses] = useState({
    amount: 0,
  })
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('0')
  const [selectedCategory, setSelectedCategory] = useState('food')

  const handleKeypadClick = (value: string) => {
    if (amount === '0') {
      setAmount(value)
      return
    } else {
      setAmount((prevAmount) => prevAmount + value)
    }
  }
  const clearAmount = () => {
    setAmount('0')
  }
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  const getCategoryStyle = (category: string) => {
    if (selectedCategory === category) {
      return 'bg-slate-100'
    } else {
      return 'hover:bg-slate-50'
    }
  }

  const categories = [
    {
      name: 'food',
      icon: '/food.png',
      label: 'Food',
    },
    {
      name: 'transport',
      icon: '/train.png',
      label: 'Transport',
    },
    {
      name: 'grocery',
      icon: '/grocery.png',
      label: 'Grocery',
    },
    {
      name: 'living',
      icon: '/living-cost.png',
      label: 'Living',
    },
  ]

  return (
    <div>
      <div className='p-3'>
        {/* Amount display */}
        <div className='mb-3 w-full rounded-xl border bg-slate-50 p-3 text-2xl shadow-inner'>
          ¥ {amount}
        </div>
        {/* Description */}
        <div className='w-full rounded-xl border bg-slate-50 p-3 text-2xl shadow-inner'>
          <input
            type='text'
            placeholder='Shop name, description..'
            className='w-full bg-transparent'
          />
        </div>
        {/* Catergory Selector */}
        <div className='mt-3 grid grid-cols-4 gap-3'>
          {categories.map((category) => (
            <div
              className={`flex flex-col items-center gap-1 rounded-xl border p-2 text-xs ${getCategoryStyle(
                category.name,
              )}`}
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Image src={category.icon} alt={category.name} width={60} height={60} />
              {category.label}
            </div>
          ))}
        </div>

        {/* Keypad */}
        <div className='mt-3 grid grid-cols-3 gap-3'>
          {/* for 1 to 9 */}
          {Array.from(Array(9).keys()).map((i) => (
            <div
              className='flex justify-center rounded-xl border p-6 hover:cursor-pointer hover:bg-slate-50'
              key={i}
              onClick={() => handleKeypadClick((i + 1).toString())}
            >
              {i + 1}
            </div>
          ))}
          <div
            className='flex justify-center rounded-xl border p-6 hover:cursor-pointer hover:bg-slate-50'
            onClick={() => handleKeypadClick('.')}
          >
            .
          </div>
          <div
            className='flex justify-center rounded-xl border p-6 hover:cursor-pointer hover:bg-slate-50'
            onClick={() => handleKeypadClick('0')}
          >
            0
          </div>
          <div
            className='flex justify-center rounded-xl border p-6 hover:cursor-pointer hover:bg-slate-50'
            onClick={() => clearAmount()}
          >
            Clear
          </div>
        </div>
      </div>
    </div>
  )
}
