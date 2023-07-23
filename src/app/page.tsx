import Counter from './components/Counter'
import OptimisticCounter from './components/OptimisticCounter'

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/likes', {
    cache: 'no-cache',
    next: { tags: ['likes'] }
  })

  const { likes } = await res.json()

  return (
    <main className='flex flex-col items-center justify-center p-5'>
      <h1 className='text-6xl font-bold text-center mb-5'>useOptimistic Demo</h1>
      <Counter likes={likes} />
      <OptimisticCounter likes={likes} />
    </main>
  )
}
