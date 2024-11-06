import './App.css'
import { GamesProvider } from './providers/GamesProvider';
import { useGames } from './providers/GamesProvider';
import CaricatureGame from './artifact-component';
import FadeoutGame from './components/FadeoutGame';
import { GameData } from './types/game';

function GameWrapper() {
  const { currentGame, previousGame, markGameCompleted } = useGames();

  const renderGame = (game: GameData) => {
    switch (game.type) {
      case 'caricature':
        return <CaricatureGame />;
      case 'fadeout':
        return <FadeoutGame onComplete={() => markGameCompleted(game.id)} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Daily Games</h1>
      
      {currentGame && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Today's Game</h2>
          {renderGame(currentGame)}
        </div>
      )}

      {previousGame && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Yesterday's Game</h2>
          {renderGame(previousGame)}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <GamesProvider>
      <GameWrapper />
    </GamesProvider>
  );
}

export default App
