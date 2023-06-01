'use client'

import React, { Component } from 'react'
import { User } from '../model/Model'
import { AuthService } from '@/services/AuthService'

interface HomeState{
  user: User | undefined
}

export default class Home extends Component < {}, HomeState> {

  private authService: AuthService = new AuthService()
  
  render() {
    return (
      <div>App From class Works!</div>
    )
  }
}


// export default function Home() {
//   return (
//     <div>App works</div>
//   )
// }
