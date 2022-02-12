/* @refresh reload */
import { render } from 'solid-js/web';
import { StoriesUI } from './StoriesUI';

render(() => <StoriesUI />, document.getElementById('root') as HTMLElement);
