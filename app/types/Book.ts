import { Chapter } from "./Chapter";
export type Book = {
  publish: boolean;
  title: string;
  chapters: Chapter[];
};
