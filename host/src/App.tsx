import './App.css'
import {lazy, Suspense} from "react";
import {loadRemote, registerRemotes, getInstance} from '@module-federation/enhanced/runtime';

const RemoteAppLauncher = lazy(() => {
	registerRemotes([
		{
			name: 'remote-app',
			type: 'module',
			entry: 'http://localhost:4173/remoteEntry.js',
		}
	]);

	console.log(getInstance());

	return loadRemote('remote-app/AppLauncher')
})

function App() {
	return (
		<>
			Hello from host app!
			<Suspense fallback={<p>...loading</p>}>
				<RemoteAppLauncher />
			</Suspense>
		</>
	)
}

export default App
