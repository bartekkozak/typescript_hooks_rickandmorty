import React from "react";
import { IEpisode } from "../interfaces/interfaces";

export default function EpisodesList(props: any): JSX.Element {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return (
    <section>
      {episodes.map((episode: IEpisode) => {
        return (
          <div key={episode.id}>
            <img
              src={episode.image.medium}
              alt={`Rick and Morty ${episode.name}`}
            />
            <p>{episode.name}</p>
            <p>
              Season: {episode.season} Number: {episode.number}
            </p>
            <button
              type="button"
              onClick={() => toggleFavAction(state, dispatch, episode)}
            >
              {favourites.find((fav: IEpisode) => fav.id === episode.id)
                ? "Unfav"
                : "Fav"}
            </button>
          </div>
        );
      })}
    </section>
  );
}
