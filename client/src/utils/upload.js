import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "EasyWork");

  try {
    // const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);

    const res = await axios.post(
      "cloudinary://236319915319955:Xohm-qtu9F3CuJiKTlu2ODUfP00@dbpgpa3vf",data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
