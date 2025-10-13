# Creating-hierarchy-and-aiding-user-navigation-with-HTML

## HTML Structural Elements

- can be used to create structures make contents to similarly perceivable
- reading screen is linear so screen readers have shortcuts to access these part of the documents
- such as h1-h6, ul, table, img, section, nav, main and ...
- Heading are **_the primary way_** off exploring and navigating webpages for screen reader users

- Result of WebAIM Screen Reader User survey showed that **85.7%** respondents reported that they find heading levels very or somewhat useful.

### Its important to implement an effective heading structure

a heading should describe the content that follows it.

- there is six level of heading, we have only one H1 per page and describe the primary topic of the page and can be identical to the document title

- What about the HTML5 document outline algorithm? it does not exist anymore and deprecated on July 2022
- What document outline algorithm was about? we can have h1 per section and the browser itself understand the main heading of the page and turn nested h1 to appropriate hx such as h3.

![HTML5 document outline in practice]("./markdown-assets/09.1.html5-outline-algorithm.jpg")

![HTML outline algorithm expected output]("./markdown-assets/09.2.html-outline-algorithm-output.jpg")

- so the document outline algorithm **was never implemented in any browser, nor will it be.**

![HTML outline algorithm real output]("./markdown-assets/09.3.html-outline-algorithm-real-output.jpg")

The `<section>` element have generic role in ARIA but is't a generic container element. When an element is needed only for styling purposes or as a convenience for scripting, authors are encouraged to use the `<div>` element instead.
**A general rule is that the section element is appropriate only if the element's contents would be listed explicitly in the document's outline**

- use h1-h6 to create hierarchy in your document and don't skip heading levels by jumping from h1 to h3 or h4 and etc.
- don't choose a heading level based on the size of the text in contrast choose a heading level that appropriately reflects the content structure.
- Plan the content outline before the content is styled
