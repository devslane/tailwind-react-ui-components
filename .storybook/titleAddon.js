// .storybook/titleAddon.js
import { addons } from '@storybook/manager-api';
import { STORY_RENDERED } from '@storybook/core-events';

addons.register('TitleAddon', (api) => {
  const customTitle = 'DevsLane Storybook'; // Define your customTitle title
  let interval = null;
  const setTitle = () => {
    clearTimeout(interval);
    let storyData = null;
    try {
      storyData = api.getCurrentStoryData(); // Some time get error
    } catch (e) {}
    let title;
    if (!storyData) {
      title = customTitle;
    } else {
      title = `${storyData.kind} - ${storyData.name} ⋅ ${customTitle}`;
    }
    if (document.title !== title) {
      // As few dom operations as possible
      document.title = title;
    }
    interval = setTimeout(setTitle, 100);
  };
  setTitle();
  api.on(STORY_RENDERED, () => {
    setTitle();
  });
});
