import React, { useState, useEffect } from 'react';
import { DictionaryEntry } from './types';

interface AddEditModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (entry: Omit<DictionaryEntry, 'id' | 'createdAt'> | DictionaryEntry) => void;
    initialData?: DictionaryEntry | null;
}

export const AddEditModal: React.FC<AddEditModalProps> = ({ isOpen, onClose, onSave, initialData }) => {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [groups, setGroups] = useState('');

    useEffect(() => {
        if (initialData) {
            setWord(initialData.word);
            setDefinition(initialData.definition);
            setGroups(initialData.groups.join(', '));
        } else {
            setWord('');
            setDefinition('');
            setGroups('');
        }
    }, [initialData, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const groupArray = groups.split(',').map(g => g.trim()).filter(Boolean);
        const entryData = {
            word,
            definition,
            groups: groupArray,
        };

        if (initialData) {
            onSave({ ...initialData, ...entryData });
        } else {
            onSave(entryData);
        }
        onClose();
    };

    return (
        <div className="dictionary-modal-overlay">
            <div className="dictionary-modal">
                <h2>{initialData ? 'Edit Word' : 'Add New Word'}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Word</label>
                        <input
                            type="text"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            required
                            placeholder="e.g. Kubernetes"
                        />
                    </div>
                    <div className="form-group">
                        <label>Definition</label>
                        <textarea
                            value={definition}
                            onChange={(e) => setDefinition(e.target.value)}
                            required
                            placeholder="Enter definition..."
                        />
                    </div>
                    <div className="form-group">
                        <label>Groups (comma separated)</label>
                        <input
                            type="text"
                            value={groups}
                            onChange={(e) => setGroups(e.target.value)}
                            placeholder="e.g. DevOps, Tooling"
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" onClick={onClose} className="button button--secondary">Cancel</button>
                        <button type="submit" className="button button--primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
