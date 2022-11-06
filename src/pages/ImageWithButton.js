import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import ImageGallery from "../components/ImageGallery";
import Loading from "../components/Loading";

export default function ImageWithButton() {
  const loadImage = async () => {
    const ret = await axios.get("https://api.imgflip.com/get_memes");
    return ret.data;
  };
  const query = useQuery({
    queryKey: ["Image"],
    queryFn: loadImage,
    enabled: false,
  });
  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="success" onClick={query.refetch}>
          Load Images
        </Button>
      </div>
      {query.isFetching && <Loading />}
      {query.isSuccess && <ImageGallery images={query.data.data.memes} />}
    </div>
  );
}
