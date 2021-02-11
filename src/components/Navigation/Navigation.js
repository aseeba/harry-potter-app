import createElement from '../../lib/createElement'
import charactersSvg from '@fortawesome/fontawesome-free/svgs/solid/user.svg'
import housesSvg from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import charmsSvg from '@fortawesome/fontawesome-free/svgs/solid/magic.svg'
import settingsSvg from '@fortawesome/fontawesome-free/svgs/solid/user-cog.svg'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Characters', svgPath: charactersSvg },
  { text: 'Houses', svgPath: housesSvg },
  { text: 'Charms', svgPath: charmsSvg },
  { text: 'Settings', svgPath: settingsSvg },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
