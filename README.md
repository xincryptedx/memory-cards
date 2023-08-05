# Memory Cards Game

This is a memory game built with React. Users are tasked with selecting from a random selection of cards without picking the same card twice.

Try the game [](here). (NYI)

## How to Play

- A chosen number of random cards are displayed
- Click on any card to make your first selection
- The card order will shuffle
- Click on a card you haven't selected before
- Continue selecting cards without repeating
- If you select a card you've already chosen, the game ends
- Select all cards once to win

## Implementation Details

- Functional components with React Hooks for state management
- UseState and UseEffect hooks to track selections, score and fetch API data
- External Deck of Cards API request with Fetch
- Shuffle array utility to randomize card order
- Game logic checks for determing win/lose conditions and tracking score
- Variable game difficulty allowing for different numbers of cards

## Credits

Created according to instructions from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card).

The app fetches card images from the [Deck of Cards API](https://www.deckofcardsapi.com/).
