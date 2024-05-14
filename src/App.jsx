import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					{/* Simple Route */}
					<Route path="/" element={<Home />} />
					{/* Route with parameter */}
					<Route path="/:id" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
