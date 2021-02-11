import createElement from './lib/createElement'
import getCharacters from './services/getCharacters'
import AppHeader from './components/AppHeader'
import Card from './components/Card'
import Navigation from './components/Navigation'
import Grid from './components/Grid'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append(header)

  const navigation = Navigation(onNavigate)

  const grid = Grid(header, navigation)
  document.body.append(grid)

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character.name))
    document.body.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
  }

  function onNavigate(text) {
    if (text === 'Characters') {
      // charactersPage.show()
      // // housesPage.hide()
      // // charmsPage.hide()
      // // settingsPage.hide()
      header.insertAdjacentText('Harry Potter App')
    }

    if (text === 'Houses') {
      // // charactersPage.hide()
      // housesPage.show()
      // // charmsPage.hide()
      // // settingsPage.hide()
      header.insertAdjacentText('Houses')
    }

    if (text === 'Charms') {
      // charactersPage.hide()
      // housesPage.hide()
      // charmsPage.sbow()
      // settingsPage.hide()
      header.insertAdjacentText('Houses')
    }

    if (text === 'Settings') {
      // charactersPage.hide()
      // housesPage.hide()
      // charmsPage.sbow()
      // settingsPage.hide()
      header.insertAdjacentText('Settings')
    }
  }
}
