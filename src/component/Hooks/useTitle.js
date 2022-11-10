import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-ProCapture`;
    }, [title])
};

export default useTitle;