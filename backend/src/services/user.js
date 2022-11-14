import { getDBClient } from "../database/init.js";

import { uploadImage } from './images.js';

const editUserProfile = async (access_token, username, about) => {
  try {
    const supabase = getDBClient();

    const { error } = await supabase.auth.admin.updateUserById(
      access_token,
      {
        user_metadata: {
          username: username,
          about: about
        }
      }
    );

    if (error) throw error;

    return {
      about: about,
      username: username
    };

  } catch (e) {
    throw new Error(`Error: error updating user with token "${e}"`);
  }
};

const uploadUserPicture = async (receivedUser, base64) => {
  try {
    const supabase = getDBClient();
		const { image_url } = await uploadImage(receivedUser.id, base64);
    const { user, error } = await supabase.auth.api.updateUser(
      receivedUser.access_token,
      {
        user_metadata: {
          image_url: image_url,
        }
      }
    );

    if (error) throw error;
    return user;
  } catch (e) {
    console.error(e);
    throw new Error(`Error: error uploading image "${e}"`);
  }
};

export { editUserProfile, uploadUserPicture };
