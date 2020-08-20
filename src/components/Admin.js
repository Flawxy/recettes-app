import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'

class Admin extends Component {
  render () {
    const { ajouterRecette, chargerExemple, majRecette, recettes, supprimerRecette } = this.props

    return (
      <div className='cards'>
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {
          Object.keys(recettes)
            .map(key =>
              <AdminForm
                key={key}
                id={key}
                majRecette={majRecette}
                supprimerRecette={supprimerRecette}
                recettes={recettes}
              />)
        }
        <footer>
          <button onClick={chargerExemple}>Remplir</button>
        </footer>
      </div>

    )
  }
}

export default Admin
