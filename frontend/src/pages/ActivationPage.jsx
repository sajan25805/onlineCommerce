import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activationEmail = async () => {
        try {
          const res = await axios.post(`${server}/user/activate-user`, {
            activation_token,
          });
          console.log(res.data.message);
        } catch (error) {
          console.log(error);
          setError(true);
        }
      };

      activationEmail();
    }
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default ActivationPage;
