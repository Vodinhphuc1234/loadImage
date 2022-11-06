import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import ImageGallery from "../components/ImageGallery";
import Loading from "../components/Loading";

export default function Home() {
  const loadImage = async () => {
    const ret = await axios.get("https://api.imgflip.com/get_memes");
    return ret.data;
  };
  const query = useQuery({ queryKey: ["Image"], queryFn: loadImage });
  return (
    <div>
      {query.isLoading ? (
        <Loading />
      ) : (
        <ImageGallery images={query.data.data.memes} />
      )}
    </div>
  );
}
