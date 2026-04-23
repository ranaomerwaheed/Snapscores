import React from 'react';

export interface Translation {
  [key: string]: any;
}

export interface Testimonial {
  name: { en: string; ar: string };
  location: { en: string; ar: string };
  text: { en: string; ar: string };
  avatar: string;
}

export interface FAQItem {
  q: { en: string; ar: string };
  a: { en: string; ar: string };
}

export interface CatalogItem {
  id: number;
  score: string;
  price: string;
  age: string;
  type: string;
  description: { en: string; ar: string };
}

export interface AccountCategory {
  id: string;
  title: { en: string; ar: string };
  icon: React.ReactNode;
  color: string;
  desc: { en: string; ar: string };
}

export interface StockItem {
  id: string;
  amount: string;
  price: string;
  desc: { en: string; ar: string };
}
