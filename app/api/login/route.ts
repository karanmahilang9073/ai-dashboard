
export async function POST(request: Request) {
    const body = await request.json()
    const {email, password} = body

  return Response.json({
    name: email.split("@")[0],
    email: email
  })
}

