import React from 'react'

async function NewPage({params} : {params: Promise<{new: string}>}) {
    const {new: id} = await params;

  return (
    <h1>Note: {id}</h1>
  )
}

export default NewPage
