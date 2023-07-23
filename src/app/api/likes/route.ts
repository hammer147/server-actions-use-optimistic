import { NextResponse } from 'next/server'

let likes = 50

export async function GET() {
  // in a real app, you'd get this from a database
  return NextResponse.json({ likes })
}

export async function POST(request: Request) {
  const { amount } = await request.json()

  // in a real app, you'd validate the amount and update a database
  if (amount) likes += Number(amount)

  return NextResponse.json({ likes })
}
