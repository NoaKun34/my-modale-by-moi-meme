# my-modale-by-moi-meme

Un composant de modale simple et customisable.

## Installation

```sh
npm i my-modale-by-moi-meme

```

## Exemple d'utilisation

```js
import React, { useState } from 'react';
import Modal from 'my-modale-by-moi-meme';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h1>Your components</h1>
      </Modal>
    </div>
  );
}

export default App;
```

Ceci est un projet pour un cours OpenClassRooms