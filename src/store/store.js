import { writable } from 'svelte/store';

export const likeCount = writable(0);
export const likeClick = writable(false);