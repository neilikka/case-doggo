import { useEffect } from "react";
import { withRouter } from "react-router-dom";

// ensures that user starts always at the top of the page after using links

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, []);

  return null;
}

export default withRouter(ScrollToTop);
