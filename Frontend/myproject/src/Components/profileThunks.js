// profileThunks.js

import { updateProfileRequest, updateProfileSuccess, updateProfileFailure } from './profileActions';

export const updateProfile = (profileData) => async (dispatch) => {
  dispatch(updateProfileRequest());
  try {
    // Make an API request to update the profile
    // Replace this with your actual API call
    const response = await fetch('api/updateProfile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any authentication headers if needed
      },
      body: JSON.stringify(profileData),
    });
    if (!response.ok) {
      throw new Error('Failed to update profile');
    }
    const data = await response.json();
    dispatch(updateProfileSuccess(data));
  } catch (error) {
    dispatch(updateProfileFailure(error.message));
  }
};
