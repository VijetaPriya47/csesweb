import React, { useState, useMemo } from 'react';
import { useDictionary } from './useDictionary';
import { AddEditModal } from './AddEditModal';
import { DictionaryList } from './DictionaryList';
import { Controls } from './Controls';
import { DictionaryEntry } from './types';

export const DictionaryManager: React.FC = () => {
    const { items, addEntry, updateEntry, deleteEntry, exportData, isLoaded } = useDictionary();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<DictionaryEntry | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('alpha');

    const filteredItems = useMemo(() => {
        let result = items;

        if (searchQuery) {
            const lowerQ = searchQuery.toLowerCase();
            result = result.filter(item =>
                item.word.toLowerCase().includes(lowerQ) ||
                item.definition.toLowerCase().includes(lowerQ) ||
                item.groups.some(g => g.toLowerCase().includes(lowerQ))
            );
        }

        // Sort logic
        if (sortBy === 'alpha') {
            result = [...result].sort((a, b) => a.word.localeCompare(b.word));
        } else if (sortBy === 'newest') {
            result = [...result].sort((a, b) => b.createdAt - a.createdAt);
        }
        // 'group' sort is handled by the List component's render logic, but we still pass the list.

        return result;
    }, [items, searchQuery, sortBy]);

    const handleSave = (entry: DictionaryEntry | Omit<DictionaryEntry, 'id' | 'createdAt'>) => {
        if ('id' in entry) {
            updateEntry(entry as DictionaryEntry);
        } else {
            addEntry(entry);
        }
    };

    const handleEdit = (entry: DictionaryEntry) => {
        setEditingItem(entry);
        setIsModalOpen(true);
    };

    const handleAdd = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleExport = () => {
        const data = exportData();
        navigator.clipboard.writeText(data).then(() => {
            alert("JSON copied to clipboard! You can paste this into src/data/dictionary.json to persist changes.");
        });
    };

    if (!isLoaded) return <div>Loading dictionary...</div>;

    return (
        <div className="dictionary-container">
            <Controls
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onAddClick={handleAdd}
                onExportClick={handleExport}
            />

            <DictionaryList
                items={filteredItems}
                onEdit={handleEdit}
                onDelete={deleteEntry}
                groupBy={sortBy === 'group' ? 'group' : undefined}
            />

            <AddEditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={editingItem}
            />
        </div>
    );
};
