const getAllImages = async (API_KEY) => {
  try {
    const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occured while fetching data:", error);
  }
};

export default getAllImages;
