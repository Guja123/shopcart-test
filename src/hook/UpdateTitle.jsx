import { useEffect } from "react";

export const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} / Shopping Test Cart`;
    },[title]);

  return null;
}
