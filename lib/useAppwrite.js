import { useEffect, useState } from "react";
import { Alert } from "react-native";
const useAppwrite = (fn) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    setIsLoading(false);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, refetch };
};

export default useAppwrite;
