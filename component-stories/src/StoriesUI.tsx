import { Link, Route, Router, Routes } from 'solid-app-router';
import { Component, createEffect, createSignal, For, JSX } from 'solid-js';
import { Story } from './stories/_story';

export const StoriesUI: Component = () => {
  const [stories, setStories] = createSignal<Story<any>[]>([]);

  createEffect(async () => {
    const storyDynamicImports = import.meta.glob('./stories/*.story.ts');
    const storyModules = await Promise.all(Object.values(storyDynamicImports).map(f => f()));
    const stories = storyModules.map(m => m.default);
    setStories(stories);
    createStoryRoutes();
  });

  const [storyRoutes, setStoryRoutes] = createSignal<JSX.Element[]>();

  function createStoryRoutes() {
    const storyRoutes = stories().map(story => (
      <Route
        path={`/${story.name}`}
        element={<story.component {...story.props} />}
      />
    ));
    setStoryRoutes(storyRoutes);
  }

  return (
    <Router>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <For each={stories()}>
          {story => (
            <Link href={`/${story.name}`}>{story.name}</Link>
          )}
        </For>
      </div>
      <hr />
      <Routes>
        {storyRoutes()}
      </Routes>
    </Router>
  );
};
