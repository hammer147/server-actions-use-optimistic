'use server'

import { revalidateTag } from 'next/cache'

export async function adjustLikes(amount: number) {
  if (!amount) return

  await fetch('http://localhost:3000/api/likes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
    cache: 'no-cache'
  })

  revalidateTag('likes')
}
