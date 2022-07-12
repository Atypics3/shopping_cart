import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
	// should only run once due to performance
	const [value, setValue] = useState<T>(() => {
		const jsonValue = localStorage.getItem(key);

		if (jsonValue != null) return JSON.parse(jsonValue);

		// returns initial value as any type
		if (typeof initialValue === "function") {
			return (initialValue as () => T)();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue] as [typeof value, typeof setValue];
}
