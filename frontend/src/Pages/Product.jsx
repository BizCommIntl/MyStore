import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product () {
    const parameters = useParams()
    const {slug}=parameters
  return (
    <div>Product is {slug}</div>
  )
}
