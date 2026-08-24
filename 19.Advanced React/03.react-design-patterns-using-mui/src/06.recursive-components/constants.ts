import { TNestedObject } from "./01.dummy-example";
import { TFileNode } from "./02.FileExplorer";
import { TCommentItem } from "./03.CommnetItem";
import { TCategory } from "./04.CategoryItem";
import { TMenuItem } from "./05.MenuItem";
import { TContentNode } from "./06.PageBuilder";
import { TExpression } from "./07.expression-tree";
import { TPermission } from "./08.permision-tree";

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

export const menuItems: TMenuItem[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Products",
    children: [
      {
        id: 3,
        title: "Electronics",
        children: [
          {
            id: 4,
            title: "Computers",
            children: [
              {
                id: 5,
                title: "Laptops",
                href: "/products/electronics/computers/laptops",
              },
              {
                id: 6,
                title: "Desktop Computers",
                href: "/products/electronics/computers/desktops",
              },
            ],
          },
          {
            id: 7,
            title: "Phones",
            children: [
              {
                id: 8,
                title: "Smartphones",
                href: "/products/electronics/phones/smartphones",
              },
              {
                id: 9,
                title: "Feature Phones",
                href: "/products/electronics/phones/feature-phones",
              },
            ],
          },
        ],
      },
      {
        id: 10,
        title: "Clothing",
        children: [
          {
            id: 11,
            title: "Men's Clothing",
            children: [
              {
                id: 12,
                title: "Shirts",
                href: "/products/clothing/men/shirts",
              },
              {
                id: 13,
                title: "Pants",
                href: "/products/clothing/men/pants",
              },
            ],
          },
          {
            id: 14,
            title: "Women's Clothing",
            children: [
              {
                id: 15,
                title: "Dresses",
                href: "/products/clothing/women/dresses",
              },
              {
                id: 16,
                title: "Shoes",
                href: "/products/clothing/women/shoes",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 17,
    title: "Services",
    children: [
      {
        id: 18,
        title: "Web Development",
        href: "/services/web-development",
      },
      {
        id: 19,
        title: "UI/UX Design",
        href: "/services/ui-ux-design",
      },
      {
        id: 20,
        title: "Consulting",
        children: [
          {
            id: 21,
            title: "Technical Consulting",
            href: "/services/consulting/technical",
          },
          {
            id: 22,
            title: "Business Consulting",
            href: "/services/consulting/business",
          },
        ],
      },
    ],
  },
  {
    id: 23,
    title: "About",
    href: "/about",
  },
  {
    id: 24,
    title: "Contact",
    href: "/contact",
  },
];

export const contentData: TContentNode = {
  type: "section",
  props: {},
  children: [
    {
      type: "heading",
      props: {
        text: "Welcome to Our Website",
      },
    },
    {
      type: "paragraph",
      props: {
        text: "This page is generated from a recursive content structure.",
      },
    },
    {
      type: "card",
      props: {
        title: "Our Services",
        description:
          "We provide high-quality digital services.",
      },
      children: [
        {
          type: "paragraph",
          props: {
            text: "Learn more about what we offer.",
          },
        },
        {
          type: "button",
          props: {
            label: "Learn More",
          },
        },
      ],
    },
  ],
};

export const expression1: TExpression = {
  type: "operator",
  operator: "+",
  left: {
    type: "number",
    value: 2,
  },
  right: {
    type: "number",
    value: 3,
  },
};

export const expression2: TExpression = {
  type: "operator",
  operator: "*",
  left: {
    type: "operator",
    operator: "+",
    left: {
      type: "number",
      value: 2,
    },
    right: {
      type: "number",
      value: 3,
    },
  },
  right: {
    type: "number",
    value: 5,
  },
};

export const permissions: TPermission[] = [
  {
    id: 1,
    name: "Users",
    children: [
      {
        id: 2,
        name: "View Users",
        children: [],
      },
      {
        id: 3,
        name: "Create Users",
        children: [],
      },
      {
        id: 4,
        name: "Edit Users",
        children: [],
      },
      {
        id: 5,
        name: "Delete Users",
        children: [],
      },
    ],
  },
  {
    id: 6,
    name: "Products",
    children: [
      {
        id: 7,
        name: "View Products",
        children: [],
      },
      {
        id: 8,
        name: "Create Products",
        children: [],
      },
      {
        id: 9,
        name: "Edit Products",
        children: [],
      },
      {
        id: 10,
        name: "Delete Products",
        children: [],
      },
    ],
  },
  {
    id: 11,
    name: "Reports",
    children: [
      {
        id: 12,
        name: "View Reports",
        children: [],
      },
      {
        id: 13,
        name: "Export Reports",
        children: [],
      },
      {
        id: 14,
        name: "Advanced Reports",
        children: [
          {
            id: 15,
            name: "Financial Reports",
            children: [],
          },
          {
            id: 16,
            name: "User Reports",
            children: [],
          },
        ],
      },
    ],
  },
];
