import { TNestedObject } from "./01.dummy-example";
import { TFileNode } from "./02.FileExplorer";
import { TCommentItem } from "./03.CommnetItem";
import { TCategory } from "./04.CategoryItem";

export const myNestedObject: TNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

export const fileTree: TFileNode = {
  name: "src",
  type: "folder",
  children: [
    {
      name: "components",
      type: "folder",
      children: [
        {
          name: "Button.tsx",
          type: "file",
        },
        {
          name: "Card.tsx",
          type: "file",
        },
      ],
    },
    {
      name: "hooks",
      type: "folder",
      children: [
        {
          name: "useAuth.ts",
          type: "file",
        },
      ],
    },
    {
      name: "index.ts",
      type: "file",
    },
  ],
};

export const comment: TCommentItem = {
  id: 1,
  username: "john_doe",
  text: "This is the main comment",
  replies: [
    {
      id: 2,
      username: "jane_smith",
      text: "This is the first reply",
      replies: [
        {
          id: 3,
          username: "mike_wilson",
          text: "This is a reply to the first reply",
          replies: [
            {
              id: 4,
              username: "sarah_jones",
              text: "This is a nested reply",
              replies: [],
            },
          ],
        },
        {
          id: 5,
          username: "alex_brown",
          text: "This is another reply to the first reply",
          replies: [],
        },
      ],
    },
    {
      id: 6,
      username: "emily_davis",
      text: "This is the second reply to the main comment",
      replies: [],
    },
  ],
};

export const categories: TCategory[] = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Computers",
        children: [
          {
            id: 3,
            name: "Laptops",
            children: [
              {
                id: 4,
                name: "Gaming Laptops",
                children: [],
              },
              {
                id: 5,
                name: "Business Laptops",
                children: [],
              },
            ],
          },
          {
            id: 6,
            name: "Desktop Computers",
            children: [],
          },
        ],
      },
      {
        id: 7,
        name: "Phones",
        children: [
          {
            id: 8,
            name: "Smartphones",
            children: [
              {
                id: 9,
                name: "Android Phones",
                children: [],
              },
              {
                id: 10,
                name: "iPhones",
                children: [],
              },
            ],
          },
          {
            id: 11,
            name: "Feature Phones",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 12,
    name: "Home & Furniture",
    children: [
      {
        id: 13,
        name: "Furniture",
        children: [
          {
            id: 14,
            name: "Living Room",
            children: [
              {
                id: 15,
                name: "Sofas",
                children: [],
              },
              {
                id: 16,
                name: "Coffee Tables",
                children: [],
              },
            ],
          },
          {
            id: 17,
            name: "Bedroom",
            children: [
              {
                id: 18,
                name: "Beds",
                children: [],
              },
              {
                id: 19,
                name: "Wardrobes",
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 20,
        name: "Home Decor",
        children: [],
      },
    ],
  },
  {
    id: 21,
    name: "Clothing",
    children: [
      {
        id: 22,
        name: "Men's Clothing",
        children: [
          {
            id: 23,
            name: "Shirts",
            children: [],
          },
          {
            id: 24,
            name: "Pants",
            children: [],
          },
        ],
      },
      {
        id: 25,
        name: "Women's Clothing",
        children: [
          {
            id: 26,
            name: "Dresses",
            children: [],
          },
          {
            id: 27,
            name: "Shoes",
            children: [],
          },
        ],
      },
    ],
  },
];
