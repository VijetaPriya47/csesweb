import React from 'react';
import { DictionaryEntry } from './types';

interface DictionaryListProps {
    items: DictionaryEntry[];
    onEdit: (entry: DictionaryEntry) => void;
    onDelete: (id: string) => void;
    groupBy?: string;
}

export const DictionaryList: React.FC<DictionaryListProps> = ({ items, onEdit, onDelete, groupBy }) => {
    if (items.length === 0) {
        return <div className="dictionary-empty">No entries found.</div>;
    }

    const renderCard = (item: DictionaryEntry) => (
        <div key={item.id} className="dictionary-card">
            <div className="dictionary-card-header">
                <h3>{item.word}</h3>
                <div className="dictionary-card-actions">
                    <button onClick={() => onEdit(item)} className="button button--sm button--link">Edit</button>
                    <button onClick={() => onDelete(item.id)} className="button button--sm button--link button--danger">Delete</button>
                </div>
            </div>
            <p className="dictionary-definition">{item.definition}</p>
            <div className="dictionary-groups">
                {item.groups.map((g, idx) => (
                    <span key={idx} className="badge badge--secondary">{g}</span>
                ))}
            </div>
        </div>
    );

    if (groupBy === 'group') {
        // Group items by their groups. Items can appear in multiple groups.
        const groups: Record<string, DictionaryEntry[]> = {};
        const ungrouped: DictionaryEntry[] = [];

        items.forEach(item => {
            if (item.groups.length === 0) {
                ungrouped.push(item);
            } else {
                item.groups.forEach(g => {
                    if (!groups[g]) groups[g] = [];
                    groups[g].push(item);
                });
            }
        });

        return (
            <div className="dictionary-list">
                {Object.entries(groups).sort().map(([groupName, groupItems]) => (
                    <div key={groupName} className="dictionary-group-section">
                        <h2 className="dictionary-group-title">{groupName}</h2>
                        <div className="dictionary-grid">
                            {groupItems.map(renderCard)}
                        </div>
                    </div>
                ))}
                {ungrouped.length > 0 && (
                    <div className="dictionary-group-section">
                        <h2 className="dictionary-group-title">Uncategorized</h2>
                        <div className="dictionary-grid">
                            {ungrouped.map(renderCard)}
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="dictionary-list dictionary-grid">
            {items.map(renderCard)}
        </div>
    );
};
