import React from 'react';

const bc = new BroadcastChannel('test_channel')

export const BCContext = React.createContext({
  bc
})

export const defaultBC = { bc }
