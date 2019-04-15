import React, { useContext, useEffect } from "react";
import { Store } from "./store/Store";
import { fetchDataAction, toggleFavAction } from "./store/actions/actions";
import { IEpisodeProps } from "./interfaces/interfaces";

const EpisodesList = React.lazy(() => import("./components/EpisodesList"));

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <React.Fragment>
      <h1>Rick and Morty</h1>
      {console.log("STATE", state)}
      <p>Pick your favorite episode!!!</p>
      <div>FAVORITES COUNT: {state.favourites.length}</div>
      <React.Suspense fallback={<div>LOADING...</div>}>
        <EpisodesList {...props} />
      </React.Suspense>
    </React.Fragment>
  );
}
