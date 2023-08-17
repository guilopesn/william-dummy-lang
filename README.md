# William Dummy Lang

My dummy programming language that compiles specific syntax arithmetical expressions to JavaScript expressions. I just did this as compilers training.

## Operators

- sub - Subtract
- sum - Sum
- mult - Multiply
- div - Divide

## Syntax

```javascript
(operator ...args[] | (operator ...args[]))
```

## Example

```javascript
(sum 2 (sub 4 3 1)) // Equivalent to (4 - 3 - 1 ) + 2
```

## Usage

### Install dependencies

```bash
npm install
```

### Compiling

#### Source file

**Path:** ./examples/simple.dml

**Content:**

```javascript
(sum 2 (sub 4 3 1))
```

#### Compile command

```bash
npm run compile ./examples/simple.dml
```

#### Compiled file

**Path:** ./examples/simple.js

**Content:**

```javascript
2 + (4 - 3 - 1);
```

### Executing

#### Source file

**Path:** ./examples/simple.dml

**Content:**

```javascript
(sum 2 (sub 4 3 1))
```

#### Execute command

```bash
npm run execute ./examples/simple.dml
```

#### Execute command output

```bash
2023-08-17T19:44:34.064Z Source file ./examples/simple.dml execution started
2023-08-17T19:44:34.067Z Compilation process started
2023-08-17T19:44:34.067Z Reading source file...
2023-08-17T19:44:34.067Z Source file successfully read. Compiling content...
2023-08-17T19:44:34.067Z Compilation process finished. Took 0.48ms
2023-08-17T19:44:34.068Z Source file execution finished. Took 0.57ms. Result: 2
```
