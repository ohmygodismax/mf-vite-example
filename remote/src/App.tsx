import './App.css'
import {useState} from "react";

function App() {
	const [state] = useState('remote app')

	return (
		<div>
			`Hello from ${state}`
		</div>
	)
}

export default App
