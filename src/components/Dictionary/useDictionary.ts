import { useState, useEffect } from 'react';
import initialData from '../../data/dictionary.json';
import { DictionaryEntry } from './types';

const STORAGE_KEY = 'my_dictionary_data_v1';

export const useDictionary = () => {
    const [items, setItems] = useState<DictionaryEntry[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse dictionary data", e);
                setItems(initialData);
            }
        } else {
            setItems(initialData);
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addEntry = (entry: Omit<DictionaryEntry, 'id' | 'createdAt'>) => {
        const newEntry: DictionaryEntry = {
            ...entry,
            id: crypto.randomUUID(),
            createdAt: Date.now(),
        };
        setItems(prev => [newEntry, ...prev]);
    };

    const updateEntry = (updated: DictionaryEntry) => {
        setItems(prev => prev.map(item => item.id === updated.id ? updated : item));
    };

    const deleteEntry = (id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const exportData = () => {
        return JSON.stringify(items, null, 2);
    };

    return { items, addEntry, updateEntry, deleteEntry, exportData, isLoaded };
};
