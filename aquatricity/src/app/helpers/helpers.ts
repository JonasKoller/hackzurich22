import {Article, Path} from '../models';

const EMAIL_REGEX = /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])$/;

export function checkEmail(email: string) {
  return email.match(EMAIL_REGEX);
}

export function getCurrentPath(userPathUid: string | undefined, paths: Path[] | undefined | null): Path | undefined {
  return paths?.filter(value => value.uid === userPathUid).pop();
}

export function getPathArticles(pathArticleUid: string[] | undefined, articles: Article[] | undefined | null): Article[] | undefined {
  return articles?.filter(article => pathArticleUid?.includes(article.uid));
}

export function getFinishedPathTasks(readArticlesUid: string[] | undefined, pathArticles: Article[] | undefined) {
  return pathArticles?.filter(article => readArticlesUid?.includes(article.uid));
}

export function getUnfinishedPathTasks(readArticlesUid: string[] | undefined, pathArticles: Article[] | undefined) {
  return pathArticles?.filter(article => !readArticlesUid?.includes(article.uid));
}
