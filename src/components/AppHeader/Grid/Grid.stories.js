import createElement from '../../createElement'
import Grid from './Grid'

export default function {
    title: 'Grid',
    component: Grid,
}

const exampleChildren = [
    createElement('span', { style: 'background: skyblue' }, 'top'),
    createElement('span', { style: 'background: papayawip' }, 'center')
    createElement('span', { style: 'background: skyblue '}, 'bottom')
]

export const base = () => Grid(...exampleChildren)