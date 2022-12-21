### React - counter 1.0

Create simple counter app

## Submission Instructions [Please note]

## Maximum Marks - 13

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should render counter header in h2 tag with `Counter` as text  - 1 mark
 ✅ should render Counter component with initCount = 0 as props- 2 mark
 ✅ should render add button with text as + - 1 mark
 ✅ should render subtract button with text as - - 1 marks
 ✅ should render double button with text as Double - 1 marks
 ✅ add button should work properly - 2 marks
 ✅ subtract button should work properly - 2 marks
 ✅ double button should work properly - 2 marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// run locally
npm run start

// test locally
npm run test

```

## Folder Structure

- src
  - App.js
  - App.css
  - components
    - Counter.jsx
- `__tests__`
  - Counter.test.js (test file)
- README.md
- package.json

# Problem Description

- Display Counter with three buttons which hav increment decrement by 1 and double the count

### Counter.jsx

### Description

- create a counter component that will take the initial value as `0` as a prop, and have an increment, decrement and double button
  - increment button should have
    - text content as `+` and data-testid = `add-btn`
  - decrement button should have
    - text content as `-` and data-testid = `subtract-btn`
- on clicking the increment or decrement button the value should increase or decrease by `1`
- create another button with text `Double` and data-testid = `double-btn`
  - on clicking the button the value of the counter should be multiplied by 2
- the value of counter should be displayed in `h3` tag with data-testid = `count`
- The component should have a heading in `h2` tag with text as `Counter` and data-testid = `counter-header`

![](https://i.imgur.com/uWGZH7H.png)

- **Please do a default export of all the components**

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
