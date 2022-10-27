import React from 'react';
import {useMachine} from '@xstate/react';
import {marvelMachine} from '../Machines/marvelMachine';
import { Layout } from './Layout';

const BaseLayout = () => {
    const [state,send]=useMachine(marvelMachine);

  return (
    <div className='BaseLayout'>
        <Layout send={send} state={state}/>
    </div>
  )
}

export {BaseLayout}