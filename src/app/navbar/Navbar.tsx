'use client'

import React, { Component } from 'react'
import { User } from '@/model/Model'
import Link from 'next/link'

export class Navbar extends Component<{
  user: User | undefined
}> {
  render() {
    let loginLogOut: any
    if(this.props.user) {
      loginLogOut = <Link href='/logout' style={{float: 'right'}}>{this.props.user.userName}</Link>
    } else {
      loginLogOut = <Link href='/login' style={{float: 'right'}}>Login</Link>
    }
    return (
      <div className='navbar'>
        <Link href='/'>Home</Link>
        <Link href='/profile'>Profile</Link>
        {loginLogOut}
      </div>
    )
  }
}
