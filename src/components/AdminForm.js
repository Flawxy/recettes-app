import React from 'react'

const AdminForm = ({ id: key, majRecette, recettes, supprimerRecette }) => {
  const recette = recettes[key]

  const handleChange = (event, key) => {
    const { name, value } = event.target
    const recette = recettes[key]
    recette[name] = value
    majRecette(key, recette)
  }

  return (
    <div className='card'>
      <form className='admin-form'>
        <input
          value={recette.nom}
          onChange={event => handleChange(event, key)}
          name='nom'
          type='text'
          placeholder='Nom de la recette'
        />
        <input
          value={recette.image}
          onChange={event => handleChange(event, key)}
          name='image'
          type='text'
          placeholder={'Nom de l\'image'}
        />
        <textarea
          value={recette.ingredients}
          onChange={event => handleChange(event, key)}
          name='ingredients'
          rows='3'
          placeholder='Liste des ingrédients'
        />
        <textarea
          value={recette.instructions}
          onChange={event => handleChange(event, key)}
          name='instructions'
          rows='15'
          placeholder='Liste des instructions'
        />
        <button onClick={() => supprimerRecette(key)}>Supprimer</button>
      </form>
    </div>
  )
}

export default AdminForm
