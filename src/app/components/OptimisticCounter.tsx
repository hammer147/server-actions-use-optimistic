'use client'

import { adjustLikes } from '../actions/adjustLikes'
import { experimental_useOptimistic as useOptimistic } from 'react'

type Props = {
  likes: number
}

export default function OptimisticCounter({ likes }: Props) {
  const [optimisticLikes, addOptimisticLikes] = useOptimistic(
    likes,
    (state, amount) => state + Number(amount)
  )

  async function updateLikes(amount: number) {
    addOptimisticLikes(amount)
    await adjustLikes(amount)
  }

  return (
    <div className='flex space-x-2 border p-5 mb-2'>
      <h2>Optimistic Counter</h2>
      <button onClick={() => updateLikes(-1)}>-</button>
      <p>{optimisticLikes}</p>
      <button onClick={() => updateLikes(1)}>+</button>
    </div>
  )
}
