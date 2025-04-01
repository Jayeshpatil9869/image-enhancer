import axios from "axios";

const API_KEY = "wx7y41kkw0y8og8js";
const BASE_URL = "https://techhk.aoscdn.com/";
const MAXIMUM_RETRIES = 20;

const enhancedImageAPI = async (file) => {
  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Successfully, Task ID:", taskId);

    const enhancedImageData = await PollForEnhancedImage(taskId);
    console.log("Enhanced Image Data", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing image:", error.message);
  }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);
  
    const response = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    });
  
    if (!response?.data?.data?.task_id) {
      throw new Error("Failed to Upload Image! Task ID Not Found");
    }
  
    return response.data.data.task_id; // ✅ Corrected
  };
  
const PollForEnhancedImage = async (taskId, retries = 0) => {
  const result = await fetchEnhancedImage(taskId);

  if (result.state === 4) {
    console.log(`Processing...${retries}/${MAXIMUM_RETRIES}`);

    if (retries >= MAXIMUM_RETRIES) {
      throw new Error("Max retries reached. please try again later");
    }

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return PollForEnhancedImage(taskId, retries + 1);
  }

  console.log("Enhanced Image URL : ", result);
  return result;
};

const fetchEnhancedImage = async (task_id) => {
  // fetch img

  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${task_id}`,
    {
      headers: {
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed To fetch enhanced image ! Image Not Found");
  }

  return data.data;

  // /api/tasks/visual/scale/{task_id} ----get
};

export { enhancedImageAPI };

// {status: 200, message: 'success', data: {…}}
// data:
// {task_id: '27f217bf-24a8-4ee0-bcee-21513ba1cc4d'}
