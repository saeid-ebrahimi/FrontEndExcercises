import { DUMMY_NEWS } from '@/dummy-news';

import sql from "better-sqlite3";
const db = sql('data.db');

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  await new Promise(resolve => setTimeout(resolve, 2000));
  return news;
}


export function getLatestNews() {
  
  return getAllNews().slice(0, 3);
}

export function getAvailableNewsYears() {
  return getAllNews().reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return getAllNews().reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return getAllNews().filter(
    (news) => new Date(news.date).getFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return getAllNews().filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}