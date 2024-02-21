import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccountType } from './actions';

export default function ManageAccount() {
    const selectedOption = useSelector(state => state.selectedAccountType);
    const dispatch = useDispatch();

    const handleSelectChange = (event) => {
        dispatch(selectAccountType(event.target.value));
    };

    return (
        <div>
            <label htmlFor="accountType">Select Account Type:</label>
            <select id="accountType" onChange={handleSelectChange} value={selectedOption}>
                <option value="">Select...</option>
                <option value="students">Students Account</option>
                <option value="experts">Experts Account</option>
            </select>
            {selectedOption && (
                <div>
                    You have selected: {selectedOption === "students" ? "Students Account" : "Experts Account"}
                </div>
            )}
        </div>
    );
}
