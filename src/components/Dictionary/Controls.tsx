import React from 'react';

interface ControlsProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    sortBy: string;
    onSortChange: (sort: string) => void;
    onAddClick: () => void;
    onExportClick: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
    searchQuery,
    onSearchChange,
    sortBy,
    onSortChange,
    onAddClick,
    onExportClick
}) => {
    return (
        <div className="dictionary-controls">
            <div className="control-group search-group">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="dictionary-search-input"
                />
            </div>
            <div className="control-group dropdown-group">
                <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="dictionary-select">
                    <option value="alpha">Alphabetical</option>
                    <option value="group">By Group</option>
                    <option value="newest">Newest First</option>
                </select>
            </div>
            <div className="control-group action-group">
                <button className="button button--primary" onClick={onAddClick}>+ Add Word</button>
                <button className="button button--secondary" onClick={onExportClick}>Export JSON</button>
            </div>
        </div>
    );
};
