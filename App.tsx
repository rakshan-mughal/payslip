import { Provider } from 'react-redux';
import { BottomNavigation } from './src/navigation/bottomNavigation';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BottomNavigation />
    </Provider>
  );
}