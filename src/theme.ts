'use client'

import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core';
import { Sarabun } from 'next/font/google'

export const sarabun = Sarabun({
  subsets: ['thai'],
  weight: "400"
})

const redTheme: MantineColorsTuple = [
  '#ffeeee',
  '#f3dbdd',
  '#e3b5b8',
  '#d68d91',
  '#c96a70',
  '#c2545b',
  '#bf494f',
  '#a93a41',
  '#983238',
  '#86272f'
];

const brownTheme: MantineColorsTuple = [
  '#f7f3f2',
  '#e7e5e5',
  '#d2c9c6',
  '#bdaaa4',
  '#ab9087',
  '#a17f75',
  '#9d766b',
  '#896459',
  '#7b584e',
  '#6d4b40'
];


export const theme = createTheme({
  fontFamily: sarabun.style.fontFamily,
  primaryColor: 'red',
  colors: {
    'red': redTheme,
    'org': brownTheme
  }
});
